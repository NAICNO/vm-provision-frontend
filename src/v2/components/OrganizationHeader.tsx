import {
  Avatar,
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  Portal,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { LuChevronDown, LuLogOut, LuUser } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../../context/AuthContext'
import { useColorMode } from '../../components/ui/color-mode'
import { ColorModeButton } from '../../components/ui/color-mode'
import { getUserTypeText } from '../../util'
import { APP_NAME } from '../../constants/Constants'
import OrganizationBreadcrumbs from './OrganizationBreadcrumbs'
import OrganizationSelector from './OrganizationSelector'

export default function OrganizationHeader() {
  const { user, logout } = useContext(AuthContext)
  const { colorMode } = useColorMode()
  const navigate = useNavigate()

  const naicLogo = colorMode === 'light' ? '/images/naic/naic_dark.svg' : '/images/naic/naic_light.svg'
  const userType = getUserTypeText(user || undefined)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <Box
      as="header"
      borderBottomWidth="1px"
      bg="bg"
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow="sm"
    >
      <Container maxW="8xl" py={3}>
        <VStack gap={3} align="stretch">
          {/* Top Row: Logo + App name + Actions */}
          <Flex justify="space-between" align="center">
            {/* Left: Logo + App name */}
            <Link to="/v2/select-organization">
              <Flex alignItems="center" gap={3}>
                <Image
                  src={naicLogo}
                  alt="NAIC logo"
                  w={{ base: '50px', md: '60px' }}
                />
                <Heading as="h1" size={{ base: 'lg', md: 'xl' }}>
                  {APP_NAME}
                </Heading>
              </Flex>
            </Link>

            {/* Right: Organization selector + Color mode + User info */}
            <HStack gap={3}>
              {/* Organization Selector */}
              <OrganizationSelector />

              {/* Color Mode Toggle */}
              <ColorModeButton />

              {/* User Avatar + Info + Menu */}
              <Menu.Root positioning={{ placement: 'bottom-end' }}>
                <Menu.Trigger asChild>
                  <HStack
                    gap={2}
                    cursor="pointer"
                    px={2}
                    py={1}
                    borderRadius="md"
                    _hover={{ bg: 'bg.muted' }}
                  >
                    <Avatar.Root
                      size="sm"
                      variant="solid"
                      colorPalette="blue"
                    >
                      <Avatar.Fallback name={user?.full_name} />
                    </Avatar.Root>
                  
                    <Box display={{ base: 'none', md: 'block' }}>
                      <Text fontWeight="bold" fontSize="sm" lineHeight="short">
                        {user?.full_name}
                      </Text>
                      <Text fontSize="xs" color="fg.muted" lineHeight="short">
                        {user?.email}
                      </Text>
                    </Box>
                    {userType && (
                      <Badge colorPalette="orange" size="sm" display={{ base: 'none', lg: 'inline-flex' }}>
                        {userType}
                      </Badge>
                    )}
                    <LuChevronDown />
                  </HStack>
                </Menu.Trigger>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content minW="200px">
                      <Menu.Item value="profile" asChild>
                        <Link to="/profile">
                          <LuUser />
                          <Box flex="1">Profile</Box>
                        </Link>
                      </Menu.Item>
                      <Menu.Separator />
                      <Menu.Item
                        value="logout"
                        color="fg.error"
                        onClick={handleLogout}
                      >
                        <LuLogOut />
                        <Box flex="1">Logout</Box>
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
            </HStack>
          </Flex>
        </VStack>
      </Container>
      
      <OrganizationBreadcrumbs />
    </Box>
  )
}
