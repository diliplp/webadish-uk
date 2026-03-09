import { generatePageMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema, generateArticleSchema, generateFAQSchema } from '@/lib/schema';
import BlogPostLayout from '@/components/BlogPostLayout';

export const metadata = generatePageMetadata({
  title: 'WordPress Site Keeps Getting Hacked? Here\'s Why & How to Stop It | WebAdish',
  description: 'If your WordPress site keeps getting hacked even after cleanup, backdoors are almost certainly the cause. Learn why repeat hacks happen and how to break the cycle permanently.',
  path: '/wordpress-site-keeps-getting-hacked',
  type: 'article',
  publishedTime: '2026-03-09',
  modifiedTime: '2026-03-09',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'WordPress Site Keeps Getting Hacked', url: '/wordpress-site-keeps-getting-hacked' },
]);

const articleSchema = generateArticleSchema(
  'WordPress Site Keeps Getting Hacked? Here\'s Why & How to Stop It',
  'If your WordPress site keeps getting hacked even after cleanup, backdoors are almost certainly the cause. Learn why repeat hacks happen and how to break the cycle permanently.',
  '2026-03-09',
  '2026-03-09',
  '/wordpress-site-keeps-getting-hacked'
);

const faqSchema = generateFAQSchema([
  {
    question: 'Why does my WordPress site keep getting hacked?',
    answer: 'The most common reason a WordPress site keeps getting hacked is an undetected backdoor — a hidden file or code snippet that lets attackers re-enter even after you clean the site. Other causes include: a compromised hosting account, weak admin passwords, an outdated plugin that gets re-exploited, or a nulled theme with malware baked in.',
  },
  {
    question: 'How do I stop my WordPress site from being hacked repeatedly?',
    answer: 'To permanently stop repeat WordPress hacks: 1) Perform a full forensic cleanup including all backdoors — not just surface malware. 2) Change all passwords (WordPress admin, FTP, hosting, database). 3) Delete all unused plugins and themes. 4) Enable a Web Application Firewall. 5) Set up ongoing security monitoring. 6) Consider a professional security retainer for permanent protection.',
  },
  {
    question: 'What is a WordPress backdoor and how do I find it?',
    answer: 'A WordPress backdoor is malicious code hidden in your site files that allows attackers to re-enter without needing your password. They are often placed in the wp-content/uploads directory (which is rarely scanned), inside encoded PHP files, or disguised as legitimate WordPress core files. Finding all backdoors requires a full file-level scan — surface-level plugin scans often miss them.',
  },
  {
    question: 'Can my WordPress site get hacked through the hosting account?',
    answer: 'Yes. If your hosting account credentials are compromised, attackers can upload malicious files or modify existing ones at the server level — bypassing WordPress entirely. This is why changing FTP, cPanel, and database passwords after a hack is essential, not just WordPress admin passwords.',
  },
  {
    question: 'How much does it cost to permanently fix a repeatedly hacked WordPress site?',
    answer: 'A professional forensic cleanup for a repeatedly hacked WordPress site in the UK typically costs £1,000–£2,000 for a thorough one-time fix. An ongoing security retainer (£150–£500/month) provides the best long-term protection, as it includes continuous monitoring, immediate response to new vulnerabilities, and a recovery guarantee.',
  },
]);

