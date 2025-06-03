import {
  VStack,
  Heading,
  Container,
  Center,
  Spinner,
} from '@chakra-ui/react'

import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext.tsx'
import axiosInstance from '../api/ApiUtils.ts'

export default function AuthRedirect() {

  const navigate = useNavigate()
  const {setAuthenticated, setUser} = useContext(AuthContext)

  useEffect(() => {
    axiosInstance
      .get('auth/status')
      .then((response) => {
        setAuthenticated(true)
        setUser(response.data.user)
        navigate('/dashboard')
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
            navigate(`/${route}?status=${routeParam?.status}`)
          } else {
            navigate(`/${route}`)
          }
        }
      })
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
