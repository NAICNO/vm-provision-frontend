import './instrument'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import theme from './theme.ts'
import { AuthProvider } from './context/AuthContext.tsx'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App/>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
