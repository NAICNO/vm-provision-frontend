import { useQuery } from '@tanstack/react-query'
import { customersListOptions, customersRetrieveOptions } from '../../client/@tanstack/react-query.gen'

/**
 * Fetch all organizations (customers) that the current user has access to
 */
export const useUserOrganizations = () => {
  return useQuery(customersListOptions())
}

/**
 * Fetch a specific organization by UUID
 */
export const useOrganization = (uuid?: string) => {
  return useQuery({
    ...customersRetrieveOptions({ 
      path: { uuid: uuid! } 
    }),
    enabled: !!uuid,
  })
}
