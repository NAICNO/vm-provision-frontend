import moment, { Duration } from 'moment/moment'

import { VmStatusType } from '../types/VmStatusType.ts'
import { ColorMode } from '@chakra-ui/react'
import { Vm } from '../types/Vm.ts'
import providerLogos from './providerLogos.json'

export function getNaicLogo(colorMode: ColorMode): string {
  return colorMode === 'light' ? '/images/naic/naic_dark.svg' : '/images/naic/naic_light.svg'
}

export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function (txt: string): string {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  })
}

export function generateRandomString(): string {
  const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let array = new Uint8Array(16)
  window.crypto.getRandomValues(array)
  array = array.map(x => validChars.charCodeAt(x % validChars.length))
  return String.fromCharCode.apply(null, array as unknown as number[])
}

const statusTextMap = {
  [VmStatusType.UNKNOWN]: 'Unknown',
  [VmStatusType.TO_BE_PROVISIONED]: 'Pending Creation',
  [VmStatusType.PLANNING]: 'Creating',
  [VmStatusType.PLANNING_COMPLETED]: 'Creating',
  [VmStatusType.PROVISIONING]: 'Creating',
  [VmStatusType.PROVISIONING_COMPLETED]: 'Created. Starting to Initialize',
  [VmStatusType.PROVISIONING_FAILED]: 'Creation Failed',
  [VmStatusType.INITIALIZING]: 'Initializing',
  [VmStatusType.RUNNING]: 'Running',
  [VmStatusType.STOPPED]: 'Stopped',
  [VmStatusType.SHUTDOWN]: 'Shutdown',
  [VmStatusType.TO_BE_DESTROYED]: 'Pending Deletion',
  [VmStatusType.DESTROYING]: 'Deleting',
  [VmStatusType.DESTROYED]: 'Deleted',
}

export function getVmStatusText(status: VmStatusType) {
  const text = statusTextMap[status]
  if (text === undefined) {
    return 'Unknown'
  }
  return text
}

export const statusColorMap = {
  [VmStatusType.UNKNOWN]: 'gray',
  [VmStatusType.TO_BE_PROVISIONED]: 'gray',
  [VmStatusType.PLANNING]: 'gray',
  [VmStatusType.PLANNING_COMPLETED]: 'gray',
  [VmStatusType.PROVISIONING]: 'blue.400',
  [VmStatusType.PROVISIONING_COMPLETED]: 'blue.400',
  [VmStatusType.PROVISIONING_FAILED]: 'red',
  [VmStatusType.INITIALIZING]: 'green.400',
  [VmStatusType.RUNNING]: 'green.400',
  [VmStatusType.STOPPED]: 'red.400',
  [VmStatusType.SHUTDOWN]: 'red.600',
  [VmStatusType.DESTROYING]: 'orange.400',
  [VmStatusType.DESTROYED]: 'gray.600',
}

export function getVmStatusTextColor(status: VmStatusType) {
  const color = statusColorMap[status]
  if (color === undefined) {
    return 'gray'
  }

  return color
}

export const getProviderLogo = (provider: string, colorMode: 'light' | 'dark') => {
  return providerLogos[provider]?.[colorMode] || '/images/default-logo.svg'
}

export const getVmRemainingTime = (vm: Vm): Duration => {
  if (vm.startedAt && vm.status === VmStatusType.RUNNING) {
    const startedAt = moment(vm.startedAt)
    const duration = moment.duration(vm.duration, 'hours')
    const endTime = startedAt.add(duration)
    return moment.duration(endTime.diff(moment()))
  } else {
    return moment.duration(0)
  }
}

export const getVmRemainingTimePercentage = (remainingTime: Duration, totalDuration: Duration): number => {
  const totalDurationSeconds = totalDuration.asSeconds()
  const remainingTimeSeconds = remainingTime.asSeconds()
  return remainingTimeSeconds / totalDurationSeconds * 100
}

export const getVmRemainingTimeText = (remainingTime: Duration): string => {
  let remainingTimeText = 'Expired'
  if (remainingTime.asSeconds() > 0) {
    remainingTimeText = remainingTime.humanize() + ' remaining'
  }
  return remainingTimeText
}

export const getVmRemainingTimeColor = (percentage: number): string => {
  if (percentage > 75) {
    return 'green'
  } else if (percentage > 50) {
    return 'yellow'
  } else if (percentage > 25) {
    return 'orange'
  } else {
    return 'red'
  }
}

export const base64UrlEncode = (str: string): string => {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
    String.fromCharCode(parseInt(p1, 16))
  ))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export const base64UrlDecode = (str: string): string => {
  str = str.replace(/-/g, '+').replace(/_/g, '/')
  while (str.length % 4) {
    str += '='
  }
  const decoded = atob(str)
  return decodeURIComponent(
    Array.prototype.map
      .call(decoded, (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  )
}

export const isUserAdmin = (userType?: string): boolean => {
  if (!userType) {
    return false
  }
  return userType === 'ADMIN' || userType === 'SUPER_ADMIN'
}
