import { getAxios } from '../api/ApiUtils.ts'
import { useAuth } from './useAuth.tsx'

const useAxios = (isAuthenticated = true) => {
  const authState = useAuth()
  if(!isAuthenticated) {
    return getAxios()
  }
  return getAxios(authState)
}

export default useAxios
