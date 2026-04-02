import {
  Button,
  Heading,
  VStack,
  Card,
  Text,
  Avatar,
  HStack,
  Icon,
  Tabs,
  For,
  Stack,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
  Tag,
  Container,
  Badge,
} from '@chakra-ui/react'
import {
  Link as ReactRouterLink,
  useNavigate,
  useParams,
} from 'react-router'
import { MdOutlineMailOutline, MdPhone } from 'react-icons/md'

import OrgAuditLogs from '../components/organization/OrgAuditLogs.tsx'
import UserManagement from '../components/organization/UserManagement.tsx'
import PermissionRequests from '../components/organization/PermissionRequests.tsx'
import OrganizationProjects from '../components/organization/OrganizationProjects.tsx'
import OrganizationResources from '../components/organization/OrganizationResources.tsx'
import CustomerCostPolicyList from '../components/organization/CustomerCostPolicyList.tsx'

import { useFetchCustomer } from '../hooks/useCustomer.ts'
import {
  useFetchCustomerServiceProvider,
} from '../hooks/useMarketplace.ts'
import CustomerOfferings from '../components/organization/CustomerOfferingList.tsx'
import { ValueChangeDetails } from '@zag-js/tabs'
import { useOrganizationContext } from '../context/OrganizationContext'
import { useV2Auth } from '../../context/V2AuthContext'
import { useEffect, useMemo } from 'react'
import { useOrgInvitations } from '../hooks/useUserInvitations'
import { useOrgPermissionRequests } from '../hooks/useGroupInvitations'

