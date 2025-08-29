/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    // Disable persistent filesystem cache to avoid ENOENT on Windows
    if (dev) {
      config.cache = false
    }
    return config
  },
}

export default nextConfig
