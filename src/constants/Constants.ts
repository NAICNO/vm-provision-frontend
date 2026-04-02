import { FiAtSign, FiEdit, FiGrid } from 'react-icons/fi'
import { SidebarItem } from '../types/SIdebarItem.ts'
import { GoProjectTemplate } from 'react-icons/go'
import { BsClouds } from 'react-icons/bs'
import { TfiHelpAlt } from 'react-icons/tfi'

export const APP_NAME = import.meta.env.VITE_APP_NAME
export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
export const SOCKET_ENDPOINT = import.meta.env.VITE_SOCKET_ENDPOINT
export const AUTH_URL = import.meta.env.VITE_AUTH_URL
export const V1_AUTH_URL = import.meta.env.VITE_V1_AUTH_URL


export const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY
export const AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
export const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID
export const STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
export const MESSAGE_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID
export const APP_ID = import.meta.env.VITE_FIREBASE_APP_ID
export const MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID

export const WALDUR_API_ENDPOINT = import.meta.env.VITE_WALDUR_API_ENDPOINT

export const VM_NAME_VALIDATION_REGEX = /^[A-Za-z0-9\-._]+$/ // alphanumeric, underscore, hyphen, dot

export const FILE_NAME_VALIDATION_REGEX = /^[a-zA-Z0-9_-]{2,}(\.[a-zA-Z0-9]+)?$/ // 2 or more characters, alphanumeric, underscore, hyphen, dot, optional extension

export const OPENSTACK_TENANT_TYPE = 'OpenStack.Tenant'

export const ALLOWED_IP_RANGES = [
  {name: 'UiO Network', ipRange: '129.240.0.0/16'},
  {name: 'UiO Eduroam', ipRange: '193.157.0.0/16'},
  {name: 'UiB Network', ipRange: '129.177.0.0/16'},
]

export const DEFAULT_SIDEBAR_TOP_ITEMS: SidebarItem[] = [
  {
    type: 'link',
    path: '/dashboard',
    matches: '/dashboard',
    text: 'Dashboard',
    icon: FiGrid
  },
  {
    type: 'link',
    path: '/create',
    matches: '/create',
    text: 'Create',
    icon: FiEdit
  },
  {
    type: 'link',
    path: '/profile',
    matches: '/profile',
    text: 'Profile',
    icon: FiAtSign
  },
]

export const DEFAULT_SIDEBAR_BOTTOM_ITEMS: SidebarItem[] = [
  {
    type: 'link',
    path: '/help',
    matches: '/help',
    text: 'Help',
    icon: TfiHelpAlt
  },
]

export const ADMIN_SIDEBAR_ITEMS: SidebarItem[] = [
  {
    type: 'link',
    path: 'admin/providers',
    matches: '/providers',
    text: 'Providers',
    icon: BsClouds,
  },
  {
    type: 'link',
    path: 'admin/vm-templates',
    matches: '/vm-templates',
    text: 'VM Templates',
    icon: GoProjectTemplate,
  },
]
