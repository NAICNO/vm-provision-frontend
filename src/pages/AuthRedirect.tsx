import {
  VStack,
  Heading,
  Container,
  Center,
} from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth.tsx'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetchTokens } from '../hooks/useLogin.ts'
import { jwtDecode } from 'jwt-decode'
import { User } from '../types/AuthState.ts'

export default function AuthRedirect() {

  const {setAuthInfo} = useAuth()

  const [searchParams] = useSearchParams()

  const state = searchParams.get('state') || ''
  const code = searchParams.get('code') || ''
  const nonce = localStorage.getItem('nonce') || ''

  const {refetch, data} = useFetchTokens(state, code, nonce)


  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (data?.idToken) {
      const user = jwtDecode(data.idToken) as User
      const accessToken = data.accessToken as string
      const refreshToken = data.refreshToken as string

      setAuthInfo(data.idToken, accessToken, refreshToken, user)

      console.log('data', data)
    }
  }, [data])

  return (
    <Container maxW="xl" height="100vh" centerContent>
      <Center height="100%">
        <VStack spacing={6} width="100%" maxW="md" padding="4">
          <Heading>Logging in....</Heading>
        </VStack>
      </Center>
    </Container>
  )
}
