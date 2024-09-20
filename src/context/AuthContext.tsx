import React, { createContext, useEffect, useState } from 'react'
import {
  API_ENDPOINT,
  AUTH_CLIENT_ID,
  AUTH_OPEN_ID_SCOPES,
  AUTH_REDIRECT_URL,
  AUTH_RESPONSE_TYPE,
  AUTH_URL
} from '../constants/Constants.ts'
import axiosInstance from '../api/ApiUtils.ts'
import { generateRandomString } from '../util'
import queryString from 'query-string'

interface User {
  userId: string,
  email: string,
  username: string,
  firstName:string,
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

export const AuthProvider: React.FC = ({children}) => {
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
    const state = generateRandomString()
    const nonce = generateRandomString()

    // Store state and nonce in localStorage to verify later
    localStorage.setItem('oidc_state', state)
    localStorage.setItem('oidc_nonce', nonce)

    const params = {
      response_type: AUTH_RESPONSE_TYPE,
      scope: AUTH_OPEN_ID_SCOPES,
      client_id: AUTH_CLIENT_ID,
      redirect_uri: AUTH_REDIRECT_URL,
      nonce: nonce,
      state: state,
    }

    window.location.href = `${AUTH_URL}?${queryString.stringify(params)}`
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
      value={{isAuthenticated, setAuthenticated, user, setUser, loading, login, logout}}
    >
      {children}
    </AuthContext.Provider>
  )
}
