import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext.tsx'
import { isUserAdmin } from '../util'

const AdminLayoutWrapper = () => {

  const {user} = useContext(AuthContext)

  if (!isUserAdmin(user?.userType)) {
    return <Navigate to="/" state={{from: location}} replace/>
  }

  return (
    <Outlet/>
  )
}

export default AdminLayoutWrapper
