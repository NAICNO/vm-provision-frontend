import {
  Button,
  HStack,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { MdAlternateEmail, MdPerson } from 'react-icons/md'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext.tsx'
import DeleteAccountInfoModal from '../components/DeleteAccountInfoModal.tsx'
import DeleteAccountConfirmationModal from '../components/DeleteAccountConfirmationModal.tsx'
import { useCreateDeleteAccountRequest } from '../hooks/useDeleteAccount.ts'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export default function Profile() {

  const {user, reauthenticate, logout} = useContext(AuthContext)

  const location = useLocation()
  const {'delete-request': deleteRequest} = queryString.parse(location.search)

  const toast = useToast()

  useEffect(() => {
    if (deleteRequest) {
      onOpenDeleteConfirmation()
    }
  }, [])

  const {
    isOpen: isOpenDeleteInfo,
    onOpen: onOpenDeleteInfo,
    onClose: onCloseDeleteInfo
  } = useDisclosure()

  const {
    isOpen: isOpenDeleteConfirmation,
    onOpen: onOpenDeleteConfirmation,
    onClose: onCloseDeleteConfirmation
  } = useDisclosure()

  const onSuccessDeleteRequest = () => {
    logout()
  }

  const onErrorDeleteRequest = () => {
    onCloseDeleteConfirmation()
    toast({
      title: 'Error',
      description: 'An error occurred while deleting your account. Please try again later.',
      status: 'error',
      duration: 5000,
      isClosable: true
    })
  }

  const {mutate: deleteAccount, isPending} = useCreateDeleteAccountRequest(onSuccessDeleteRequest, onErrorDeleteRequest)

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
                <HStack spacing={4}>
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
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={onOpenDeleteInfo}
                  >
                    Delete Account
                  </Button>
                </HStack>
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <DeleteAccountInfoModal
        isOpen={isOpenDeleteInfo}
        onClose={onCloseDeleteInfo}
        reauthenticateToDelete={reauthenticate}
      />
      <DeleteAccountConfirmationModal
        isOpen={isOpenDeleteConfirmation}
        onClose={onCloseDeleteConfirmation}
        deleteAccount={deleteAccount}
        isLoading={isPending}
      />
    </>
  )
}
