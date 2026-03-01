import type { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: 'The Top Web Design Trends to Watch in 2024 | WebAdish',
  description: 'A practical look at 2024 web design trends and how to apply them without hurting performance.'
};

export default function PostPage() {
  return (
    <BlogPostLayout
      title="The Top Web Design Trends to Watch in 2024"
      lead="Trends should improve outcomes, not just aesthetics. Here are the 2024 patterns worth adopting for serious business websites."
      ctaText="Use trends selectively: if a trend hurts speed, clarity, or conversion, skip it."
    >
      <h2>Intent-led minimalism</h2>
      <p>Simpler pages with clear hierarchy outperform over-decorated experiences.</p>
      <h2>Micro-interactions with purpose</h2>
      <p>Use small transitions to guide attention, not to distract users.</p>
      <h2>AI-assisted personalization</h2>
      <p>Dynamic content blocks and tailored messaging can improve lead quality.</p>
      <h2>Performance as design</h2>
      <p>Fast-loading pages are now a design requirement, not only an engineering goal.</p>
      <h2>Security-first UX</h2>
      <p>Visible trust cues, transparent data practices, and reliable uptime messaging are now expected.</p>
    </BlogPostLayout>
  );
}
