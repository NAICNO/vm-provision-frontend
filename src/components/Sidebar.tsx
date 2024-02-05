import { Box, List, ListIcon, ListItem, useColorMode } from '@chakra-ui/react'
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

export default function Sidebar() {

  const location = useLocation()
  const {colorMode} = useColorMode()

  const hoverBgColor = colorMode === 'light' ? 'gray.200' : 'blue.500'
  const activeBgColor = colorMode === 'light' ? 'gray.300' : 'blue.600'

  const isActive = (path: string) => location.pathname === path

  return (
    <List fontSize="1.2em" spacing="1">
      {sidebarItems.map((item, index) => (
        <SidebarItem
          key={index}
          path={item.path}
          text={item.text}
          icon={item.icon}
          isActive={isActive(item.path)}
          hoverBgColor={hoverBgColor}
          activeBgColor={activeBgColor}
        />
      ))}
    </List>
  )
}

const SidebarItem = ({path, text, icon, isActive, hoverBgColor, activeBgColor}: {
  path: string,
  text: string,
  icon: any,
  isActive: boolean,
  hoverBgColor: string,
  activeBgColor: string
}) => {
  return (
    <Box>
      <NavLink to={path}>
        <ListItem
          _hover={{bg: hoverBgColor}}
          bg={isActive ? activeBgColor : 'transparent'}
          px="16px"
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
