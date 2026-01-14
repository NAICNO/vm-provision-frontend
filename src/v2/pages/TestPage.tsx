import { Input, Text, Button, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { client } from '../../client/client.gen'
import { usersList, usersMeRetrieve } from '../../client/sdk.gen'
import { WALDUR_API_ENDPOINT } from '../../constants/Constants.ts'

function useFetchUrl(url: string, token: string) {
  const axiosInstance = axios.create({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  })
  return useQuery({
    queryKey: ['test', url],
    enabled: false,
    queryFn: async () => {
      const response = await axiosInstance.get(url)
      console.log(response)
      return await response.data
    },
  })
}

const TestPage = () => {

  const [baseUrl, setBaseUrl] = useState<string>('/api')
  const [endPoint, setEndpoint] = useState<string>('/projects')
  const [token, setToken] = useState<string>('c3a92beb6b19741e284e2cb1024830384fc4e3ca')

  const url = `${baseUrl}${endPoint}`

  const {data, refetch} = useFetchUrl(url, token)

  const test = async () => {
    client.setConfig({
      auth: () => 'Token c03aae6dae02a66aebcf5fe28ffa3856e3fe28fd',
      baseURL: WALDUR_API_ENDPOINT,
      throwOnError: true,
      // querySerializer,
    })

    usersMeRetrieve()
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error('Failed to fetch user details:', error)
      })

  }

  return (
    <VStack spacing={4} align="start">
      <Text>Token</Text>
      <Input value={token} onChange={(e) => setToken(e.target.value)}/>
      <Text>Base Url</Text>
      <Input value={baseUrl} onChange={(e) => setBaseUrl(e.target.value)}/>
      <Text>Endpoint</Text>
      <Input value={endPoint} onChange={(e) => setEndpoint(e.target.value)}/>
      <Button onClick={() => test()}>Test</Button>
    </VStack>
  )

}

export default TestPage
