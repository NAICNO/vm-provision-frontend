import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { usersMeRetrieve } from '../client/sdk.gen'
import type { User, Permission } from '../client/types.gen'

import {
  API_ENDPOINT,
  AUTH_URL,
} from '../constants/Constants.ts'
import axiosInstance, { setWaldurApiConfig } from '../api/ApiUtils.ts'

/**
 * Waldur RBAC Role Hierarchy
 * 
 * Customer (Organization) Roles:
 * - CUSTOMER.OWNER: Full org management, can invite users, set budgets, create projects
 * - CUSTOMER.MEMBER: Basic member access
 * 
 * Project Roles:
 * - PROJECT.ADMIN: Project management, can invite users to project
 * - PROJECT.MANAGER: Project resource management
 * - PROJECT.MEMBER: Basic project access
 */
export type WaldurRole = 
  | 'CUSTOMER.OWNER'
  | 'CUSTOMER.MEMBER'
  | 'PROJECT.ADMIN'
  | 'PROJECT.MANAGER'
  | 'PROJECT.MEMBER'

/**
 * Role capabilities for UI authorization
 */
export interface RoleCapabilities {
  /** Can manage organization settings and members */
  canManageOrganization: boolean
  /** Can create and manage cost policies */
  canManageCostPolicies: boolean
  /** Can invite users to organization */
  canInviteUsers: boolean
  /** Can create projects within organization */
  canCreateProjects: boolean
  /** Is a staff/admin user with global privileges */
  isStaff: boolean
}

interface AuthContextProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  login: () => void;
  logout: () => void;
  /** Check if user has specific role in a customer (organization) */
  hasCustomerRole: (customerUuid: string, role: WaldurRole) => boolean;
  /** Check if user has specific role in a project */
  hasProjectRole: (projectUuid: string, role: WaldurRole) => boolean;
  /** Get user's capabilities for a specific customer */
  getCustomerCapabilities: (customerUuid: string) => RoleCapabilities;
  /** Get user's capabilities for a specific project */
  getProjectCapabilities: (projectUuid: string) => RoleCapabilities;
  /** Get all customer permissions */
  getCustomerPermissions: () => Permission[];
  /** Get all project permissions */
  getProjectPermissions: () => Permission[];
}

export const V2AuthContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => {},
  isAuthenticated: false,
  setAuthenticated: () => {},
  user: null,
  setUser: () => {},
  loading: false,
  login: () => {},
  logout: () => {},
  hasCustomerRole: () => false,
  hasProjectRole: () => false,
  getCustomerCapabilities: () => ({
    canManageOrganization: false,
    canManageCostPolicies: false,
    canInviteUsers: false,
    canCreateProjects: false,
    isStaff: false,
  }),
  getProjectCapabilities: () => ({
    canManageOrganization: false,
    canManageCostPolicies: false,
    canInviteUsers: false,
    canCreateProjects: false,
    isStaff: false,
  }),
  getCustomerPermissions: () => [],
  getProjectPermissions: () => [],
})

interface AuthProviderProps {
  children: React.ReactNode;
}

