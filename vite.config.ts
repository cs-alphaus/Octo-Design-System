import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // GitHub Pages deployment configuration
  base: process.env.NODE_ENV === 'production' ? '/octo-design-system/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})