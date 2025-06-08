import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/checkpointcharlie/api/:path*', // requests to /api/* will be proxied
        destination:
          'https://checkpoint-charlie-backend.tapas-mundo.eu/checkpointcharlie/api/:path*', // Proxy to Backend
      },
    ];
  },
  images: {
    domains: ['alt-mariendorf-backend.tapas-mundo.eu'],
  },
};

export default nextConfig;
