/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["dial-explore-remarks-housewares.trycloudflare.com"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dial-explore-remarks-housewares.trycloudflare.com",
      },
    ],
  },
};

export default nextConfig;
