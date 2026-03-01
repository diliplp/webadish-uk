import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design Blog | WebAdish',
  description: 'Insights on WordPress security, web design trends, performance, and recovery playbooks from WebAdish.'
};

const posts = [
  {
    slug: '/10-inspiring-beautifully-designed-websites',
    title: '10 Inspiring Beautifully Designed Websites',
    excerpt: 'A practical breakdown of website examples that balance visual quality, speed, and conversion.'
  },
  {
    slug: '/the-top-web-design-trends-to-watch-in-2024',
    title: 'The Top Web Design Trends to Watch in 2024',
    excerpt: 'Which trends are worth adopting and which ones hurt accessibility, speed, and trust.'
  },
  {
    slug: '/signs-your-wordpress-website-has-been-hacked-and-what-to-do-next-in-london',
    title: 'Signs Your WordPress Website Has Been Hacked (And What to Do Next in London)',
    excerpt: 'Early warning signs, immediate containment steps, and a practical response checklist.'
  },
  {
    slug: '/revive-your-site-a-practical-guide-to-manually-restoring-your-wordpress-website',
    title: 'Revive Your Site: A Practical Guide to Manually Restoring Your WordPress Website',
    excerpt: 'A step-by-step restoration workflow to recover from breakages and security incidents safely.'
  }
];

export default function WebDesignBlogPage() {
  return (
    <main className="section-padding">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1>Web Design Blog</h1>
        <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
          Actionable guidance on web design, WordPress security, site maintenance, and performance.
        </p>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                border: '1px solid #2a2a30',
                borderRadius: '14px',
                padding: '1.25rem',
                background: '#17171a'
              }}
            >
              <h2 style={{ fontSize: '1.3rem', marginBottom: '.5rem' }}>
                <Link href={post.slug}>{post.title}</Link>
              </h2>
              <p style={{ marginBottom: 0 }}>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
