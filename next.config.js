// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
//
// module.exports = nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'robbreport.com',
      },
    ]
  },
  env: {
    googleApiKey: 'AIzaSyDUiHrJRVRq_LlMSGWcYSZAygG4Q2U8mxw',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
