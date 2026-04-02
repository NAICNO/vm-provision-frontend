import { Navigate, Outlet } from 'react-router'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { useV1Auth } from '../context/V1AuthContext.tsx'
import { useV2Auth } from '../context/V2AuthContext.tsx'

export default function HomeLayout() {

  const v1Auth = useV1Auth()
  const v2Auth = useV2Auth()

  if (v1Auth.loading || v2Auth.loading) {
    return (
      <Center h="100vh">
        <Spinner size="lg" color="blue.500" />
      </Center>
    )
  }

  if (v1Auth.isAuthenticated) {
    return <Navigate to="/dashboard" replace/>
  }

  if (v2Auth.isAuthenticated) {
    return <Navigate to="/v2/select-organization" replace/>
  }

  return (
    <Box>
      <Outlet/> {/* This will render the child routes */}
    </Box>
  )
}
