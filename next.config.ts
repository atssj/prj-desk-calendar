import type { NextConfig } from "next";

const config: NextConfig = {
  basePath: '/desk-calendar-app',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default config;