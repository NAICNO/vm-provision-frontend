export default interface AuthContextType {
  authState: AuthState
  setAuthInfo: (idToken: string, accessToken: string,  refreshToken : string, user: User) => void
}

export interface AuthState {
  idToken: string | null
  accessToken: string | null
  user: User | null
  refreshToken: string | null
  isAuthenticated: boolean | null
}

export interface User {
  acr: string
  amr: string[]
  aud: string
  auth_time: number
  email: string
  exp: number
  iat: number
  iss: string
  name: string
  nonce: string
  proj: string
  sid: string
  sub: string
  user: string
}
