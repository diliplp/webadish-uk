'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, ShieldAlert, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import styles from './Hero.module.scss';

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    showTrust?: boolean;
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    ctaText = "Request a Security Review",
    ctaLink = "/contact-webadish-web-design",
    showTrust = true
}) => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.2 }
        )
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                '-=0.6'
            )
            .fromTo(ctaRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                '-=0.6'
            );
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <ShieldCheck size={16} className={styles.badgeIcon} />
                        <span>#1 WordPress Security & Maintenance Agency</span>
                    </div>

                    <h1 ref={titleRef} dangerouslySetInnerHTML={{ __html: title }}></h1>

                    <p ref={subtitleRef} className={styles.subtitle}>
                        {subtitle}
                    </p>

                    <div ref={ctaRef} className={styles.ctaGroup}>
                        <Link href={ctaLink} className="btn btn-primary">
                            <ShieldAlert size={18} style={{ marginRight: '8px' }} />
                            {ctaText}
                        </Link>
                        <a href="https://wa.me/919998757045" target="_blank" rel="noopener noreferrer" className="btn btn-emergency">
                            <Phone size={18} style={{ marginRight: '8px' }} />
                            Emergency Help
                        </a>
                    </div>

                    {showTrust && (
                        <div className={styles.trustLabel}>
                            Trusted by agencies and businesses across UK & Australia
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.backgroundGlow}></div>
        </section>
    );
};

export default Hero;
