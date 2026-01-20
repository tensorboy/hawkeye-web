/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // SEO 优化: 启用尾部斜杠一致性
  trailingSlash: false,

  // 图片优化配置
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },

  // 压缩配置
  compress: true,

  // 生成静态导出配置（如果需要纯静态部署）
  // output: 'export',

  // 安全头配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // 静态资源缓存
        source: '/(.*).(js|css|woff|woff2|ttf|eot|ico|png|jpg|jpeg|gif|svg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // 重定向配置
  async redirects() {
    return [
      // 旧 URL 重定向（如果有的话）
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true, // 301 重定向
      // },
    ]
  },

  // 重写配置（用于 i18n 等）
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    }
  },

  // 实验性功能
  experimental: {
    // 优化包大小
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // webpack 配置优化
  webpack: (config, { isServer }) => {
    // 优化构建
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