export const ViewOrganization = () => {
  const { orgId, tab } = useParams<{ orgId: string; tab?: string }>()
  const navigate = useNavigate()
  const { selectOrganization } = useOrganizationContext()
  const { getCustomerCapabilities } = useV2Auth()

  const { data: customer, isPending } = useFetchCustomer(orgId!)
  const { data: serviceProvider } = useFetchCustomerServiceProvider(orgId!)
  
  // Get user's capabilities for this organization
  const capabilities = useMemo(
    () => getCustomerCapabilities(orgId || ''),
    [getCustomerCapabilities, orgId]
  )
  
  // Fetch counts for pending actions (only for users with management permissions)
  const { data: invitations } = useOrgInvitations(capabilities.canInviteUsers ? orgId : undefined)
  const { data: permissionRequests } = useOrgPermissionRequests(capabilities.canManageOrganization ? orgId : undefined)
  
  const pendingInvitationsCount = invitations?.filter(inv => inv.state === 'pending').length || 0
  const pendingRequestsCount = permissionRequests?.length || 0
  
  // Build tabs array based on user permissions
  const tabs = useMemo(() => {
    const baseTabs: Array<{value: string; label: string; count?: number}> = [
      {value: 'overview', label: 'Overview'},
    ]

    // User Management tab (combines user list and management features)
    if (capabilities.canInviteUsers || capabilities.canManageOrganization) {
      baseTabs.push({
        value: 'user-management',
        label: 'Users',
        ...(pendingInvitationsCount > 0 && {count: pendingInvitationsCount})
      })
    }

    if (capabilities.canManageOrganization) {
      baseTabs.push({
        value: 'permission-requests',
        label: 'Permission Requests',
        ...(pendingRequestsCount > 0 && {count: pendingRequestsCount})
      })
    }

    // Service provider specific tabs
    if (customer?.is_service_provider) {
      baseTabs.push({value: 'offerings', label: 'Offerings'})
    }

    // Common tabs
    baseTabs.push(
      {value: 'projects', label: 'Projects'},
      {value: 'resources', label: 'Resources'},
    )

    // Admin tabs
    if (capabilities.canManageOrganization) {
      baseTabs.push(
        {value: 'cost-policies', label: 'Cost Policies'},
        {value: 'audit-logs', label: 'Audit Logs'}
      )
    }

    return baseTabs
  }, [capabilities, pendingInvitationsCount, pendingRequestsCount, customer?.is_service_provider])

  // Update selected organization in context when customer data is loaded
  useEffect(() => {
    if (customer) {
      selectOrganization(customer)
    }
  }, [customer, selectOrganization])

  // Check if orgId is present, if not redirect to organization selection
  useEffect(() => {
    if (!orgId) {
      navigate('/v2/select-organization', { replace: true })
    }
  }, [orgId, navigate])

  if (isPending) {
    return (
      <Container maxW="8xl" py={8}>
        <Stack gap="6">
          <HStack width="full">
            <SkeletonCircle size="20" />
            <SkeletonText noOfLines={3} />
          </HStack>
          <Skeleton height="200px" />
        </Stack>
      </Container>
    )
  }

  if (!customer) {
    return (
      <Container maxW="8xl" py={8}>
        <Card.Root width="100%" variant="elevated">
          <Card.Body>
            <Text fontSize="md" color="fg.error">
              Organization not found.
            </Text>
            <Button mt={4} onClick={() => navigate('/v2/select-organization')}>
              Back to Organizations
            </Button>
          </Card.Body>
        </Card.Root>
      </Container>
    )
  }

  const validTabs = tabs.map((t) => t.value)
  const tabFromUrl = tab || 'overview'
  const currentTab = validTabs.includes(tabFromUrl) ? tabFromUrl : 'overview'

  const handleTabChange = (details: ValueChangeDetails) => {
    navigate(`/v2/org/${orgId}/${details.value}`, { replace: true })
  }

  return (
    <Container maxW="8xl" py={8}>
      <VStack gap={6} alignItems={'flex-start'}>
        <Card.Root width="100%">
          <Card.Body>
            <HStack gap={4} align="stretch">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src={customer.image || undefined}/>
                <Avatar.Fallback name={customer.name}/>
              </Avatar.Root>
              <VStack alignItems={'flex-start'}>
                <Heading size="md">
                  {customer.display_name}
                </Heading>
                <HStack gap={4}>
                  {
                    customer.email &&
                    <HStack gap={1}>
                      <Icon>
                        <MdOutlineMailOutline/>
                      </Icon>
                      <Text textStyle="sm">
                        {customer.email}
                      </Text>
                    </HStack>
                  }
                  {
                    customer.phone_number &&
                    <HStack gap={1}>
                      <Icon>
                        <MdPhone/>
                      </Icon>
                      <Text textStyle="sm">
                        {customer.phone_number}
                      </Text>
                    </HStack>
                  }
                </HStack>
                {
                  customer.is_service_provider ? (
                    <Tag.Root colorPalette={'green'} variant={'solid'}>
                      <Tag.Label>Service Provider</Tag.Label>
                    </Tag.Root>
                  ) : (
                    <Tag.Root colorPalette={'red'} variant={'solid'}>
                      <Tag.Label>Not a Service Provider</Tag.Label>
                    </Tag.Root>
                  )
                }
              </VStack>
            </HStack>
          </Card.Body>
          {(capabilities.canManageOrganization || capabilities.canCreateProjects) && (
            <Card.Footer>
              {capabilities.canManageOrganization && (
                <Button variant="outline" asChild>
                  <ReactRouterLink to={`/v2/org/${orgId}/edit`}>
                    Edit Organization
                  </ReactRouterLink>
                </Button>
              )}
              {capabilities.canCreateProjects && (
                <Button colorPalette="blue" asChild>
                  <ReactRouterLink to={`/v2/org/${orgId}/add-project`}>
                    Add Project
                  </ReactRouterLink>
                </Button>
              )}
            </Card.Footer>
          )}
        </Card.Root>

        <Tabs.Root
          value={currentTab}
          onValueChange={handleTabChange}
          colorPalette={'blue'}
          variant={'outline'}
          width={'100%'}
        >
          <Tabs.List>
            <For each={tabs}>
              {(tab, index) =>
                <Tabs.Trigger value={tab.value} key={index}>
                  <HStack gap={2}>
                    <Text>{tab.label}</Text>
                    {tab.count && tab.count > 0 && (
                      <Badge colorPalette="red" variant="solid" size="sm">
                        {tab.count}
                      </Badge>
                    )}
                  </HStack>
                </Tabs.Trigger>
              }
            </For>
          </Tabs.List>
          <Tabs.Content value={'overview'}>
            <VStack gap={4} alignItems={'flex-start'}>
              <Text fontSize="lg" fontWeight="bold">Overview</Text>
              <Text>
                {customer.contact_details || 'No description available.'}
              </Text>
            </VStack>
          </Tabs.Content>
          <Tabs.Content value={'user-management'}>
            <UserManagement orgId={orgId} />
          </Tabs.Content>
          <Tabs.Content value={'permission-requests'}>
            <PermissionRequests orgId={orgId} />
          </Tabs.Content>
          <Tabs.Content value={'offerings'}>
            <CustomerOfferings 
              serviceProvider={serviceProvider?.[0] || undefined}
              canManage={capabilities.canManageOrganization}
            />
          </Tabs.Content>
          <Tabs.Content value={'projects'}>
            <OrganizationProjects orgId={orgId} />
          </Tabs.Content>
          <Tabs.Content value={'resources'}>
            <OrganizationResources orgId={orgId} />
          </Tabs.Content>
          <Tabs.Content value={'cost-policies'}>
            <CustomerCostPolicyList
              customerUuid={orgId!}
              customerName={customer?.name || ''}
              canManage={capabilities.canManageOrganization}
            />
          </Tabs.Content>
          <Tabs.Content value={'audit-logs'}>
            <OrgAuditLogs orgId={orgId!}/>
          </Tabs.Content>
        </Tabs.Root>
      </VStack>
    </Container>
  )
}
