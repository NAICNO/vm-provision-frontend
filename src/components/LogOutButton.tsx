import { Button } from '@chakra-ui/react'
import { AUTH_END_SESSION_URL, AUTH_LOGOUT_REDIRECT_URL } from '../constants/Constants.ts'
import { useAuth } from '../hooks/useAuth.tsx'

export const LogOutButton = () => {

  const {authState} = useAuth()

  const buildLogoutUrl = () => {
    const idToken = authState.idToken

    const url = `${AUTH_END_SESSION_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${AUTH_LOGOUT_REDIRECT_URL}`
    return encodeURI(url)
  }

  const logOutAndToast = () => {
    window.location.href = buildLogoutUrl()
  }

  return(
    <Button
      colorScheme="red"
      size={{ base: 'sm',  md: 'sm', lg: 'md'}}
      onClick={logOutAndToast}
    >
      Log out
    </Button>
  )
}
