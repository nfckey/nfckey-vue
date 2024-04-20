import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import tailwindNesting from 'tailwindcss/nesting'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindNesting(), tailwind(), autoprefixer()]
    }
  },
  plugins: [vue(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
