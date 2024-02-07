import { createContext, ReactNode, useContext, useState } from 'react'
import AuthContextType, { AuthInfo, AuthState } from '../types/AuthState.ts'

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    idToken: null,
    accessToken: null,
    refreshToken: null,
    user: null,
    isAuthenticated: false,
  })

  const setAuthInfo = (authInfo: AuthInfo | null) => {
    if (authInfo) {
      const {idToken, accessToken, refreshToken, user} = authInfo
      setAuthState({
        idToken,
        accessToken,
        refreshToken,
        user,
        isAuthenticated: authInfo.accessToken != null,
      })
    } else {
      setAuthState({
        idToken: null,
        accessToken: null,
        refreshToken: null,
        user: null,
        isAuthenticated: false,
      })
    }
  }

  return (
    <AuthContext.Provider value={{authState, setAuthInfo}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) as AuthContextType
