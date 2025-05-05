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
      // EN root
      { source: '/en/', destination: '/en', permanent: true },

      // Privacy Policy
      { source: '/privacypolicy', destination: '/en/datenschutzrichtlinie', permanent: true },
      { source: '/en/privacy', destination: '/en/datenschutzrichtlinie', permanent: true },

      // Impressum
      { source: '/imPrint', destination: '/en/impressum', permanent: true },

      // Facilities
      { source: '/facilities/wineCellar', destination: '/en/einrichtungen/veranstaltungsraume', permanent: true },
      { source: '/facilities/fullServiceBar', destination: '/en/einrichtungen/bar-mit-vollem-service', permanent: true },
      { source: '/facilities/eventSpace', destination: '/en/einrichtungen/veranstaltungsraume', permanent: true },
      { source: '/facilities/freeWiFi', destination: '/en/einrichtungen/wahle-uns', permanent: true },
      { source: '/en/facilities/freeWiFi', destination: '/en/einrichtungen/wahle-uns', permanent: true },
      { source: '/en/facilities/fullServiceBar', destination: '/en/einrichtungen/bar-mit-vollem-service', permanent: true },
      { source: '/en/facilities/outdoorPatio', destination: '/en/einrichtungen/essbereich', permanent: true },
      { source: '/en/facilities/cleanWashrooms', destination: '/en/einrichtungen/wahle-uns', permanent: true },
      { source: '/en/facilities/private-group', destination: '/en/einrichtungen/private-gruppe', permanent: true },

      // Breakfast / Brunch
      { source: '/de/facilities/breakfast', destination: '/en/einrichtungen/fruhstuck', permanent: true },
      { source: '/en/dienstleistungen/all-you-can-eat-brunch', destination: '/en/einrichtungen/all-you-can-eat-brunch', permanent: true },
      { source: '/en/facilities/allYouCanEatBrunch', destination: '/en/einrichtungen/all-you-can-eat-brunch', permanent: true },

      // Contact
      { source: '/en/contact', destination: '/en/kontakt', permanent: true }, // Assuming contact is in main page

      // Catch additional similar duplicates
      { source: '/facilities/freewifi', destination: '/en/einrichtungen/wahle-uns', permanent: true },
    ];
  },
};

export default nextConfig;