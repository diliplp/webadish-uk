import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Web Design Portfolio | Webadish',
    description: 'Explore our latest web design and development projects. See how we help businesses grow online.',
};

export default function Portfolio() {
    const content = (
        <div style={{ textAlign: 'center' }}>
            <h2>Featured Projects</h2>
            <p style={{ marginBottom: '3rem' }}>A selection of our recent work across various industries.</p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} style={{
                        background: 'var(--surface)',
                        borderRadius: '1rem',
                        overflow: 'hidden',
                        aspectRatio: '16/9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#666'
                    }}>
                        Project Placeholder {item}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <PageTemplate
            hero={{
                title: "Our <br /><span style='color: var(--primary)'>Work</span>",
                subtitle: "We take pride in delivering exceptional results for our clients.",
                ctaText: "Start Your Project"
            }}
            content={content}
            cta={{
                title: "Like What You See?",
                subtitle: "Let's create something similar for your business."
            }}
        />
    );
}
