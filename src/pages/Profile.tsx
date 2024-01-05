import {
  CheckCircleIcon,
  InfoIcon,
  WarningTwoIcon
} from '@chakra-ui/icons'
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
        <Tab _selected={ { color: 'white', bg: 'blue.400' } }>Activity History</Tab>
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
        <TabPanel>
          <List spacing={ 4 }>
            <ListItem>
              <ListIcon as={ CheckCircleIcon } color="blue.400"/>
              VM creation requested.
            </ListItem>
            <ListItem>
              <ListIcon as={ CheckCircleIcon } color="green.400"/>
              VM creation successful.
            </ListItem>
            <ListItem>
              <ListIcon as={ WarningTwoIcon } color="red.400"/>
              VM creation failed.
            </ListItem>
            <ListItem>
              <ListIcon as={ CheckCircleIcon } color="teal.400"/>
              VM deletion successful.
            </ListItem>
            <ListItem>
              <ListIcon as={ InfoIcon } color="blue.400"/>
              Quota increase requested.
            </ListItem>
            <ListItem>
              <ListIcon as={ CheckCircleIcon } color="green.400"/>
              VM creation successful.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
