/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["taken-snow-used-from.trycloudflare.com"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taken-snow-used-from.trycloudflare.com",
      },
    ],
  },
};

export default nextConfig;
