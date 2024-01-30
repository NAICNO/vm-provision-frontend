import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import QueryKeys from '../constants/QueryKeys.ts'
import { MyIp } from '../types/MyIp.ts'

const fetchMyIp = async () => {
  const response = await axios.get('https://api.myip.com')
  return response.data
}

export const useFetchMyIp = () => {
  return useQuery<MyIp>(
    {
      queryKey: [QueryKeys.MY_IP],
      queryFn: () => fetchMyIp(),
      gcTime: 0,
    }
  )
}
