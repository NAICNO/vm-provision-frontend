import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, usersMeRetrieve } from 'waldur-js-client'

import {
  API_ENDPOINT,
  AUTH_URL,
} from '../constants/Constants.ts'
import axiosInstance, { setWaldurApiConfig } from '../api/ApiUtils.ts'

interface AuthContextProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => {
  },
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
  const [token, setToken] = useState<string | null>(null)
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)


  useEffect(() => {
    // On app load, check if we can fetch the user data to determine if the user is authenticated
    console.log('Checking auth status')
    const storedToken = localStorage.getItem('authToken')
    console.log('Stored token:', storedToken)
    if (storedToken) {
      setToken(storedToken)
      setWaldurApiConfig(storedToken)
    }

    if (!storedToken) {
      setAuthenticated(false)
      setLoading(false)
      return
    }

    usersMeRetrieve()
      .then((response) => {
        console.log('AuthContext/Me:', response)
        setAuthenticated(true)
        setUser(response.data)
        // After successful authentication, store the token in localStorage
        if (storedToken) {
          localStorage.setItem('authToken', storedToken)
        }
      })
      .catch((error) => {
        console.error('AuthContext: Error checking auth status:', error)
        setAuthenticated(false)
        setUser(null)
        localStorage.removeItem('authToken')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const login = () => {
    window.location.href = AUTH_URL
    // After redirect/callback, you should set the token, e.g.:
    // localStorage.setItem('authToken', token);
    // setToken(token);
    // setWaldurApiConfig({ token });
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setToken(null)
    setAuthenticated(false)
    setUser(null)
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
        token,
        setToken,
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
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
