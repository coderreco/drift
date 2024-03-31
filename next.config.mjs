/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "https://chromagbikes.com/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chromagbikes.com",
      },
    ],
  },
};

export default nextConfig;
