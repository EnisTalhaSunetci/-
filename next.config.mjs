/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/websitegithub',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
