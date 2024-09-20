import axios from 'axios'
import { API_ENDPOINT } from '../constants/Constants.ts'

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
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error (e.g., redirect to login)
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
