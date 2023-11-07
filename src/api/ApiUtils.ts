import axios from 'axios'
import { API_ENDPOINT } from '../constants/Constants.ts'

export function getAxios() {
  return axios.create({
    baseURL: API_ENDPOINT,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}
