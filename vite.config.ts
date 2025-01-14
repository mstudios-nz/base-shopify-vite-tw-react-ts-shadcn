import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import shopify from 'vite-plugin-shopify'
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    react(),
    shopify({
      // Front-end source code directory
      sourceCodeDir: 'src',
      // Front-end entry points directory
      entrypointsDir: 'src/entrypoints'
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    emptyOutDir: false
  }
})
