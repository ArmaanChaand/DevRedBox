import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/library',
        destination: 'https://library.devredbox.in',
        permanent: true
      },
      {
        source: '/library/:path*',
        destination: 'https://library.devredbox.in',
        permanent: true
      },
    ]
  },
};

export default nextConfig