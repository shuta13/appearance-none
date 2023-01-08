/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
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
  transpilePackages: ['utils'],
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
};

module.exports = config;
