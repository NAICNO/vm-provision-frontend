import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.tsx'
import { Grid, GridItem, useColorMode } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar.tsx'
import { useAuth } from '../hooks/useAuth.tsx'
import { useEffect } from 'react'
import * as WebSocketUtils from '../util/WebSoketUtil.ts'

export default function RootLayout() {

  const {authState} = useAuth()
  const location = useLocation()

  if (!authState.isAuthenticated) {
    return <Navigate to="/" state={{from: location}} replace/>
  }

  const colorMode = useColorMode()

  const mainGridItemBackgroundColor = colorMode.colorMode === 'light' ? 'gray.50' : 'gray.800'
  const sidebarBackgroundColor = colorMode.colorMode === 'light' ? 'gray.100' : 'gray.700'

  useEffect(() => {
    if (authState.isAuthenticated) {
      const userId = authState.user?.user
      if (userId) {
        WebSocketUtils.initializeSocket(userId)
      }
      console.log('isAuthenticated', authState.user)
    }
    return () => {
      WebSocketUtils.closeSocket()
    }


  }, [])

  return (
    <Grid
      templateAreas={'"header header" "nav main" '}
      gridTemplateRows={'100px 1fr'}
      gridTemplateColumns={'200px 1fr'}
      h="100px"
      gap="1"
      minH="100vh"
    >
      <GridItem paddingX="40px" paddingY="20px" area={'header'} boxShadow={'md'}>
        <Navbar/>
      </GridItem>
      <GridItem
        pl="20px"
        pt="20px"
        area={'nav'}
        bg={sidebarBackgroundColor}
      >
        <Sidebar/>
      </GridItem>
      <GridItem
        paddingX="20px"
        paddingY="20px"
        area={'main'}
        bg={mainGridItemBackgroundColor}
      >
        <Outlet/>
      </GridItem>
    </Grid>
  )
}
