import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/downloads/apercu-accueil.html',
        destination: '/',
        permanent: false,
      },
      { source: '/realisations', destination: '/cas-d-usage', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'lapepiite.com' }],
        destination: 'https://www.lapepiite.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/downloads/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};
export default config;
