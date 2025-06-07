import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: [
      'https://tapas-mundo.com/en/sitemap.xml',
      'https://tapas-mundo.com/de/sitemap.xml',
      'https://tapas-mundo.com/es/sitemap.xml',
    ],
  };
}
