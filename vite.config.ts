import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ command }) => {
  const base = process.env.VERCEL ? '/' : '/Personalportfoliowebsite/'
  return {
    plugins: [
      react(),
      tailwindcss(),
      visualizer({ open: true })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        buffer: 'buffer/',
      },
    },
    define: {
      global: 'globalThis',
    },
    optimizeDeps: {
      include: ['buffer'],
    },
    assetsInclude: ['**/*.svg', '**/*.csv', '**/*.md'],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router'],
            'vendor-graph': ['react-force-graph-2d', 'force-graph', 'd3-force-3d'],
            'vendor-markdown': ['react-markdown', 'remark-gfm', 'gray-matter'],
            'd3-core': ['d3-selection', 'd3-transition', 'd3-zoom', 'd3-drag'],
          }
        }
      }
    }
  }
})