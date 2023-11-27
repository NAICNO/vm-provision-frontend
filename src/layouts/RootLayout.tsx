import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.tsx'
import { Grid, GridItem } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar.tsx'
import { useAuth } from '../hooks/useAuth.tsx'

export default function RootLayout() {

  const {authState} = useAuth()
  const location = useLocation()

  if (!authState.isAuthenticated) {
    return <Navigate to="/" state={{from: location}} replace/>
  }

  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{base: 6, lg: 2, xl: 1}}
        bg="blue.700"
        minHeight={{lg: '100vh'}}
        p={{base: '20px', lg: '30px'}}
      >
        <Sidebar/>
      </GridItem>
      <GridItem
        as="main"
        colSpan={{base: 6, lg: 4, xl: 5}}
        p="40px"
      >
        <Navbar/>
        <Outlet/>
      </GridItem>
    </Grid>
  )
}
