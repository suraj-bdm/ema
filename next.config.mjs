/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["changing-demonstrate-mph-amazing.trycloudflare.com"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "changing-demonstrate-mph-amazing.trycloudflare.com",
      },
    ],
  },
};

export default nextConfig;
