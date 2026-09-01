import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  images: {loader: 'default', unoptimized: true},
};

export default nextConfig;
