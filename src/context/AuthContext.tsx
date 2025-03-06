import React, { createContext, useEffect, useState } from 'react'
import {
  API_ENDPOINT,
  AUTH_URL
} from '../constants/Constants.ts'
import axiosInstance from '../api/ApiUtils.ts'

interface User {
  userId: string,
  email: string,
  username: string,
  firstName: string,
  lastName: string,
  userType: string,
}

interface AuthContextProps {
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setAuthenticated: () => {
  },
  user: null,
  setUser: () => {
  },
  loading: false,
  login: () => {
  },
  logout: () => {
  },
})

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // On app load, check if the user is authenticated
    axiosInstance
      .get(`${API_ENDPOINT}/auth/status`)
      .then((response) => {
        setAuthenticated(response.data.isAuthenticated)
        setUser(response.data.user)
      })
      .catch((error) => {
        console.error('Error checking auth status:', error)
        setAuthenticated(false)
        setUser(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const login = () => {
    window.location.href = AUTH_URL
  }

  const logout = () => {
    // Call the logout endpoint
    axiosInstance
      .post(`${API_ENDPOINT}/auth/logout`)
      .then((response) => {
        window.location.href = response.data.logoutUrl
      })
      .catch((error) => {
        console.error('Logout error:', error)
      })
  }

  return (
    <AuthContext.Provider
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
    </AuthContext.Provider>
  )
}
