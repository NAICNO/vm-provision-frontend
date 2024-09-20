import {
  VStack,
  Heading,
  Container,
  Center,
  Spinner,
} from '@chakra-ui/react'

import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { AuthContext } from '../context/AuthContext.tsx'
import axiosInstance from '../api/ApiUtils.ts'

export default function AuthRedirect() {

  const location = useLocation()
  const {setAuthenticated, setUser} = useContext(AuthContext)

  useEffect(() => {

    const {code, state} = queryString.parse(location.search)

    const storedState = localStorage.getItem('oidc_state')
    const storedNonce = localStorage.getItem('oidc_nonce') || ''

    if (state !== storedState) {
      console.error('State does not match')
      return
    }

    axiosInstance
      .post('auth/authenticate', {code, state, nonce: storedNonce})
      .then((response) => {
        setAuthenticated(true)
        setUser(response.data.user)
      })
      .catch((error) => {
        console.error('Error logging in:', error)
        setAuthenticated(false)
        setUser(null)
      })

  }, [])


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
