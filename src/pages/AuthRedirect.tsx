import { useEffect } from 'react'
import {
  VStack,
  Heading,
  Container,
  Center,
  Spinner,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { User, usersMeRetrieve } from 'waldur-js-client'

import { useAuth } from '../context/AuthContext.tsx'
import { setWaldurApiConfig } from '../api/ApiUtils.ts'

export default function AuthRedirect() {

  const {setToken, setUser, setAuthenticated} = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get('token')
    console.log('Token', token)
    if (token) {
      setToken(token)
      localStorage.setItem('authToken', token)
      setWaldurApiConfig(token)

      usersMeRetrieve()
        .then((response) => {
          console.log('AuthRedirect/Me:', response)
          setAuthenticated(true)
          setUser(response.data as User)
        })
        .catch((error) => {
          console.error('AuthRedirect: Error checking auth status:', error)
          setAuthenticated(false)
          setUser(null)
        })
    }
    navigate('/v2/select-organization')
  }, [])


  return (
    <Container maxW="xl" height="100vh" centerContent>
      <Center height="100%">
        <VStack gap={6} width="100%" maxW="md" padding="4">
          <Spinner gap="1s" size="lg"/>
          <Heading>Logging in....</Heading>
        </VStack>
      </Center>
    </Container>
  )
}