export const V2AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [token, setToken] = useState<string | null>(null)
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)


  useEffect(() => {
    // On app load, check if we can fetch the user data to determine if the user is authenticated
    console.log('Checking auth status')
    const storedToken = localStorage.getItem('authToken')
    console.log('Stored token:', storedToken)
    if (storedToken) {
      setToken(storedToken)
      setWaldurApiConfig(storedToken)
    }

    if (!storedToken) {
      setAuthenticated(false)
      setLoading(false)
      return
    }

    usersMeRetrieve()
      .then((response) => {
        console.log('AuthContext/Me:', response)
        setAuthenticated(true)
        setUser(response.data ?? null)
        // After successful authentication, store the token in localStorage
        if (storedToken) {
          localStorage.setItem('authToken', storedToken)
        }
      })
      .catch((error) => {
        console.error('AuthContext: Error checking auth status:', error)
        setAuthenticated(false)
        setUser(null)
        localStorage.removeItem('authToken')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const login = () => {
    window.location.href = AUTH_URL
    // After redirect/callback, you should set the token, e.g.:
    // localStorage.setItem('authToken', token);
    // setToken(token);
    // setWaldurApiConfig({ token });
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setToken(null)
    setAuthenticated(false)
    setUser(null)
    // Also logout from V1 backend to clear cookies, then redirect
    axiosInstance
      .post(`${API_ENDPOINT}/auth/logout`)
      .then((response) => {
        window.location.href = response.data.logoutUrl
      })
      .catch(() => {
        window.location.href = '/'
      })
  }

  /**
   * Check if user has a specific role in a customer (organization)
   */
  const hasCustomerRole = useMemo(
    () => (customerUuid: string, role: WaldurRole): boolean => {
      if (!user?.permissions) return false
      return user.permissions.some(
        (perm) =>
          perm.scope_type === 'customer' &&
          perm.scope_uuid === customerUuid &&
          perm.role_name === role
      )
    },
    [user]
  )

  /**
   * Check if user has a specific role in a project
   */
  const hasProjectRole = useMemo(
    () => (projectUuid: string, role: WaldurRole): boolean => {
      if (!user?.permissions) return false
      return user.permissions.some(
        (perm) =>
          perm.scope_type === 'project' &&
          perm.scope_uuid === projectUuid &&
          perm.role_name === role
      )
    },
    [user]
  )

  /**
   * Get user's capabilities for a specific customer
   */
  const getCustomerCapabilities = useMemo(
    () => (customerUuid: string): RoleCapabilities => {
      const isStaff = user?.is_staff ?? false
      const isOwner = hasCustomerRole(customerUuid, 'CUSTOMER.OWNER')

      return {
        canManageOrganization: isStaff || isOwner,
        canManageCostPolicies: isStaff || isOwner,
        canInviteUsers: isStaff || isOwner,
        canCreateProjects: isStaff || isOwner,
        isStaff,
      }
    },
    [user, hasCustomerRole]
  )

  /**
   * Get user's capabilities for a specific project
   */
  const getProjectCapabilities = useMemo(
    () => (projectUuid: string): RoleCapabilities => {
      const isStaff = user?.is_staff ?? false
      const isProjectAdmin = hasProjectRole(projectUuid, 'PROJECT.ADMIN')

      // Project admins can invite collaborators to their project
      return {
        canManageOrganization: false,
        canManageCostPolicies: false,
        canInviteUsers: isStaff || isProjectAdmin,
        canCreateProjects: false,
        isStaff,
      }
    },
    [user, hasProjectRole]
  )

  /**
   * Get all customer permissions
   */
  const getCustomerPermissions = useMemo(
    () => (): Permission[] => {
      if (!user?.permissions) return []
      return user.permissions.filter((perm) => perm.scope_type === 'customer')
    },
    [user]
  )

  /**
   * Get all project permissions
   */
  const getProjectPermissions = useMemo(
    () => (): Permission[] => {
      if (!user?.permissions) return []
      return user.permissions.filter((perm) => perm.scope_type === 'project')
    },
    [user]
  )

  return (
    <V2AuthContext.Provider
      value={{
        token,
        setToken,
        isAuthenticated,
        setAuthenticated,
        user,
        setUser,
        loading,
        login,
        logout,
        hasCustomerRole,
        hasProjectRole,
        getCustomerCapabilities,
        getProjectCapabilities,
        getCustomerPermissions,
        getProjectPermissions,
      }}
    >
      {children}
    </V2AuthContext.Provider>
  )
}
export const useV2Auth = () => {
  const context = useContext(V2AuthContext)
  if (!context) {
    throw new Error('useV2Auth must be used within a V2AuthProvider')
  }
  return context
}
