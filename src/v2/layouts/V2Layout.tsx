import { Box, Stack } from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router'
import { V2AuthContext } from '../../context/V2AuthContext'
import OrganizationHeader from '../components/OrganizationHeader'

export default function V2Layout() {
  const { isAuthenticated, loading } = useContext(V2AuthContext)

  useEffect(() => {
    document.title = `${import.meta.env.VITE_APP_NAME} - VM Provisioning`
  }, [])

  if (loading) {
    return null
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return (
    <Stack minH="100vh" gap={0}>
      <OrganizationHeader />
      <Box flex="1" bg="bg">
        <Outlet />
      </Box>
    </Stack>
  )
}
