/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 's3.amazonaws.com', 'i.ibb.co', 'ajaykumarvirsangbhaipatel.mutualfundpartner.com']
  }
}

module.exports = nextConfig
