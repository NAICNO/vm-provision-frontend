import { IconButton } from '@chakra-ui/react'
import { RxHamburgerMenu } from 'react-icons/rx'

interface HamburgerButtonProps {
  openSidebarDrawer: () => void
}

export const HamburgerButton = ({openSidebarDrawer}: HamburgerButtonProps) => {
  return (
    <IconButton
      display={{base: 'inline-flex', md: 'none'}}
      mr="20px"
      onClick={openSidebarDrawer}
      aria-label="Open menu"
    >
      <RxHamburgerMenu/>
    </IconButton>
  )
}
