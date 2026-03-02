import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

interface ContactPayload {
  name?: string;
  email?: string;
  website?: string;
  message?: string;
  company?: string; // honeypot
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipHits = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = ipHits.get(ip) || [];
  const recent = existing.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  ipHits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const website = body.website?.trim() || 'Not provided';
    const message = body.message?.trim();
    const honeypot = body.company?.trim();
    const ip = getClientIp(request);

    // Honeypot: pretend success to avoid teaching bots
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before trying again.' },
        { status: 429 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = process.env.SMTP_SECURE === 'true';
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.SMTP_TO || process.env.SMTP_FROM_EMAIL;
    const fromName = process.env.SMTP_FROM_NAME || 'WebAdish Website';
    const fromEmail = process.env.SMTP_FROM_EMAIL;

    if (!host || !user || !pass || !fromEmail || !to) {
      return NextResponse.json({ error: 'SMTP is not fully configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeWebsite = escapeHtml(website);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    // 1) Notify team inbox
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to,
      replyTo: email,
      subject: `New contact form enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nWebsite: ${website}\n\nMessage:\n${message}`,
      html: `
        <h2>New contact form enquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Website:</strong> ${safeWebsite}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // 2) Auto-reply to customer
    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: email,
      subject: 'Thanks for contacting WebAdish — we received your message',
      text: `Hi ${name},\n\nThank you for contacting WebAdish. We have received your message and will get back to you shortly.\n\nYour message:\n${message}\n\nRegards,\nWebAdish Team`,
      html: `
        <p>Hi ${safeName},</p>
        <p>Thank you for contacting <strong>WebAdish</strong>. We have received your message and will get back to you shortly.</p>
        <p><strong>Your message:</strong><br/>${safeMessage}</p>
        <p>Regards,<br/>WebAdish Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Contact form mail error:', message, error);

    return NextResponse.json(
      {
        error: 'Failed to send message.',
        debug: process.env.NODE_ENV !== 'production' ? message : undefined,
      },
      { status: 500 }
    );
  }
}
