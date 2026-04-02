import { Box, Container, Breadcrumb, HStack } from '@chakra-ui/react'
import { LuBuilding2, LuChevronRight, LuPlus, LuServer, LuUser } from 'react-icons/lu'
import { Link as ReactRouterLink, useLocation } from 'react-router'
import { useOrganizationContext } from '../context/OrganizationContext'

interface BreadcrumbItem {
  label: string
  path?: string
  icon?: React.ReactNode
}

// Tab name mappings
const PROFILE_TABS: Record<string, string> = {
  'account-info': 'Account Info',
  'ssh-keys': 'SSH Keys',
  'notifications': 'Notifications',
  'permission-requests': 'Permission Requests',
  'audit-logs': 'Audit Logs',
}

const ORG_DETAIL_TABS: Record<string, string> = {
  'overview': 'Overview',
  'view': 'Overview',
  'users': 'Users',
  'offerings': 'Offerings',
  'projects': 'Projects',
  'resources': 'Resources',
  'audit-logs': 'Audit Logs',
}

const ORG_PAGE_CONFIG: Record<string, { label: string; icon: React.ReactNode }> = {
  'edit': { label: 'Edit Organization', icon: <LuPlus size={16} /> },
  'add-project': { label: 'Add Project', icon: <LuPlus size={16} /> },
  'create-vm': { label: 'Create VM', icon: <LuServer size={16} /> },
  'settings': { label: 'Settings', icon: <LuServer size={16} /> },
  'vms': { label: 'VMs', icon: <LuServer size={16} /> },
  'dashboard': { label: 'VMs', icon: <LuServer size={16} /> },
}

function getTabFromPath(pathname: string, tabs: Record<string, string>): string | null {
  for (const [key, label] of Object.entries(tabs)) {
    if (pathname.includes(`/${key}`)) {
      return label
    }
  }
  return null
}

function generateBreadcrumbs(
  pathname: string,
  orgName?: string
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = []

  // Organization selection page has no breadcrumbs
  if (pathname === '/v2/select-organization') {
    return breadcrumbs
  }

  // Handle profile page and tabs
  if (pathname.startsWith('/v2/profile')) {
    breadcrumbs.push({
      label: 'Profile',
      path: '/v2/profile',
      icon: <LuUser size={16} />,
    })
    
    const tabLabel = getTabFromPath(pathname, PROFILE_TABS) || (pathname === '/v2/profile' ? 'Account Info' : null)
    if (tabLabel) {
      breadcrumbs.push({ label: tabLabel })
    }
    
    return breadcrumbs
  }

  // Handle routes without organization context
  if (pathname === '/v2/add-organization') {
    breadcrumbs.push({
      label: 'Organizations',
      path: '/v2/select-organization',
      icon: <LuBuilding2 size={16} />,
    })
    breadcrumbs.push({
      label: 'Create Organization',
      icon: <LuPlus size={16} />,
    })
    return breadcrumbs
  }

  if (pathname === '/v2/select-project' || pathname === '/v2/add-project') {
    breadcrumbs.push({
      label: 'Projects',
      path: '/v2/select-project',
      icon: <LuServer size={16} />,
    })
    if (pathname === '/v2/add-project') {
      breadcrumbs.push({
        label: 'Create Project',
        icon: <LuPlus size={16} />,
      })
    }
    return breadcrumbs
  }

  // Extract orgId from path
  const orgMatch = pathname.match(/^\/v2\/org\/([^/]+)/)
  if (!orgMatch) {
    return breadcrumbs
  }

  const orgId = orgMatch[1]

  // Add organization breadcrumb
  breadcrumbs.push({
    label: orgName || 'Organization',
    path: `/v2/org/${orgId}/vms`,
    icon: <LuBuilding2 size={16} />,
  })

  // Check for VM details page (must be before other checks)
  const vmDetailsMatch = pathname.match(/^\/v2\/org\/[^/]+\/vms\/([^/]+)/)
  if (vmDetailsMatch) {
    breadcrumbs.push({
      label: 'VMs',
      path: `/v2/org/${orgId}/vms`,
      icon: <LuServer size={16} />,
    })
    breadcrumbs.push({
      label: 'VM Details',
      icon: <LuServer size={16} />,
    })
    return breadcrumbs
  }

  // Check for organization detail tabs first
  const tabLabel = getTabFromPath(pathname, ORG_DETAIL_TABS)
  if (tabLabel) {
    breadcrumbs.push({ label: tabLabel })
    return breadcrumbs
  }

  // Check for other organization pages
  for (const [key, config] of Object.entries(ORG_PAGE_CONFIG)) {
    if (pathname.includes(`/${key}`)) {
      breadcrumbs.push({ label: config.label, icon: config.icon })
      return breadcrumbs
    }
  }

  return breadcrumbs
}

export default function Breadcrumbs() {
  const { selectedOrg } = useOrganizationContext()
  const location = useLocation()
  
  const breadcrumbs = generateBreadcrumbs(location.pathname, selectedOrg?.display_name)

  if (breadcrumbs.length === 0) {
    return null
  }

  return (
    <>
      <Box borderTopWidth="1px" />
      <Container maxW="8xl" py={2}>
        <Breadcrumb.Root size="sm">
          <Breadcrumb.List>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1
              return (
                <>
                  <Breadcrumb.Item key={crumb.path || index}>
                    {isLast ? (
                      <Breadcrumb.CurrentLink>
                        <HStack gap={1}>
                          {crumb.icon && crumb.icon}
                          {crumb.label}
                        </HStack>
                      </Breadcrumb.CurrentLink>
                    ) : (
                      <Breadcrumb.Link asChild>
                        <ReactRouterLink to={crumb.path!}>
                          <HStack gap={1}>
                            {crumb.icon && crumb.icon}
                            {crumb.label}
                          </HStack>
                        </ReactRouterLink>
                      </Breadcrumb.Link>
                    )}
                  </Breadcrumb.Item>
                  {!isLast && (
                    <Breadcrumb.Separator>
                      <LuChevronRight size={12} />
                    </Breadcrumb.Separator>
                  )}
                </>
              )
            })}
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </Container>
    </>
  )
}
