import './instrument'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import '@fontsource/ibm-plex-sans/300.css'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/700.css'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'

import { system } from './theme.ts'

import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { ColorModeProvider, useColorMode } from './components/ui/color-mode.tsx'


// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule])

// Sync AG Grid theme mode with Chakra color mode
function AgGridThemeSync() {
  const {colorMode} = useColorMode()

  useEffect(() => {
    document.body.setAttribute('data-ag-theme-mode', colorMode === 'dark' ? 'dark' : 'light')
  }, [colorMode])

  return null
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <AgGridThemeSync/>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App/>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
