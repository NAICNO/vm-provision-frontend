import { useEffect } from 'react'
import { useParams, Navigate, Outlet } from 'react-router'
import { Box, Spinner, Text } from '@chakra-ui/react'
import { useOrganizationContext } from '../context/OrganizationContext'
import { useOrganization } from '../hooks/useOrganization'

/**
 * Layout wrapper that validates organization access and loads organization context
 * Reads orgId from URL params and ensures user has access
 */
export const OrgLayoutWrapper = () => {
  const { orgId } = useParams<{ orgId: string }>()
  const { selectOrganization, selectedOrg } = useOrganizationContext()
  
  const { data: organization, isLoading, isError, error } = useOrganization(orgId)

  // Update context when organization is loaded
  useEffect(() => {
    if (organization && organization.uuid !== selectedOrg?.uuid) {
      selectOrganization(organization)
    }
  }, [organization, selectedOrg?.uuid, selectOrganization])

  // Show loading state while fetching organization
  if (isLoading) {
    return (
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        minH="100vh"
        flexDirection="column"
        gap={4}
      >
        <Spinner size="xl" colorPalette="blue" />
        <Text fontSize="lg" color="fg.muted">Loading organization...</Text>
      </Box>
    )
  }

  // Handle errors (org not found or user doesn't have access)
  if (isError) {
    console.error('Error loading organization:', error)
    return <Navigate to="/v2/select-organization" replace />
  }

  // Organization not found
  if (!organization) {
    return <Navigate to="/v2/select-organization" replace />
  }

  // Render child routes
  return <Outlet />
}
