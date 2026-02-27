import { useMemo } from 'react'
import { Navigate, Outlet, useParams } from 'react-router'
import { useAuth } from '../../../context/AuthContext'
import { toaster } from '../../../components/ui/toaster.tsx'

/**
 * Route guard that restricts access to PROJECT.ADMIN+ or is_staff users.
 * Used for project-level admin pages (e.g., collaborator management).
 * Redirects unauthorized users to the org VM dashboard with a toast notification.
 */
export const ProjectAdminGuard = () => {
  const { orgId, projectId } = useParams<{ orgId: string; projectId: string }>()
  const { getProjectCapabilities, getCustomerCapabilities, loading } = useAuth()

  const isAuthorized = useMemo(() => {
    // Org owners/staff can access all project admin pages
    const customerCaps = getCustomerCapabilities(orgId || '')
    if (customerCaps.canManageOrganization) return true

    // Project admins can access their own project admin pages
    const projectCaps = getProjectCapabilities(projectId || '')
    return projectCaps.canInviteUsers
  }, [getCustomerCapabilities, getProjectCapabilities, orgId, projectId])

  if (loading) {
    return null
  }

  if (!isAuthorized) {
    toaster.create({
      title: 'Unauthorized',
      description: 'You do not have permission to manage this project.',
      type: 'error',
      duration: 4000,
    })
    return <Navigate to={`/v2/org/${orgId}/vms`} replace />
  }

  return <Outlet />
}
