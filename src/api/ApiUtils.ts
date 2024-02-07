import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { API_ENDPOINT, AUTH_OPEN_ID_SCOPES } from '../constants/Constants.ts'
import AuthContextType, { AuthInfo, User } from '../types/AuthState.ts'
import AxiosQueueItem from '../types/AxiosQueueItem.ts'
import FetchTokenResponse from '../types/FetchTokenResponse.ts'
import { jwtDecode } from 'jwt-decode'

let isRefreshing = false
let failedQueue: AxiosQueueItem[] = []

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom: AxiosQueueItem) => {
    if (error) {
      prom.reject(error)
    } else if (token) {
      prom.resolve(token)
    }
  })

  failedQueue = []
}

export function getAxiosInstance(): AxiosInstance {
  return axios.create({
    baseURL: API_ENDPOINT,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export function getAxios(authContext?: AuthContextType) {
  const axiosInstance = getAxiosInstance()

  // Add a request interceptor
  // @ts-ignore
  axiosInstance.interceptors.request.use(async (config: { headers: { Authorization: string } }) => {
    if (authContext) {
      const {accessToken} = authContext.authState

      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  }, (error) => {
    console.log('error - Axios request', error)
    return Promise.reject(error)
  })

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
      const originalRequest: AxiosRequestConfig & { _retry: boolean } | any = error.config

      if (error.response?.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise<string>((resolve, reject) => {
            failedQueue.push({resolve, reject})
          })
            .then(token => {
              originalRequest.headers['Authorization'] = 'Bearer ' + token
              return axiosInstance(originalRequest)
            })
            .catch(err => {
              return Promise.reject(err)
            })
        }

        originalRequest._retry = true
        isRefreshing = true

        try {
          // Replace 'refreshToken()' with your token refresh logic
          const updatedTokens = await refreshTokenFromBackend(authContext?.authState.refreshToken || undefined)
          const user = jwtDecode(updatedTokens.idToken as string) as User
          const updatedIdToken = updatedTokens.idToken as string
          const updatedAccessToken = updatedTokens.accessToken as string
          const updatedRefreshToken = updatedTokens.refreshToken as string

          const authInfo: AuthInfo = {
            idToken: updatedIdToken,
            accessToken: updatedAccessToken,
            refreshToken: updatedRefreshToken,
            user
          }
          authContext?.setAuthInfo(authInfo)

          const newToken = updatedTokens.accessToken
          axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + newToken
          processQueue(null, newToken)

          return axiosInstance(originalRequest)
        } catch (refreshError) {
          processQueue(refreshError, null)
          return Promise.reject(refreshError)
        } finally {
          isRefreshing = false
        }
      }

      return Promise.reject(error)
    }
  )
  return axiosInstance
}

export const refreshTokenFromBackend = async (refreshToken: string | undefined) => {
  const axiosInstance = getAxiosInstance()

  try {
    const response = await axiosInstance.get<FetchTokenResponse>('/auth/token/refresh',
      {
        params:
          {
            refreshToken: refreshToken,
            scope: AUTH_OPEN_ID_SCOPES,
          }
      })

    console.log('Token refreshed', response.data)
    return response.data

  } catch (error) {
    console.error('Error fetching external data:', error)
    throw error
  }
}

