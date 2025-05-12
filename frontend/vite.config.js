import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // any request to /api/* will be forwarded to Flask on localhost:5000
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false
      }
    }
  }
})