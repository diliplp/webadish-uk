import PageTemplate from '@/components/PageTemplate';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hacked WordPress Site Recovery Australia | Emergency Fix',
    description: 'Emergency hacked WordPress site recovery service in Australia. We clean malware, remove blacklists, and secure your site fast.',
};

export default function RecoveryAU() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Emergency WordPress Repair Australia</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
                Australian businesses rely on us to get back online fast.
            </p>
            <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid #ef4444',
                padding: '2rem',
                borderRadius: '1rem',
                marginBottom: '3rem'
            }}>
                <h3 style={{ color: '#ef4444', marginBottom: '1rem' }}>Emergency Recovery Plan</h3>
                <p>One-time fee: <strong>$499 AUD</strong></p>
                <ul style={{ textAlign: 'left', margin: '2rem auto', maxWidth: '400px' }}>
                    <li>✓ Complete Malware Removal</li>
                    <li>✓ Blacklist Removal (Google, McAfee)</li>
                    <li>✓ Core/Plugin Updates</li>
                    <li>✓ Security Hardening</li>
                    <li>✓ 30-Day Guarantee</li>
                </ul>
                <a href="#contact-section" className="btn btn-emergency">Fix My Site Now</a>
            </div>

            <div id="contact-section" style={{ textAlign: 'left', marginTop: '4rem', padding: '2rem', background: 'var(--surface)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Request Emergency Help Now</h2>
                <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Fill out the form below and we will get started immediately.</p>
                <ContactForm />
            </div>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Hacked Site Recovery <br /><span style='color: #ef4444'>Australia</span>",
                subtitle: "Expert malware removal for Australian businesses. Fast, secure, and guaranteed.",
                ctaText: "Emergency Help Australia",
                ctaLink: "#contact-section"
            }}
            content={content}
            faqs={[
                { question: "How long does it take?", answer: "Most sites are cleaned within 4-12 hours." },
                { question: "Do you offer after-hours support?", answer: "Yes, our global team ensures someone is always available." }
            ]}
            cta={{
                title: "Get Back Online Today",
                subtitle: "Our experts are standing by to restore your business.",
                btnText: "Start Recovery Now",
                btnLink: "#contact-section"
            }}
        />
    );
}
