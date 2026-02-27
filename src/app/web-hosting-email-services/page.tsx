import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Managed WordPress Hosting & Business Email',
    description: 'Fast, secure, and managed WordPress hosting. Includes business email solutions and free migration.',
};

export default function Hosting() {
    return (
        <PageTemplate
            hero={{
                title: "Managed <br /><span style='color: var(--primary)'>Hosting & Email</span>",
                subtitle: "Stop sharing resources on slow servers. Upgrade to our high-performance managed WordPress cloud.",
                ctaText: "Migrate for Free"
            }}
            features={{
                title: "Enterprise Grade Infrastructure",
                description: "Powered by Google Cloud and AWS.",
                items: [
                    { title: "NVMe Storage", description: "Lightning fast disk speeds for instant page loads.", icon: "💾", link: "#" },
                    { title: "Global CDN", description: "Content delivery network to serve users from the nearest edge location.", icon: "🌍", link: "#" },
                    { title: "Business Email", description: "Professional Google Workspace or Microsoft 365 setup.", icon: "📧", link: "#" }
                ]
            }}
            cta={{
                title: "Is Your Site Slow?",
                subtitle: "Move to Webadish hosting and see the difference immediately."
            }}
        />
    );
}
