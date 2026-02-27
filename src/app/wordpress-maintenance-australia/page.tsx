import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'WordPress Maintenance Plans Australia | Webadish',
    description: 'Premium WordPress maintenance for Australian businesses. Daily backups, updates, security, and 24/7 support.',
};

export default function MaintenanceAU() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Reliable WordPress Support for Australian Businesses</h2>
            <p style={{ marginBottom: '2rem' }}>
                We operate during Australian business hours to ensure your site is always updated and secure.
                Local support, local understanding, global standards.
            </p>
            <div id="pricing-plans" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{
                    background: 'var(--surface)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    flex: '1 1 300px'
                }}>
                    <h3 style={{ color: 'var(--primary)' }}>Standard Plan</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>$99<span style={{ fontSize: '1rem', color: '#666' }}>/mo AUD</span></div>
                    <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Weekly Updates</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Daily Cloud Backups</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ 24/7 Uptime Monitoring</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Monthly Report</li>
                    </ul>
                </div>
                <div style={{
                    background: 'var(--surface)',
                    padding: '2rem',
                    borderRadius: '1rem',
                    border: '1px solid var(--primary)',
                    flex: '1 1 300px'
                }}>
                    <h3 style={{ color: 'var(--primary)' }}>Pro Plan</h3>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>$199<span style={{ fontSize: '1rem', color: '#666' }}>/mo AUD</span></div>
                    <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Everything in Standard</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Daily Updates</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Speed Optimization</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Unlimited Small Edits</li>
                        <li style={{ marginBottom: '0.5rem' }}>✓ Priority Support</li>
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "WordPress Maintenance <br /><span style='color: var(--primary)'>Australia</span>",
                subtitle: "Expert WordPress care for Australian agencies and businesses. Sleep soundly knowing your site is in safe hands.",
                ctaText: "View AUD Plans",
                ctaLink: "#pricing-plans"
            }}
            content={content}
            features={{
                title: "Included in Every Plan",
                description: "We don't cut corners on security.",
                items: []
            }}
            faqs={[
                { question: "Are your servers in Australia?", answer: "We can host your backups and staging sites in Sydney/Melbourne regions for data sovereignty." },
                { question: "Do you offer white-label for AU agencies?", answer: "Yes, we partner with many Australian digital agencies under NDA." }
            ]}
            cta={{
                title: "Protect Your Australian Business",
                subtitle: "Join the top Australian brands trusting Webadish."
            }}
        />
    );
}
