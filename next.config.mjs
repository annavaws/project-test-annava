/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ["assets.suitdev.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.suitdev.com",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
