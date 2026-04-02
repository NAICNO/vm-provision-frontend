import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  API_ENDPOINT,
  V1_AUTH_URL,
} from '../constants/Constants.ts'
import axiosInstance from '../api/ApiUtils.ts'

export interface V1User {
  userId: string
  email: string
  username: string
  firstName: string
  lastName: string
  userType: string
}

interface V1AuthContextProps {
  isAuthenticated: boolean
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  user: V1User | null
  setUser: React.Dispatch<React.SetStateAction<V1User | null>>
  loading: boolean
  login: () => void
  logout: () => void
}

export const V1AuthContext = createContext<V1AuthContextProps>({
  isAuthenticated: false,
  setAuthenticated: () => {},
  user: null,
  setUser: () => {},
  loading: false,
  login: () => {},
  logout: () => {},
})

interface V1AuthProviderProps {
  children: React.ReactNode
}

export const V1AuthProvider: React.FC<V1AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<V1User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // On app load, check if the user is authenticated via V1 backend cookies
    axiosInstance
      .get(`${API_ENDPOINT}/auth/status`)
      .then((response) => {
        setAuthenticated(response.data.isAuthenticated)
        setUser(response.data.user)
      })
      .catch((error) => {
        console.error('V1AuthContext: Error checking auth status:', error)
        setAuthenticated(false)
        setUser(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const login = () => {
    window.location.href = V1_AUTH_URL
  }

  const logout = () => {
    // Clear V2 state as well
    localStorage.removeItem('authToken')

    axiosInstance
      .post(`${API_ENDPOINT}/auth/logout`)
      .then((response) => {
        window.location.href = response.data.logoutUrl
      })
      .catch((error) => {
        console.error('V1 Logout error:', error)
        window.location.href = '/'
      })
  }

  return (
    <V1AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
        user,
        setUser,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </V1AuthContext.Provider>
  )
}

export const useV1Auth = () => {
  const context = useContext(V1AuthContext)
  if (!context) {
    throw new Error('useV1Auth must be used within a V1AuthProvider')
  }
  return context
}
