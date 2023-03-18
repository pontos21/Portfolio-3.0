/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  basePath:'',
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        hostname: "images.unsplash.com",
      },
    ],
    minimumCacheTTL: 1500000, 
  },
}

module.exports = nextConfig
