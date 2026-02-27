import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { Shield, Hammer, Globe, Code, Zap, Database } from 'lucide-react';
import styles from './page.module.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webadish | Premium WordPress Maintenance & Security Agency',
  description: 'UK & Australia\'s leading WordPress maintenance and security agency. We fix hacked sites and provide 24/7 support for agencies.',
};

export default function Home() {
  const services = [
    {
      title: 'WordPress Maintenance',
      description: 'Comprehensive care plans including daily backups, weekly updates, and 24/7 monitoring.',
      icon: <Hammer size={24} />,
      link: '/wordpress-maintenance-uk'
    },
    {
      title: 'Hacked Site Recovery',
      description: 'Emergency malware removal and site restoration. We get you back online fast.',
      icon: <Shield size={24} />,
      link: '/hacked-website-recovery-uk'
    },
    {
      title: 'Custom Web Design',
      description: 'High-converting, premium websites designed to position you as an industry leader.',
      icon: <Globe size={24} />,
      link: '/web-design-services'
    },
    {
      title: 'Web Development',
      description: 'Custom plugin development, API integrations, and complex functionality.',
      icon: <Code size={24} />,
      link: '/web-development-services'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up your site to improve SEO rankings and user experience.',
      icon: <Zap size={24} />,
      link: '/special-offers'
    },
    {
      title: 'Hosting & Email',
      description: 'Secure, high-performance hosting tailored for WordPress websites.',
      icon: <Database size={24} />,
      link: '/web-hosting-email-services'
    }
  ];

  const faqs = [
    {
      question: "How quickly can you fix a hacked website?",
      answer: "We typically start working immediately upon engagement. Most common malware infections are cleaned within 4-12 hours. Complex cases may take up to 24 hours, but we prioritize getting your site back online safely."
    },
    {
      question: "Do you work with agencies?",
      answer: "Yes! A large portion of our clients are digital agencies who whitelist our maintenance services. We handle the technical support so you can focus on client relationships and growth."
    },
    {
      question: "What is included in your maintenance plans?",
      answer: "Our core plans include daily cloud backups, weekly plugin/theme/core updates, 24/7 uptime monitoring, security scans, and a monthly report. Higher tiers include speed optimization and unlimited small edits."
    },
    {
      question: "Are you based in the UK or Australia?",
      answer: "We have team members in both time zones, allowing us to provide near 24-hour coverage and localized support for clients in both the UK and Australia."
    }
  ];

  return (
    <>
      <Hero
        title="Stop Worrying About <br /><span style='color: var(--primary)'>WordPress Security</span>"
        subtitle="Premium maintenance, emergency recovery, and design services for ambitious businesses in the UK & Australia."
      />

      <TrustSignals />

      <section className={`${styles.servicesSection} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Core Services</h2>
            <p>Everything you need to keep your digital presence secure and growing.</p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.processSection} section-padding`}>
        <div className="container">
          <div className={styles.processContent}>
            <h2>The Webadish Standard</h2>
            <p>
              We don't just fix problems; we prevent them. Our proactive approach combines
              enterprise-grade security tools with expert human oversight.
            </p>
            <ul className={styles.benefitsList}>
              <li>
                <strong>Security First:</strong> Every decision we make prioritizes the safety of your data.
              </li>
              <li>
                <strong>Speed Obsessed:</strong> We optimize every line of code for maximum performance.
              </li>
              <li>
                <strong>Transparent Communication:</strong> No jargon, just clear updates and reports.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ items={faqs} />

      <CTA />
    </>
  );
}
