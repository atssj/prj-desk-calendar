import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const config: NextConfig = {
  basePath: isProd ? '/desk-calendar-app' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/desk-calendar-app/' : '',
};

export default config;