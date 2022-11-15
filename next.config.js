/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphcms.com', 'cldup.com', 'images.ctfassets.net'],
  },
};
