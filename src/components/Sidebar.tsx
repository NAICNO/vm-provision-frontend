import {
  Avatar,
  Badge,
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader, HStack,
  List,
  Separator, Spacer, Text,
  useBreakpointValue, VStack,
} from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router'

import { useColorMode } from './ui/color-mode.tsx'
import { LogOutButton } from './LogOutButton.tsx'
import { LightDarkModeButton } from './LightDarkModeButton.tsx'
import React from 'react'
import { useV1Auth } from '../context/V1AuthContext.tsx'
import { ADMIN_SIDEBAR_ITEMS, DEFAULT_SIDEBAR_BOTTOM_ITEMS, DEFAULT_SIDEBAR_TOP_ITEMS } from '../constants/Constants.ts'
import { isUserAdmin } from '../util'
import { SidebarItem } from '../types/SIdebarItem.ts'

interface SidebarProps {
  onCloseDrawer: () => void
  isDrawerOpen: boolean
}

export default function Sidebar({onCloseDrawer, isDrawerOpen}: SidebarProps) {

  const {user, logout} = useV1Auth()
  const {colorMode} = useColorMode()

  const isAdmin = isUserAdmin(user?.userType)

  const isDrawer = useBreakpointValue({base: true, md: false})

  const hoverBgColor = colorMode === 'light' ? 'blue.100' : 'blue.700'
  const activeBgColor = colorMode === 'light' ? 'blue.200' : 'blue.500'

  const seperator: SidebarItem = {type: 'separator'}

  const sidebarItems = [
    ...DEFAULT_SIDEBAR_TOP_ITEMS,
    seperator,
    ...(isAdmin ? [...ADMIN_SIDEBAR_ITEMS, seperator] : []),
    ...DEFAULT_SIDEBAR_BOTTOM_ITEMS
  ]

  const SideBarContent = () => {

    const location = useLocation()
    const {pathname} = location

    const isActive = (path: string) => {
      return pathname.includes(path)
    }

    return (
      <List.Root variant={'plain'} fontSize={{base: '1em', md: '1.2em'}} gap="1">
        {
          sidebarItems.map((item, index) => {
            if (item.type === 'separator') {
              return (
                <List.Item key={index}>
                  <Separator variant={'solid'}/>
                </List.Item>
              )
            }

            return (
              <List.Item
                key={index}
              >
                <NavLink to={item.path} onClick={onCloseDrawer} style={{width: '100%', display: 'block'}}>
                  <Box
                    _hover={{bg: hoverBgColor}}
                    bg={isActive(item.matches) ? activeBgColor : 'transparent'}
                    px={{base: '12px', md: '10px'}}
                    py="6px"
                    width="100%"
                    borderRadius="md"
                  >
                    <List.Indicator asChild>
                      {React.createElement(item.icon)}
                    </List.Indicator>
                    {item.text}
                  </Box>
                </NavLink>

              </List.Item>
            )
          })
        }
      </List.Root>
    )
  }

  const handleOpenChange = (event) => {
    if (!event.open) {
      onCloseDrawer()
    }
  }

  return (
    <>
      {isDrawer ?
        <Drawer.Root open={isDrawerOpen} placement="start" onOpenChange={handleOpenChange}>
          <Drawer.Backdrop/>
          <DrawerContent>
            <Drawer.CloseTrigger/>
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <SideBarContent/>
              <VStack
                pt="50px"
                gap={{base: '10px', md: '10px', lg: '20px'}}
                alignItems={'start'}
              >
                <HStack>
                  <Avatar.Root size={'sm'}>
                    <Avatar.Fallback name={user?.firstName}/>
                  </Avatar.Root>
                  <Box>
                    <Text fontWeight="bold" fontSize={'sm'}>
                      {user?.firstName} {user?.lastName}
                    </Text>
                    <Text fontSize={'xs'}>
                      {user?.email}
                    </Text>
                  </Box>
                  {(user?.userType === 'ADMIN' || user?.userType == 'SUPER_ADMIN') &&
                    <Badge mt={'4px'} alignSelf={'start'} colorPalette="orange">{user?.userType}</Badge>
                  }
                </HStack>
                <HStack w={'100%'} pt="10px">
                  <LogOutButton onLogout={logout}/>
                  <Spacer/>
                  <LightDarkModeButton/>
                </HStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer.Root>
        :
        <SideBarContent/>
      }
    </>
  )
}
