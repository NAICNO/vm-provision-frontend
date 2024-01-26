import { sentryVitePlugin } from '@sentry/vite-plugin'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import strip from '@rollup/plugin-strip'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'uio-naic',
      project: 'vm-frontend'
    }),
    strip({
      debugger: process.env.NODE_ENV === 'production',
    })
  ],

  server: {
    port: 8080,
  },

  build: {
    sourcemap: true
  },

})
