import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListIcon,
  ListItem,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'
import { AtSignIcon, EditIcon } from '@chakra-ui/icons'
import { FiGrid } from 'react-icons/fi'

const sidebarItems = [
  {
    path: '/dashboard',
    text: 'Dashboard',
    icon: FiGrid
  },
  {
    path: '/create',
    text: 'Create',
    icon: EditIcon
  },
  {
    path: '/profile',
    text: 'Profile',
    icon: AtSignIcon
  }
]

interface SidebarProps {
  onCloseDrawer: () => void
  isDrawerOpen: boolean
}

export default function Sidebar({onCloseDrawer, isDrawerOpen}: SidebarProps) {

  const location = useLocation()
  const {colorMode} = useColorMode()
  const isDrawer = useBreakpointValue({base: true, md: false})


  const hoverBgColor = colorMode === 'light' ? 'gray.200' : 'blue.500'
  const activeBgColor = colorMode === 'light' ? 'gray.300' : 'blue.600'

  const isActive = (path: string) => location.pathname === path

  const SideBarContent = () => (
    <List fontSize={{base: '1em', md: '1.2em'}} spacing="1">
      {sidebarItems.map((item, index) => (
        <SidebarItem
          key={index}
          path={item.path}
          text={item.text}
          icon={item.icon}
          isActive={isActive(item.path)}
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
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        :
        <SideBarContent/>
      }
    </>
  )

}

const SidebarItem = ({path, text, icon, isActive, hoverBgColor, activeBgColor, onCloseDrawer}: {
  path: string,
  text: string,
  icon: any,
  isActive: boolean,
  hoverBgColor: string,
  activeBgColor: string,
  onCloseDrawer: () => void
}) => {
  return (
    <Box>
      <NavLink to={path} onClick={onCloseDrawer}>
        <ListItem
          _hover={{bg: hoverBgColor}}
          bg={isActive ? activeBgColor : 'transparent'}
          px={{base: '12px', md: '16px'}}
          py="8px"
          borderRadius="md"
        >
          <ListIcon as={icon}/>
          {text}
        </ListItem>
      </NavLink>
    </Box>
  )
}
