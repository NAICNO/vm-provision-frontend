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
import { MdAlternateEmail, MdPerson } from 'react-icons/md'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.tsx'

export default function Profile() {

  const { user } = useContext(AuthContext)

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
              {`${user?.firstName} ${user?.lastName}`}
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
