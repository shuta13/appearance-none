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
};

module.exports = config;
