import { User } from 'waldur-js-client'
import { MdAlternateEmail, MdDateRange, MdGroup, MdPerson, MdPhone } from 'react-icons/md'
import moment from 'moment/moment'
import { getUserTypeText } from '../../util'
import { Link, List, Text } from '@chakra-ui/react'

const AccountInfo = ({user}: { user: User }) => {
  const items = [
    {icon: MdPerson, text: `${user?.full_name}`},
    {icon: MdAlternateEmail, text: `Email: ${user?.email}`},
    {icon: MdPhone, text: `${user?.phone_number ? `Phone: ${user.phone_number}` : 'Phone: Not provided'}`},
    {icon: MdDateRange, text: `Date joined: ${moment(user?.date_joined).format('MMM D, YYYY, h:mm A')}`},
    {icon: MdGroup, text: `User type: ${getUserTypeText(user)}`},
  ]
  return (
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
  )
}

export default AccountInfo
