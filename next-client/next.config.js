/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'discovery-assets-production.s3.eu-west-1.amazonaws.com']
  }
}

module.exports = nextConfig
