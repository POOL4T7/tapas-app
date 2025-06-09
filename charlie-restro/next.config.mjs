/** @type {import('next').NextConfig} */
const nextConfig = {
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
        source: '/privacypolicy',
        destination:
          'https://checkpoint-charlie.tapas-mundo.eu/en/datenschutzrichtlinie',
        permanent: true,
      },
      {
        source: '/privacyPolicy',
        destination:
          'https://checkpoint-charlie.tapas-mundo.eu/en/datenschutzrichtlinie',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://checkpoint-charlie.tapas-mundo.eu/en/kontakt',
        permanent: true,
      },
      {
        source: '/imprint',
        destination: 'https://checkpoint-charlie.tapas-mundo.eu/en/impressum',
        permanent: true,
      },
      {
        source: '/facilities/private-group',
        destination:
          'https://checkpoint-charlie.tapas-mundo.eu/en/einrichtungen/private-gruppe',
        permanent: true,
      },
      {
        source: '/facilities/event-space',
        destination:
          'https://checkpoint-charlie.tapas-mundo.eu/en/einrichtungen/veranstaltungsraume',
        permanent: true,
      },
      {
        source: '/facilities/dining-area',
        destination:
          'https://checkpoint-charlie.tapas-mundo.eu/en/einrichtungen/essbereich',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
