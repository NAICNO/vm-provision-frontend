import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: 'openapi.json',
  output: {
    postProcess: ['eslint'],
    path: 'src/client',
  },
  plugins: [
    '@hey-api/client-axios',
    '@hey-api/typescript',
    '@hey-api/sdk',
    {
      dates: true,
      name: '@hey-api/transformers',
    },
    {
      name: '@tanstack/react-query',
      queryOptions: true,
    }
  ]
})
