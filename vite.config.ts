import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./test-setup.ts",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5500",
        changeOrigin: false,
      }
    }
  }
})
