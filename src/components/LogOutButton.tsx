import { Button } from '@chakra-ui/react'

interface LogOutButtonProps {
  onLogout: () => void
}

export const LogOutButton = ({ onLogout }: LogOutButtonProps) => {
  return(
    <Button
      colorPalette={'red'}
      size={{ base: 'sm',  md: 'sm', lg: 'md'}}
      onClick={onLogout}
    >
      Log out
    </Button>
  )
}
