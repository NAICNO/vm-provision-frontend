import { Navigate, Outlet } from 'react-router'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.tsx'

export default function HomeLayout() {

  const {isAuthenticated, loading} = useContext(AuthContext)

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="lg" color="blue.500" />
      </Center>
    )
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace/>
  }

  return (
    <Box>
      <Outlet/> {/* This will render the child routes */}
    </Box>
  )
}
