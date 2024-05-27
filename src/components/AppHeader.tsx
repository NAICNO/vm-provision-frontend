import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack, Image, Show,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth.tsx'
import { APP_NAME } from '../constants/Constants.ts'
import { LogOutButton } from './LogOutButton.tsx'
import { LightDarkModeButton } from './LightDarkModeButton.tsx'
import { HamburgerButton } from './HamburgerButton.tsx'

interface AppHeaderProps {
  opOpenSidebarDrawer: () => void
}

export default function AppHeader({opOpenSidebarDrawer}: AppHeaderProps) {

  const {authState} = useAuth()

  const user = authState.user

  const {colorMode} = useColorMode()

  const naicLogo = colorMode === 'light' ? '/images/naic/naic_dark.svg' : '/images/naic/naic_light.svg'

  return (
    <Flex
      as="header"
      py={{base: '0px', md: '10px'}}
      mb={{base: '0px', md: '60px'}}
      align="center"
      wrap="wrap"
    >
      <HamburgerButton openSidebarDrawer={opOpenSidebarDrawer}/>
      <NavLink to={''}>
        <Flex alignItems={'center'}>
          <Image
            src={naicLogo}
            alt="NAIC logo"
            w={{base: '60px', md: '80px'}}
            mr="20px"
            mb="5px"
          />
          <Heading as="h1" size={{base: 'md', md: 'xl'}}>
            {APP_NAME}
          </Heading>
        </Flex>
      </NavLink>
      <Spacer/>
      <Show above={'base'}>
        <HStack
          spacing={{base: '10px', md: '10px', lg: '20px'}}
          display={{base: 'none', md: 'flex'}}
          alignItems={'center'}
        >
          <LightDarkModeButton/>
          <Avatar
            size={{md: 'sm', lg: 'md'}}
            name={user?.name}
          />
          <Box>
            <Text fontWeight="bold" fontSize={{md: 'sm', lg: 'md'}}>
              {user?.name}
            </Text>
            <Text fontSize={{md: 'xs', lg: 'md'}}>
              {user?.email}
            </Text>
          </Box>
          <LogOutButton/>
        </HStack>
      </Show>
    </Flex>
  )
}
