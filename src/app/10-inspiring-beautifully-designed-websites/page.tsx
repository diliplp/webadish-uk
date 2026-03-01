import type { Metadata } from 'next';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata: Metadata = {
  title: '10 Inspiring Beautifully Designed Websites | WebAdish',
  description: 'Ten website design examples and what they teach about layout, speed, trust, and conversion.'
};

export default function PostPage() {
  return (
    <BlogPostLayout
      title="10 Inspiring Beautifully Designed Websites"
      lead="Great design is not only visual beauty. The best websites combine clarity, speed, and conversion-focused UX."
      ctaText="Need this level of design quality on your own site? WebAdish can run a conversion-focused redesign audit."
    >
      <h2>1) Clear hero with one promise</h2>
      <p>State what you do, for whom, and why you are different in one screen.</p>
      <h2>2) Strong visual hierarchy</h2>
      <p>Use heading scales and spacing to guide users naturally toward CTA actions.</p>
      <h2>3) Focused navigation</h2>
      <p>Remove clutter. Keep menu items to high-intent paths only.</p>
      <h2>4) Proof close to claims</h2>
      <p>Put testimonials, logos, and outcomes near service statements.</p>
      <h2>5) Mobile-first readability</h2>
      <p>Most traffic is mobile. Prioritize font size, spacing, and thumb-friendly CTAs.</p>
    </BlogPostLayout>
  );
}
