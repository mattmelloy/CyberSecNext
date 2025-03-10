/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
};

module.exports = nextConfig;