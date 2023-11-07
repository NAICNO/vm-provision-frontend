import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'

interface AuthContextType {
  user: any;  // Replace `any` with the actual type of user object if known.
  login: (data: any) => void;  // Replace `any` with the actual type if known.
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({children, userData}) => {
  const [user, setUser] = useLocalStorage('user', userData)
  const navigate = useNavigate()

  const login = async (data: any) => {
    setUser(data)
    navigate('/dashboard', {replace: true})
  }

  const logout = () => {
    setUser(null)
    navigate('/', {replace: true})
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
