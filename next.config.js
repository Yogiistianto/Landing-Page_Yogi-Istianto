/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    agentUpgrade: 'security',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;

