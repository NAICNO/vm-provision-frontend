import { useContext } from 'react'
import {
  For,
  Tabs,
} from '@chakra-ui/react'

import { AuthContext } from '../context/AuthContext.tsx'
import UserAuditLogs from '../components/profile/UserAuditLogs.tsx'
import SSHKeys from '../components/profile/SSHKeys.tsx'
import AccountInfo from '../components/profile/AccountInfo.tsx'

const tabs = [
  {value: 'account-info', label: 'Account Info'},
  {value: 'ssh-keys', label: 'SSH Keys'},
  {value: 'notifications', label: 'Notifications'},
  {value: 'permission-requests', label: 'Permission Requests'},
  {value: 'audit-logs', label: 'Audit Logs'},
]

export default function Profile() {

  const {user} = useContext(AuthContext)

  return (
    <>
      <Tabs.Root defaultValue={'account-info'} colorPalette={'blue'} variant={'outline'}>
        <Tabs.List>
          <For each={tabs}>
            {(tab, index) =>
              <Tabs.Trigger value={tab.value} key={index}>{tab.label}</Tabs.Trigger>
            }
          </For>
        </Tabs.List>
        <Tabs.Content value={'account-info'}>
          <AccountInfo user={user}/>
        </Tabs.Content>
        <Tabs.Content value={'ssh-keys'}>
          <SSHKeys/>
        </Tabs.Content>
        <Tabs.Content value={'audit-logs'}>
          <UserAuditLogs/>
        </Tabs.Content>
      </Tabs.Root>
    </>
  )
}
