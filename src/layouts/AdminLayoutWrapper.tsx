import { Navigate, Outlet } from 'react-router'

import { useV1Auth } from '../context/V1AuthContext.tsx'
import { isUserAdmin } from '../util'

const AdminLayoutWrapper = () => {

  const {user} = useV1Auth()

  if (!isUserAdmin(user?.userType)) {
    return <Navigate to="/" state={{from: location}} replace/>
  }

  return (
    <Outlet/>
  )
}

export default AdminLayoutWrapper
