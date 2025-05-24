/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build output directory
  distDir: 'dist',
  
  // Enable static export for deployment flexibility
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Trailing slash for static hosting compatibility
  trailingSlash: true,
}

module.exports = nextConfig
