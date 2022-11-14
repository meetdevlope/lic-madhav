/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 's3.amazonaws.com', 'i.ibb.co', 'ajaykumarvirsangbhaipatel.mutualfundpartner.com', '517e-122-170-19-157.in.ngrok.io']
  }
}

module.exports = nextConfig
