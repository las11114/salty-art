import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/salty-art",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
