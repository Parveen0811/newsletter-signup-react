import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/newsletter-signup-react/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html'
    }
  }
})
