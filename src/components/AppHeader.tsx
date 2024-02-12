import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack, IconButton, Image,
  Spacer,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth.tsx'
import {
  APP_NAME,
  AUTH_END_SESSION_URL,
  AUTH_LOGOUT_REDIRECT_URL,
} from '../constants/Constants.ts'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

interface AppHeaderProps {
  opOpenSidebarDrawer: () => void
}

export default function AppHeader({opOpenSidebarDrawer}: AppHeaderProps) {

  const {authState} = useAuth()

  const user = authState.user

  const {colorMode, toggleColorMode} = useColorMode()

  const naicLogo = colorMode === 'light' ? '/images/naic/naic_dark.svg' : '/images/naic/naic_light.svg'

  const buildLogoutUrl = () => {
    const idToken = authState.idToken

    const url = `${AUTH_END_SESSION_URL}?id_token_hint=${idToken}&post_logout_redirect_uri=${AUTH_LOGOUT_REDIRECT_URL}`
    return encodeURI(url)
  }

  const logOutAndToast = () => {
    window.location.href = buildLogoutUrl()
  }

  return (
    <Flex
      as="header"
      py={{base: '0px', md: '10px'}}
      mb={{base: '0px', md: '60px'}}
      align="center"
      wrap="wrap"
    >
      <IconButton
        display={{base: 'inline-flex', md: 'none'}}
        mr="20px"
        icon={<HamburgerIcon/>}
        onClick={opOpenSidebarDrawer}
        aria-label="Open menu"
      />
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
      <HStack
        spacing={{base: '10px', md: '10px', lg: '20px'}}
        display={{base: 'none', md: 'flex'}}
        alignItems={'center'}
      >
        <IconButton
          size={{md: 'sm', lg: 'md'}}
          aria-label="switch theme"
          icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
          onClick={toggleColorMode}
        />
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
        <Button
          colorScheme="red"
          size={{md: 'sm', lg: 'md'}}
          onClick={logOutAndToast}
        >
          Log out
        </Button>
      </HStack>
    </Flex>
  )
}
