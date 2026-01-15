import { useContext } from 'react'
import { Container, For, Tabs } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router'

import { AuthContext } from '../../context/AuthContext'
import UserAuditLogs from '../../components/profile/UserAuditLogs'
import SSHKeys from '../../components/profile/SSHKeys'
import AccountInfo from '../../components/profile/AccountInfo'
import { ValueChangeDetails } from '@zag-js/tabs'

const tabs = [
  { value: 'account-info', label: 'Account Info' },
  { value: 'ssh-keys', label: 'SSH Keys' },
  { value: 'notifications', label: 'Notifications' },
  { value: 'permission-requests', label: 'Permission Requests' },
  { value: 'audit-logs', label: 'Audit Logs' },
]

/**
 * V2 Profile Page - User profile, SSH keys, and audit logs
 * Uses the same components as V1 profile page
 */
export default function Profile() {
  const { user } = useContext(AuthContext)
  const { tab } = useParams<{ tab?: string }>()
  const navigate = useNavigate()

  const validTabs = tabs.map((t) => t.value)
  const tabFromUrl = tab || 'account-info'
  const currentTab = validTabs.includes(tabFromUrl) ? tabFromUrl : 'account-info'

  const handleTabChange = (details: ValueChangeDetails) => {
    navigate(`/v2/profile/${details.value}`, { replace: true })
  }

  return (
    <Container maxW="8xl" py={8}>
      <Tabs.Root value={currentTab} onValueChange={handleTabChange} colorPalette={'blue'} variant={'outline'}>
        <Tabs.List>
          <For each={tabs}>
            {(tab, index) => (
              <Tabs.Trigger value={tab.value} key={index}>
                {tab.label}
              </Tabs.Trigger>
            )}
          </For>
        </Tabs.List>
        <Tabs.Content value={'account-info'}>
          <AccountInfo user={user!} />
        </Tabs.Content>
        <Tabs.Content value={'ssh-keys'}>
          <SSHKeys />
        </Tabs.Content>
        <Tabs.Content value={'audit-logs'}>
          <UserAuditLogs />
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  )
}

