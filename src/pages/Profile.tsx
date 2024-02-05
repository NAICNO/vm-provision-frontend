import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth.tsx'
import { MdAlternateEmail, MdPerson } from 'react-icons/md'

export default function Profile() {

  const {authState} = useAuth()
  const {user} = authState

  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab _selected={ { color: 'white', bg: 'blue.400' } }>Account Info</Tab>
      </TabList>
      <TabPanels py="10px">
        <TabPanel>
          <List spacing={ 4 }>
            <ListItem>
              <ListIcon as={ MdPerson }/>
              {`${user?.name}`}
            </ListItem>
            <ListItem>
              <ListIcon as={ MdAlternateEmail }/>
              Email: {`${user?.email}`}
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
