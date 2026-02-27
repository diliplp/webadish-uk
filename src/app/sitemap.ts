import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://webadish.co.uk';
    const routes = [
        '',
        '/contact-webadish-web-design',
        '/wordpress-maintenance-uk',
        '/wordpress-maintenance-australia',
        '/hacked-website-recovery-uk',
        '/hacked-website-recovery-australia',
        '/web-design-services',
        '/web-development-services',
        '/branding-services',
        '/web-hosting-email-services',
        '/web-design-portfolio',
        '/special-offers',
        '/about-webadish-web-agency',
        '/privacy-policy',
        '/terms-conditions',
        '/custom-web-design-services-london',
        '/digital-marketing-london',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
