import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/favicon.ico", destination: "/icon.png", permanent: true },
      { source: "/solutions", destination: "/platform", permanent: true },
      { source: "/solutions/:path*", destination: "/platform", permanent: true },
      { source: "/agencies", destination: "/agencies-regulators", permanent: true },
      { source: "/request-a-pilot", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;