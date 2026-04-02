import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/Personalportfoliowebsite/' : '/'

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
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
    // ADD '**/*.md' HERE:
    assetsInclude: ['**/*.svg', '**/*.csv', '**/*.md'],
  }
})