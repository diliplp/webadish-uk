import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Special Offers | Webadish',
    description: 'Exclusive deals on web design, maintenance, and security services.',
};

export default function SpecialOffers() {
    const content = (
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Current Promotions</h2>
            <div style={{
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                padding: '3rem',
                borderRadius: '1rem',
                marginTop: '2rem',
                color: 'white'
            }}>
                <h3>Free Security Audit</h3>
                <p style={{ color: 'white', marginBottom: '1.5rem' }}>
                    For a limited time, get a comprehensive security scan and report for your WordPress website completely free.
                </p>
                <a href="/contact-webadish-web-design" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>Claim Offer</a>
            </div>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Special <br /><span style='color: var(--secondary)'>Offers</span>",
                subtitle: "Premium services at exceptional value. Check back often for new deals.",
                ctaText: "Contact Us"
            }}
            content={content}
        />
    );
}
