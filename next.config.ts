import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "loremflickr.com" },
      { protocol: "https", hostname: "api.dicebear.com" },
    ],
  },
};


export default nextConfig;
