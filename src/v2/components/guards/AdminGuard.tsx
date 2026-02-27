import { useMemo } from 'react'
import { Navigate, Outlet, useParams } from 'react-router'
import { useAuth } from '../../../context/AuthContext'
import { toaster } from '../../../components/ui/toaster.tsx'

/**
 * Route guard that restricts access to CUSTOMER.OWNER or is_staff users.
 * Wraps admin routes (cost policy create/edit, org edit, etc.)
 * Redirects unauthorized users to the org VM dashboard with a toast notification.
 */
export const AdminGuard = () => {
  const { orgId } = useParams<{ orgId: string }>()
  const { getCustomerCapabilities, loading } = useAuth()

  const capabilities = useMemo(
    () => getCustomerCapabilities(orgId || ''),
    [getCustomerCapabilities, orgId]
  )

  if (loading) {
    return null
  }

  if (!capabilities.canManageOrganization) {
    toaster.create({
      title: 'Unauthorized',
      description: 'You do not have permission to access this page.',
      type: 'error',
      duration: 4000,
    })
    return <Navigate to={`/v2/org/${orgId}/vms`} replace />
  }

  return <Outlet />
}
