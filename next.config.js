/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 's3.amazonaws.com', 'i.ibb.co']
  }
}

module.exports = nextConfig
