import { Navigate, Outlet } from 'react-router'
import { Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.tsx'
import RemoteConfigBanner from '../components/RemoteConfigBanner.tsx'

export default function HomeLayout() {

  const {isAuthenticated, loading} = useContext(AuthContext)

  if (loading) {
    return <div>Loading...</div>
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace/>
  }

  return (
    <Box>
      <RemoteConfigBanner />
      <Outlet/> {/* This will render the child routes */}
    </Box>
  )
}
