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
    /** @see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-566917807 */
    'react-syntax-highlighter',
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
