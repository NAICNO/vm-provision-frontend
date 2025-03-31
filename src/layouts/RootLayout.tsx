import { Navigate, Outlet, useLocation, useNavigate } from 'react-router'
import AppHeader from '../components/AppHeader.tsx'
import { Grid, GridItem, useColorMode, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar.tsx'
import { useContext, useEffect } from 'react'
import * as WebSocketUtils from '../util/WebSoketUtil.ts'
import { AuthContext } from '../context/AuthContext.tsx'

export default function RootLayout() {

  const { isAuthenticated, user } = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()

  const {isOpen: isDrawerOpen, onOpen: onOpenDrawer, onClose: onCloseDrawer} = useDisclosure()

  const onClickAvatar = () => {
    navigate('/profile')
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{from: location}} replace/>
  }

  const colorMode = useColorMode()

  const mainGridItemBackgroundColor = colorMode.colorMode === 'light' ? 'white' : 'gray.800'
  const sidebarBackgroundColor = colorMode.colorMode === 'light' ? 'gray.100' : 'gray.700'

  useEffect(() => {
    if (isAuthenticated) {
      const userId = user?.userId
      if (userId) {
        WebSocketUtils.initializeSocket(userId)
      }
    }
    return () => {
      WebSocketUtils.closeSocket()
    }

  }, [])

  return (
    <Grid
      templateAreas={{
        base: '"header" "main"',
        md: '"header header" "nav main"',
      }}
      gridTemplateRows={{
        base: '60px 1fr',
        md: '100px 1fr',
      }}
      gridTemplateColumns={{
        base: '1fr',
        md: '250px 1fr',
      }}
      gap="1"
      h="100vh"
    >
      <GridItem
        px={{base: '20px', md: '40px'}}
        py={{base: '10px', md: '20px'}}
        area={'header'}
        boxShadow={'md'}
      >
        <AppHeader onOpenSidebarDrawer={onOpenDrawer} onClickAvatar={onClickAvatar}/>
      </GridItem>
      <GridItem
        px="20px"
        pt="20px"
        area={'nav'}
        bg={sidebarBackgroundColor}
        display={{base: isDrawerOpen ? 'block' : 'none', md: 'block'}}
      >
        <Sidebar isDrawerOpen={isDrawerOpen} onCloseDrawer={onCloseDrawer}/>
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
