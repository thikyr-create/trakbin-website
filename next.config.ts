import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/solutions", destination: "/platform", permanent: true },
      { source: "/solutions/:path*", destination: "/platform", permanent: true },
      // add any other Render-era URLs here as Google reveals them
    ];
  },
};

export default nextConfig;