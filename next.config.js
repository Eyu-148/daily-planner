/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/next-daily-planner',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig