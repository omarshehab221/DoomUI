import type { NextConfig } from "next";
import nextra from 'nextra'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const withNextra = nextra({
  // theme: 'nextra-theme-docs',
  // themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
})

const nextConfig: NextConfig = {
  transpilePackages: ['@doom-ui/core', '@doom-ui/components'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@doom-ui/core': path.resolve(__dirname, '../core/src'),
      '@doom-ui/components': path.resolve(__dirname, '../components/src'),
    }
    return config
  }
}

export default withNextra(nextConfig)
