/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  compress: false,
  generateEtags: false,
  poweredByHeader: false,
  compiler: {
    removeConsole: false,
  },
  reactStrictMode: true,
  swcMinify: false,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots'
      },
      {
        source: '/robot.txt',
        destination: '/api/robots'
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  },
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  }
};

module.exports = nextConfig;