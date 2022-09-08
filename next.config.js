/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["nis-gs.pix.in"],
  },
};

module.exports = nextConfig;
