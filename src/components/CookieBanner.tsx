'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.scss';

const CONSENT_KEY = 'wa-cookie-consent';

export function injectTrackingScripts() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('wa-gtm')) return;

  // Google Tag Manager
  const gtm = document.createElement('script');
  gtm.id = 'wa-gtm';
  gtm.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NZLQFW58');`;
  document.head.appendChild(gtm);

  // Google Ads
  const adsJs = document.createElement('script');
  adsJs.async = true;
  adsJs.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17995549251';
  document.head.appendChild(adsJs);

  const adsConfig = document.createElement('script');
  adsConfig.id = 'wa-gtag';
  adsConfig.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17995549251');`;
  document.head.appendChild(adsConfig);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') {
      injectTrackingScripts();
    } else if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    injectTrackingScripts();
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <div className={styles.inner}>
        <div className={styles.text}>
          <strong>Cookies &amp; Privacy</strong>
          <p>
            We use cookies for analytics (Vercel) and advertising (Google Ads / GTM) to understand how visitors use our site and to measure ad performance. Strictly necessary cookies are always active.{' '}
            <Link href="/cookie-policy" className={styles.link}>Cookie Policy</Link>
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={decline} className={styles.decline}>
            Reject non-essential
          </button>
          <button onClick={accept} className={styles.accept}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
