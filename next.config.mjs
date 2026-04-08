/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/EnisTalhaSunetci',
  assetPrefix: '/EnisTalhaSunetci/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
