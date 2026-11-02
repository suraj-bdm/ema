/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["gas-anything-picked-footwear.trycloudflare.com"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gas-anything-picked-footwear.trycloudflare.com",
      },
    ],
  },
};

export default nextConfig;
