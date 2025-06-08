import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/altmariendorf/api/:path*', // requests to /api/* will be proxied
        destination:
          'https://alt-mariendorf-backend.tapas-mundo.eu/altmariendorf/api/:path*', // Proxy to Backend
      },
    ];
  },
  images: {
    domains: ['alt-mariendorf-backend.tapas-mundo.eu'],
  },
};

export default nextConfig;
