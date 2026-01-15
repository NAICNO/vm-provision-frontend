import { Box, Container, HStack, Text } from '@chakra-ui/react'
import { LuBuilding2, LuChevronRight, LuPlus, LuServer, LuUser } from 'react-icons/lu'
import { Link, useLocation } from 'react-router'
import { useOrganizationContext } from '../context/OrganizationContext'

interface Breadcrumb {
  label: string
  path?: string
  icon: React.ReactNode
}

function generateBreadcrumbs(
  pathname: string,
  orgName?: string
): Breadcrumb[] {
  const breadcrumbs: Breadcrumb[] = []

  // Organization selection page has no breadcrumbs
  if (pathname === '/v2/select-organization') {
    return breadcrumbs
  }

  // Handle profile page
  if (pathname === '/v2/profile') {
    breadcrumbs.push({
      label: 'Profile',
      icon: <LuUser size={16} />,
    })
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

  // Add specific page breadcrumbs
  if (pathname.includes('/vms') || pathname.includes('/dashboard')) {
    breadcrumbs.push({
      label: 'VMs',
      icon: <LuServer size={16} />,
    })
  } else if (pathname.includes('/create-vm')) {
    breadcrumbs.push({
      label: 'Create VM',
      icon: <LuServer size={16} />,
    })
  } else if (pathname.includes('/settings')) {
    breadcrumbs.push({
      label: 'Settings',
      icon: <LuServer size={16} />,
    })
  } else if (pathname.includes('/credits')) {
    breadcrumbs.push({
      label: 'Credits',
      icon: <LuServer size={16} />,
    })
  }

  return breadcrumbs
}

export default function OrganizationBreadcrumbs() {
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
        <HStack gap={1} fontSize="sm" color="fg.muted">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1
            return (
              <HStack key={crumb.path || index} gap={1}>
                {crumb.icon}
                {isLast ? (
                  <Text fontWeight="medium" color="fg">
                    {crumb.label}
                  </Text>
                ) : (
                  <Link to={crumb.path!}>
                    <Text _hover={{ color: 'fg' }}>
                      {crumb.label}
                    </Text>
                  </Link>
                )}
                {!isLast && <LuChevronRight size={12} />}
              </HStack>
            )
          })}
        </HStack>
      </Container>
    </>
  )
}
