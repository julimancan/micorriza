/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "i.ytimg.com", "img.youtube.com"],
  },
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY
  },
  swcMinify: false,
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
