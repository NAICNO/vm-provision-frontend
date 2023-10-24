import {
  CheckCircleIcon,
  EmailIcon,
  InfoIcon,
  PhoneIcon,
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

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" variant="enclosed" colorScheme="blue">
      <TabList>
        <Tab _selected={ { color: 'white', bg: 'blue.400' } }>Account Info</Tab>
        <Tab _selected={ { color: 'white', bg: 'blue.400' } }>Task History</Tab>
      </TabList>

      <TabPanels py="10px">
        <TabPanel>
          <List spacing={ 4 }>
            <ListItem>
              Ashen Wijesiri
            </ListItem>
            <ListItem>
              <ListIcon as={ EmailIcon }/>
              Email: ashenw@uio.no
            </ListItem>
            <ListItem>
              <ListIcon as={ PhoneIcon }/>
              93424766
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
