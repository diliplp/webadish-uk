import type { ReactNode } from 'react';
import styles from './BlogPostLayout.module.scss';

interface BlogPostLayoutProps {
  title: string;
  lead: string;
  kicker?: string;
  children: ReactNode;
  ctaText?: string;
}

export default function BlogPostLayout({ title, lead, kicker = 'WebAdish Insights', children, ctaText }: BlogPostLayoutProps) {
  return (
    <main className={styles.wrapper}>
      <article className={`container ${styles.article}`}>
        <span className={styles.kicker}>{kicker}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
        <div className={styles.content}>{children}</div>
        {ctaText ? <p className={styles.cta}>{ctaText}</p> : null}
      </article>
    </main>
  );
}
