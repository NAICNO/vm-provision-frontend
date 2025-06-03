import {
  Avatar,
  Badge,
  Box,
  Flex,
  Heading,
  HStack, Image, Show,
  Spacer,
  Text,
} from '@chakra-ui/react'
import { NavLink } from 'react-router'

import { useColorMode } from './ui/color-mode.tsx'
import { APP_NAME } from '../constants/Constants.ts'
import { LogOutButton } from './LogOutButton.tsx'
import { LightDarkModeButton } from './LightDarkModeButton.tsx'
import { HamburgerButton } from './HamburgerButton.tsx'
import { AuthContext } from '../context/AuthContext.tsx'
import { useContext } from 'react'

interface AppHeaderProps {
  onOpenSidebarDrawer: () => void
  onClickAvatar: () => void
}

export default function AppHeader({onOpenSidebarDrawer, onClickAvatar}: AppHeaderProps) {

  const {user} = useContext(AuthContext)

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
      <HamburgerButton openSidebarDrawer={onOpenSidebarDrawer}/>
      <NavLink to={''}>
        <Flex alignItems={'center'}>
          <Image
            src={naicLogo}
            alt="NAIC logo"
            w={{base: '60px', md: '80px'}}
            mr="20px"
            mb="5px"
          />
          <Heading as={'h1'} size={{base: 'xl', md: '4xl'}}>
            {APP_NAME}
          </Heading>
        </Flex>
      </NavLink>
      <Spacer/>
      <Show when={'base'}>
        <HStack
          gap={{base: '10px', md: '10px', lg: '20px'}}
          display={{base: 'none', md: 'flex'}}
          alignItems={'center'}
        >
          <LightDarkModeButton/>
          <Avatar.Root
            size={{base: 'sm', md: 'md'}}
            onClick={onClickAvatar}
            cursor={'pointer'}
            variant={'solid'}
            colorPalette={'blue'}
          >
            <Avatar.Fallback name={user?.firstName}/>
          </Avatar.Root>
          <Box>
            <Text fontWeight="bold" fontSize={{md: 'sm', lg: 'md'}}>
              {user?.firstName} {user?.lastName}
            </Text>
            <Text fontSize={{md: 'xs', lg: 'md'}}>
              {user?.email}
            </Text>
          </Box>
          {
            (user?.userType === 'ADMIN' || user?.userType == 'SUPER_ADMIN') &&
            <Badge mt={'4px'} alignSelf={'start'} colorPalette="orange">{user?.userType}</Badge>
          }
          <LogOutButton/>
        </HStack>
      </Show>
    </Flex>
  )
}
