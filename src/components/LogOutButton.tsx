import { Button } from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContext.tsx'
import { useContext } from 'react'

export const LogOutButton = () => {
  const { logout } = useContext(AuthContext)

  return(
    <Button
      colorScheme="red"
      size={{ base: 'sm',  md: 'sm', lg: 'md'}}
      onClick={logout}
    >
      Log out
    </Button>
  )
}
