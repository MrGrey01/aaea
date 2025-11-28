import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "/**", // Allows images from /public/assets and its subdirectories
      },
      {
        pathname: "/assets/**", // Allows images from /public/assets and its subdirectories
      },
      {
        pathname: "/uploads/images/**", // Allows images from /public/uploads/images
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fn00zhwz5j.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
        port: "",
        pathname: "/**",
      },
    ],
    // // ✅ Add timeouts and retries
    // dangerouslyAllowSVG: true,
    // contentDispositionType: "attachment",
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // // Increase timeout
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
