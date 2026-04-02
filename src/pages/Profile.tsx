import {
  Link,
  List,
  Tabs,
  Text,
} from '@chakra-ui/react'
import { MdAlternateEmail, MdPerson } from 'react-icons/md'
import { useV1Auth } from '../context/V1AuthContext.tsx'

export default function Profile() {

  const {user} = useV1Auth()

  const items = [
    {icon: MdPerson, text: `${user?.firstName} ${user?.lastName}`},
    {icon: MdAlternateEmail, text: `Email: ${user?.email}`},
  ]

  return (
    <>
      <Tabs.Root defaultValue={'account-info'} variant="outline">
        <Tabs.List>
          <Tabs.Trigger _selected={{color: 'white', bg: 'blue.400'}} value={'account-info'}>Account Info</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value={'account-info'}>
          <List.Root gap={4} variant={'plain'}>
            {items.map((item, index) => (
              <List.Item key={index}>
                <List.Indicator as={item.icon}/>
                {item.text}
              </List.Item>
            ))}
            <List.Item>
              <Text>
                To delete your account, please contact support at{' '}
                <Link
                  href="mailto:support@naic.no"
                  color="teal.500">
                  support@naic.no
                </Link>
              </Text>
            </List.Item>
          </List.Root>
        </Tabs.Content>
      </Tabs.Root>
    </>
  )
}
