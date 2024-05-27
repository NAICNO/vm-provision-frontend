import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

interface HamburgerButtonProps {
    openSidebarDrawer: () => void
}

export const HamburgerButton = ({openSidebarDrawer}: HamburgerButtonProps) => {
  return (
    <IconButton
      display={{base: 'inline-flex', md: 'none'}}
      mr="20px"
      icon={<HamburgerIcon/>}
      onClick={openSidebarDrawer}
      aria-label="Open menu"
    />
  )
}