export default function PostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogPostLayout
        title="WordPress Site Keeps Getting Hacked? Here's Why & How to Stop It"
        lead="You cleaned the malware. You updated everything. A week later, it's back. If your WordPress site keeps getting hacked, you haven't found the backdoor — and until you do, the cycle will never stop."
        datePublished="2026-03-09"
        dateModified="2026-03-09"
        category="Recovery"
        slug="wordpress-site-keeps-getting-hacked"
        summaryPoints={[
          'Repeat hacks almost always mean a backdoor was missed during the initial cleanup',
          'Backdoors survive reinstalls, password changes, and surface-level malware scans',
          'Breaking the cycle requires a full forensic cleanup — not just removing visible malware',
        ]}
      >
        <h2>Why your site keeps getting hacked</h2>
        <p>If your WordPress site is being compromised repeatedly — even after you have cleaned it and updated everything — there are a small number of root causes. Understanding which one applies to your situation is the first step to breaking the cycle.</p>

        <h2>The most common cause: undetected backdoors</h2>
        <p>A backdoor is a hidden piece of code that lets attackers re-enter your site without needing your username or password. When hackers compromise a site, the malware you can see — the spam links, the redirects, the defaced pages — is just the symptom. The backdoor is the real problem, and it is designed to be invisible.</p>
        <p>Backdoors are commonly hidden in:</p>
        <ul>
          <li><strong>The wp-content/uploads directory</strong> — This folder is writable by WordPress for uploading images, which means attackers can place PHP files there. Most security scans focus on plugin and theme files and miss this location entirely.</li>
          <li><strong>Encoded PHP files</strong> — Malicious code is often base64-encoded to look like gibberish, making it hard to identify by eye or by basic scanners.</li>
          <li><strong>WordPress core file replacements</strong> — Attackers replace legitimate files like wp-load.php or functions in wp-includes with modified versions containing backdoor code.</li>
          <li><strong>Database entries</strong> — Malicious JavaScript or PHP can be injected directly into your WordPress database, inside post content, widget settings, or theme options.</li>
          <li><strong>Plugin and theme files</strong> — Even after you delete an infected plugin, if a backup or cached version remains on the server, the backdoor persists.</li>
        </ul>

        <h2>Other reasons WordPress keeps getting hacked</h2>

        <h3>Compromised hosting credentials</h3>
        <p>If your FTP, cPanel, or hosting panel password was part of the original breach, attackers may still have access at the server level — independent of WordPress entirely. Changing your WordPress admin password does nothing if they can still log into your hosting account and upload files directly.</p>

        <h3>Vulnerable plugin being re-exploited</h3>
        <p>If a plugin with a known vulnerability is still installed and active — even if you cleaned the malware it caused — attackers can exploit the same vulnerability again within days. Automated bots scan millions of sites constantly for known vulnerable plugin versions. If yours shows up in a scan, it will be targeted again.</p>

        <h3>Nulled themes or plugins</h3>
        <p>Nulled (pirated) themes and plugins frequently contain malware baked into the code itself. Every time the file is loaded, it re-infects your site. No amount of cleanup will help if a nulled file is still installed.</p>

        <h3>Cross-contamination from another site</h3>
        <p>If you host multiple WordPress sites on the same hosting account and one is compromised, the malware can spread laterally to your other sites. Cleaning one site without addressing all others on the same account will result in re-infection.</p>

        <h2>How to permanently stop repeat WordPress hacks</h2>

        <h3>Step 1: Full forensic cleanup — not just surface malware</h3>
        <p>A genuine cleanup requires scanning every file on your server, not just the WordPress install directory. This includes the uploads folder, any hidden directories, and server-level files. Every backdoor must be identified and removed. If even one is missed, the site will be reinfected.</p>

        <h3>Step 2: Change every credential</h3>
        <p>After cleanup, change all of the following — not just your WordPress admin password:</p>
        <ul>
          <li>All WordPress admin account passwords</li>
          <li>FTP/SFTP credentials</li>
          <li>cPanel or hosting panel password</li>
          <li>Database password (and update wp-config.php accordingly)</li>
          <li>Any API keys or service integrations connected to the site</li>
        </ul>

        <h3>Step 3: Remove all unused plugins and themes</h3>
        <p>Deactivated plugins still present a vulnerability — their files remain on the server and can be exploited. Delete every plugin and theme you are not actively using. There is no benefit to keeping them.</p>

        <h3>Step 4: Enable a Web Application Firewall</h3>
        <p>A WAF (Cloudflare, Sucuri, or Wordfence Premium) blocks malicious traffic before it reaches your site. It blocks known attack patterns, blocks IP addresses associated with previous attacks, and provides a layer of protection even when vulnerabilities exist in your plugins.</p>

        <h3>Step 5: Implement ongoing security monitoring</h3>
        <p>Once clean, you need to stay clean. This means daily automated scanning for file changes, malware, and new vulnerabilities. Any change to a core file should trigger an immediate alert. A security retainer service handles this continuously so you don't have to.</p>

        <h2>When to call a professional</h2>
        <p>If your site has been hacked more than once, or if you have tried to clean it yourself and the hack returned, the most cost-effective path is a professional forensic cleanup. Security specialists know exactly where backdoors hide and have the tools to find them all — not just the ones that are easy to find.</p>
        <p>WebAdish provides emergency recovery for repeatedly hacked WordPress sites. Our cleanup includes a full file-level forensic scan, complete backdoor removal, credential rotation guidance, firewall setup, and a 30-day guarantee — if your site is reinfected within 30 days of our cleanup, we fix it again at no charge.</p>
      </BlogPostLayout>
    </>
  );
}
