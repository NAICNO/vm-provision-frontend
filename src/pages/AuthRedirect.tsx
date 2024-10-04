import {
  VStack,
  Heading,
  Container,
  Center,
  Spinner,
} from '@chakra-ui/react'

import { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { AuthContext } from '../context/AuthContext.tsx'
import axiosInstance from '../api/ApiUtils.ts'
import { base64UrlDecode } from '../util'

export default function AuthRedirect() {

  const location = useLocation()
  const navigate = useNavigate()
  const {setAuthenticated, setUser} = useContext(AuthContext)

  useEffect(() => {

    const {code, state} = queryString.parse(location.search)

    const storedState = localStorage.getItem('oidc_state')
    const storedNonce = localStorage.getItem('oidc_nonce') || ''

    // Decode and parse the state parameter
    const decodedStateStr = base64UrlDecode(state as string)
    const decodedState = JSON.parse(decodedStateStr)

    if (decodedState.state !== storedState) {
      return
    }

    // Clear state from localStorage
    localStorage.removeItem('oidc_state')

    // Determine if the user is re-authenticating
    const isReauth = decodedState.isReauth === true

    axiosInstance
      .post('auth/authenticate', {code, state, nonce: storedNonce, isReauth})
      .then((response) => {
        setAuthenticated(true)
        setUser(response.data.user)
        if (isReauth) {
          navigate('/profile?delete-request=true')
        } else {
          navigate('/dashboard')
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error)
        setAuthenticated(false)
        setUser(null)

        const errorResponse = error.response

        const responseData = errorResponse.data

        if (errorResponse.status === 403) {
          const route = responseData.route
          const routeParam = responseData.routeParam
          if (routeParam) {
            console.log(route, routeParam)
            navigate(`/${route}?status=${routeParam?.status}`)
          }
          else {
            navigate(`/${route}`)
          }
        }
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
