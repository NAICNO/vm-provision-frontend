import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Customer } from '../../client/types.gen'

interface OrganizationContextType {
  selectedOrg: Customer | null
  selectOrganization: (org: Customer) => void
  clearOrganization: () => void
  isOrgSelected: boolean
}

const OrganizationContext = createContext<OrganizationContextType | undefined>(undefined)

const STORAGE_KEY = 'selectedOrganizationUuid'

interface OrganizationProviderProps {
  children: ReactNode
}

export const OrganizationProvider = ({ children }: OrganizationProviderProps) => {
  const [selectedOrg, setSelectedOrg] = useState<Customer | null>(() => {
    // Load from localStorage on mount
    const savedUuid = localStorage.getItem(STORAGE_KEY)
    if (savedUuid) {
      // Return minimal org object with uuid - will be hydrated by consuming components
      return { uuid: savedUuid } as Customer
    }
    return null
  })

  const selectOrganization = (org: Customer) => {
    setSelectedOrg(org)
    if (org.uuid) {
      localStorage.setItem(STORAGE_KEY, org.uuid)
    }
  }

  const clearOrganization = () => {
    setSelectedOrg(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  useEffect(() => {
    // Sync with localStorage when selectedOrg changes
    if (selectedOrg?.uuid) {
      localStorage.setItem(STORAGE_KEY, selectedOrg.uuid)
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [selectedOrg?.uuid])

  const value: OrganizationContextType = {
    selectedOrg,
    selectOrganization,
    clearOrganization,
    isOrgSelected: !!selectedOrg?.uuid,
  }

  return (
    <OrganizationContext.Provider value={value}>
      {children}
    </OrganizationContext.Provider>
  )
}

export const useOrganizationContext = () => {
  const context = useContext(OrganizationContext)
  if (context === undefined) {
    throw new Error('useOrganizationContext must be used within an OrganizationProvider')
  }
  return context
}
