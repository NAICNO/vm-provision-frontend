import { Navigate, Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth.tsx'

export default function HomeLayout() {

  const {authState} = useAuth()

  if (authState.isAuthenticated) {
    return <Navigate to="/dashboard" replace/>
  }

  return (
    <Box>
      <Outlet/> {/* This will render the child routes */}
    </Box>
  )
}
