import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Web Design Services | High-Converting Websites',
    description: 'Premium web design services for UK and Australia businesses. We build fast, beautiful, and high-converting websites.',
};

export default function WebDesign() {
    const content = (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Design That Drives Growth</h2>
            <p>
                Your website is your 24/7 salesperson. It needs to look incredible and perform perfectly.
                We combine aesthetic excellence with conversion psychology to turn visitors into leads.
            </p>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Web Design That <br /><span style='color: var(--primary)'>Converts</span>",
                subtitle: "Beautiful, fast, and built for growth. We design websites that position you as the market leader.",
                ctaText: "Start Your Project"
            }}
            content={content}
            features={{
                title: "Our Design Process",
                description: "From concept to launch, we handle everything.",
                items: [
                    { title: "Strategy Phase", description: "We analyze your market and competitors to find your unique angle.", icon: "🔍", link: "#" },
                    { title: "UI/UX Design", description: "Wireframing and high-fidelity mockups using Figma.", icon: "🎨", link: "#" },
                    { title: "Development", description: "Clean, semantic code using Next.js or WordPress.", icon: "💻", link: "#" },
                    { title: "Launch & Support", description: "Assisted launch and ongoing maintenance.", icon: "🚀", link: "#" }
                ]
            }}
            cta={{
                title: "Ready for a New Look?",
                subtitle: "Let's build something amazing together."
            }}
        />
    );
}
