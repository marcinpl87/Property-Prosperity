import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // generate manifest.json in outDir for prod build
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: '/home/m/Property-Prosperity/src/main.tsx',
    },
  },
  // for static assets
  server: {
    origin: 'http://127.0.0.1:5173',
  },
})
