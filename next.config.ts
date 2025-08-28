import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // OR (older syntax)
    // domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
