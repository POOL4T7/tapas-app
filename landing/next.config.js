/** @type {import('next').NextConfig} */ 
const nextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', 
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.tapas-mundo.com',
          },
        ],
        destination: 'https://tapas-mundo.com/:path*',
        permanent: true,
      },


      {
        source: '/de/services/catering',
        destination: '/de/dienstleistungen/essen',
        permanent: true,
      },
      {
        source: '/de/services/giftcard',
        destination: '/de/dienstleistungen/geschenkkarte',
        permanent: true,
      },
      {
        source: '/de/services/specials',
        destination: '/de/dienstleistungen/besonderheiten',
        permanent: true,
      },
      {
        source: '/de/contact',
        destination: '/de/kontakt',
        permanent: true,
      },
      {
        source: '/de/about',
        destination: '/de/uberuns',
        permanent: true,
      },
      {
        source: '/de/de/datenschutzrichtlinie',
        destination: '/de/datenschutzrichtlinie',
        permanent: true,
      },
      {
        source: '/de/de/impressum',
        destination: '/de/impressum',
        permanent: true,
      },
      {
        source: '/de/dienstleistungen/de/impressum',
        destination: '/de/impressum',
        permanent: true,
      },
      {
        source: '/de/dienstleistungen/de/datenschutzrichtlinie',
        destination: '/de/datenschutzrichtlinie',
        permanent: true,
      },

      // English fixes
      {
        source: '/en/en/datenschutzrichtlinie',
        destination: '/en/datenschutzrichtlinie',
        permanent: true,
      },
      {
        source: '/en/dienstleistungen/en/datenschutzrichtlinie',
        destination: '/en/datenschutzrichtlinie',
        permanent: true,
      },
      {
        source: '/en/about',
        destination: '/en/uberuns',
        permanent: true,
      },
      {
        source: '/en/contact',
        destination: '/en/kontakt',
        permanent: true,
      },
      {
        source: '/en/services/dinein',
        destination: '/en/dienstleistungen/gastronomie',
        permanent: true,
      },
      {
        source: '/en/services/catering',
        destination: '/en/dienstleistungen/essen',
        permanent: true,
      },
      {
        source: '/en/services/events',
        destination: '/en/dienstleistungen/veranstaltungen',
        permanent: true,
      },
      {
        source: '/en/services/specials',
        destination: '/en/dienstleistungen/besonderheiten',
        permanent: true,
      },
      {
        source: '/en/services/giftcard',
        destination: '/en/dienstleistungen/geschenkkarte',
        permanent: true,
      },
      {
        source: '/en/services/delivery',
        destination: '/en/dienstleistungen/gastronomie',
        permanent: true,
      },
      {
        source: '/en/privacyPolicy',
        destination: '/en/datenschutzrichtlinie',
        permanent: true,
      },
      {
        source: '/en/privacy',
        destination: '/en/datenschutzrichtlinie',
        permanent: true,
      },

      // Spanish
      {
        source: '/es/es/impressum',
        destination: '/es/impressum',
        permanent: true,
      },
      {
        source: '/es/es/datenschutzrichtlinie',
        destination: '/es/datenschutzrichtlinie',
        permanent: true,
      },
      {
        source: '/es/contact',
        destination: '/es/kontakt',
        permanent: true,
      },
      {
        source: '/es/services/catering',
        destination: '/es/dienstleistungen/essen',
        permanent: true,
      },
      {
        source: '/es/services/dinein',
        destination: '/es/dienstleistungen/gastronomie',
        permanent: true,
      },
      {
        source: '/es/services/delivery',
        destination: '/es/dienstleistungen/gastronomie',
        permanent: true,
      },

      // General site-level fallbacks
      {
        source: '/services/specials',
        destination: '/en/dienstleistungen/besonderheiten',
        permanent: true,
      },
      {
        source: '/services/delivery',
        destination: '/en/dienstleistungen/gastronomie',
        permanent: true,
      },
      {
        source: '/services/dinein',
        destination: '/en/dienstleistungen/gastronomie',
        permanent: true,
      },
      {
        source: '/services/giftcard',
        destination: '/en/dienstleistungen/geschenkkarte',
        permanent: true,
      },
      {
        source: '/services/catering',
        destination: '/en/dienstleistungen/essen',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/en/kontakt',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/en/uberuns',
        permanent: true,
      },
      {
        source: '/privacyPolicy',
        destination: '/en/datenschutzrichtlinie',
        permanent: true,
      },
      {
        source: '/privacypolicy',
        destination: '/en/datenschutzrichtlinie',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/en/datenschutzrichtlinie',
        permanent: true,
      },
      {
        source: '/imprint',
        destination: '/en/impressum',
        permanent: true,
      },
      {
        source: '/imPrint',
        destination: '/en/impressum',
        permanent: true,
      },
      {
        source: '/$',
        destination: '/en',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
