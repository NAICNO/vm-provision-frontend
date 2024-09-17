import {
  Button,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { useAuth } from '../hooks/useAuth.tsx'
import { MdAlternateEmail, MdPerson } from 'react-icons/md'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function Profile() {

  const {authState} = useAuth()
  const {user} = authState

  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab _selected={{color: 'white', bg: 'blue.400'}}>Account Info</Tab>
      </TabList>
      <TabPanels py="10px">
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={MdPerson}/>
              {`${user?.name}`}
            </ListItem>
            <ListItem>
              <ListIcon as={MdAlternateEmail}/>
              Email: {`${user?.email}`}
            </ListItem>
            <ListItem>
              <Button
                as="a"
                target="_blank"
                href="https://research.educloud.no/user/settings"
                colorScheme="blue"
                size="sm"
                rightIcon={<ExternalLinkIcon/>}
              >
                Change Password
              </Button>
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
