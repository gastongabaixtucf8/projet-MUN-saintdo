import type { NextConfig } from 'next'

// Tell browsers to re-check with the server on every load, so visitors always
// get the latest version instead of a stale cached copy.
const alwaysFresh = 'public, max-age=0, must-revalidate'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async headers() {
    const header = [{ key: 'Cache-Control', value: alwaysFresh }]
    return [
      // Pages — always serve the newest version
      { source: '/', headers: header },
      { source: '/about', headers: header },
      { source: '/mun2027', headers: header },
      { source: '/pau', headers: header },
      { source: '/gallery', headers: header },
      { source: '/contact', headers: header },
      // Media — so a replaced image / video / pdf shows immediately
      { source: '/images/:path*', headers: header },
      { source: '/saint-dominique-video.mp4', headers: header },
      { source: '/delegates-guide.pdf', headers: header },
    ]
  },
}

export default nextConfig
