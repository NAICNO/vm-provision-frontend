import axios from 'axios'
import { client } from '../client/client.gen'

import { API_ENDPOINT, WALDUR_API_ENDPOINT } from '../constants/Constants.ts'

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const url = error.config?.url || ''
    if (error.response && error.response.status === 401 && !url.includes('/auth/status')) {
      // Handle unauthorized error (e.g., redirect to login)
      // Skip redirect for /auth/status — expected to 401 when not V1-authenticated
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)

export function setWaldurApiConfig(token: string) {
  client.setConfig({
    baseURL: WALDUR_API_ENDPOINT,
    throwOnError: true,
    headers: {
      Authorization: `Token ${token}`,
    },
  })
}

export default axiosInstance
