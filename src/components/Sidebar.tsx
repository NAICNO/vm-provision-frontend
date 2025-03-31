import {
  Avatar, Badge,
  Box, Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay, HStack,
  List,
  ListIcon,
  ListItem, Spacer, Text,
  useBreakpointValue,
  useColorMode, VStack,
} from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router'
import { LogOutButton } from './LogOutButton.tsx'
import { LightDarkModeButton } from './LightDarkModeButton.tsx'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.tsx'
import { ADMIN_SIDEBAR_ITEMS, DEFAULT_SIDEBAR_BOTTOM_ITEMS, DEFAULT_SIDEBAR_TOP_ITEMS } from '../constants/Constants.ts'
import { isUserAdmin } from '../util'
import { SidebarItem } from '../types/SIdebarItem.ts'

interface SidebarProps {
  onCloseDrawer: () => void
  isDrawerOpen: boolean
}

export default function Sidebar({onCloseDrawer, isDrawerOpen}: SidebarProps) {

  const {user} = useContext(AuthContext)
  const {colorMode} = useColorMode()

  const isAdmin = isUserAdmin(user?.userType)

  const isDrawer = useBreakpointValue({base: true, md: false})

  const hoverBgColor = colorMode === 'light' ? 'gray.200' : 'blue.500'
  const activeBgColor = colorMode === 'light' ? 'gray.300' : 'blue.600'

  const seperator: SidebarItem = {type: 'separator'}

  const sidebarItems = [
    ...DEFAULT_SIDEBAR_TOP_ITEMS,
    seperator,
    ...(isAdmin ? [...ADMIN_SIDEBAR_ITEMS, seperator] : []),
    ...DEFAULT_SIDEBAR_BOTTOM_ITEMS
  ]

  const SideBarContent = () => (
    <List fontSize={{base: '1em', md: '1.2em'}} spacing="1">
      {sidebarItems.map((item, index) => (
        <SidebarItemComponent
          key={index}
          type={item.type}
          path={item.path}
          matches={item.matches}
          text={item.text}
          icon={item.icon}
          hoverBgColor={hoverBgColor}
          activeBgColor={activeBgColor}
          onCloseDrawer={onCloseDrawer}
        />
      ))}
    </List>
  )

  return (
    <>
      {isDrawer ?
        <Drawer isOpen={isDrawerOpen} placement="left" onClose={onCloseDrawer}>
          <DrawerOverlay/>
          <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <SideBarContent/>
              <VStack
                pt="50px"
                spacing={{base: '10px', md: '10px', lg: '20px'}}
                alignItems={'start'}
              >
                <HStack>
                  <Avatar
                    size={'sm'}
                    name={user?.firstName}
                  />
                  <Box>
                    <Text fontWeight="bold" fontSize={'sm'}>
                      {user?.firstName} {user?.lastName}
                    </Text>
                    <Text fontSize={'xs'}>
                      {user?.email}
                    </Text>
                  </Box>
                  {(user?.userType === 'ADMIN' || user?.userType == 'SUPER_ADMIN') &&
                    <Badge mt={'4px'} alignSelf={'start'} colorScheme="orange">{user?.userType}</Badge>
                  }
                </HStack>
                <HStack w={'100%'} pt="10px">
                  <LogOutButton/>
                  <Spacer/>
                  <LightDarkModeButton/>
                </HStack>

              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        :
        <SideBarContent/>
      }
    </>
  )
}

const SidebarItemComponent = ({
  type,
  path = '',
  matches = '',
  text = '',
  icon,
  hoverBgColor,
  activeBgColor,
  onCloseDrawer
}: {
  type: string,
  path: string | undefined,
  matches: string | undefined,
  text: string | undefined,
  icon: any,
  hoverBgColor: string,
  activeBgColor: string,
  onCloseDrawer: () => void
}) => {

  if (type === 'separator') {
    return <Divider pt="10px"/>
  } else {

    const location = useLocation()
    const {pathname} = location

    const isActive = (path: string) => {
      return pathname.includes(path)
    }

    return (
      <Box>
        <NavLink to={path} onClick={onCloseDrawer}>
          <ListItem
            _hover={{bg: hoverBgColor}}
            bg={isActive(matches) ? activeBgColor : 'transparent'}
            px={{base: '12px', md: '10px'}}
            py="6px"
            borderRadius="md"
          >
            <ListIcon as={icon}/>
            {text}
          </ListItem>
        </NavLink>
      </Box>
    )
  }
}
