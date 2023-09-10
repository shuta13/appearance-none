/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'b.st-hatena.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  transpilePackages: [
    'utils',
    /** @see https://github.com/vercel-labs/react-tweet/tree/main/apps/next-app#troubleshooting */
    'react-tweet',
  ],
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error'],
          }
        : false,
  },
};

module.exports = config;
