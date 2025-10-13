import { sentryVitePlugin } from '@sentry/vite-plugin'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [
    react(),
    sentryVitePlugin({
      org: process.env.VITE_SENTRY_ORG,
      project: process.env.VITE_SENTRY_PROJECT,
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    }),
  ],

  server: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: ['naic.thaulow.co'],
    // proxy: {
    //   '/api': {
    //     target: 'https://cloud.thaulow.co',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },

  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : []
  },

  build: {
    sourcemap: false,
    minify: mode === 'production',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
  }

}))
