import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Branding Services | Identity & Strategy',
    description: 'Build a memorable brand with Webadish. Logo design, brand identity, and digital strategy for modern businesses.',
};

export default function Branding() {
    return (
        <PageTemplate
            hero={{
                title: "Build a <br /><span style='color: var(--secondary)'>Memorable Brand</span>",
                subtitle: "More than just a logo. We create cohesive brand identities that resonate with your target audience.",
                ctaText: "Start Branding"
            }}
            features={{
                title: "Comprehensive Branding",
                description: "Consistency across all touchpoints.",
                items: [
                    { title: "Logo Design", description: "Unique, vector-based logos that stand out.", icon: "✒️", link: "#" },
                    { title: "Brand Guidelines", description: "Typography, color palettes, and usage rules.", icon: "📚", link: "#" },
                    { title: "Digital Strategy", description: "Messaging and positioning for the digital age.", icon: "target", link: "#" }
                ]
            }}
            cta={{
                title: "Stand Out From the Crowd",
                subtitle: "Invest in a brand that lasts."
            }}
        />
    );
}
