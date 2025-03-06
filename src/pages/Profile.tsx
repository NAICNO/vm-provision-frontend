import { useContext } from 'react'
import {
  Link,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { MdAlternateEmail, MdPerson } from 'react-icons/md'
import { AuthContext } from '../context/AuthContext.tsx'

export default function Profile() {

  const {user} = useContext(AuthContext)

  const items = [
    {icon: MdPerson, text: `${user?.firstName} ${user?.lastName}`},
    {icon: MdAlternateEmail, text: `Email: ${user?.email}`},
  ]

  return (
    <>
      <Tabs variant="enclosed">
        <TabList>
          <Tab _selected={{color: 'white', bg: 'blue.400'}}>Account Info</Tab>
        </TabList>
        <TabPanels py="10px">
          <TabPanel>
            <List spacing={4}>
              {items.map((item, index) => (
                <ListItem key={index}>
                  <ListIcon as={item.icon}/>
                  {item.text}
                </ListItem>
              ))}
              <ListItem>
                To delete your account, please contact support at{' '}
                <Link
                  href="mailto:support@naic.no"
                  color="teal.500">
                  support@naic.no
                </Link>
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
