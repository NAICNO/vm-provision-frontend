import {
  VStack,
  Heading,
  Container,
  Center, useToast, Spinner,
} from '@chakra-ui/react'
import * as Sentry from '@sentry/react'

import { useAuth } from '../hooks/useAuth.tsx'
import { useEffect } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'
import { useFetchTokens } from '../hooks/useLogin.ts'
import { jwtDecode } from 'jwt-decode'
import { User } from '../types/AuthState.ts'

export default function AuthRedirect() {

  const toast = useToast()
  const toastId = 'error-toast-id'

  const {setAuthInfo} = useAuth()

  const [searchParams] = useSearchParams()

  const state = searchParams.get('state') || ''
  const code = searchParams.get('code') || ''
  const nonce = localStorage.getItem('nonce') || ''

  const {refetch, data, error: fetchError} = useFetchTokens(state, code, nonce)


  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (data?.idToken) {
      const user = jwtDecode(data.idToken) as User
      const accessToken = data.accessToken as string
      const refreshToken = data.refreshToken as string

      setAuthInfo(data.idToken, accessToken, refreshToken, user)
    }
  }, [data])

  if (fetchError) {
    Sentry.captureException(fetchError )
    if (!toast.isActive(toastId)) {
      toast({
        title: 'Cannot login',
        description: 'Please try again.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    }

    return <Navigate to="/" replace/>
  }

  return (
    <Container maxW="xl" height="100vh" centerContent>
      <Center height="100%">
        <VStack spacing={6} width="100%" maxW="md" padding="4">
          <Spinner speed="1s" size="lg"/>
          <Heading>Logging in....</Heading>
        </VStack>
      </Center>
    </Container>
  )
}
