/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'huhpmogbdpibjlquvuli.supabase.co',
        port: '',
        pathname: '/**',
      },
    ]
  }
}

module.exports = nextConfig
