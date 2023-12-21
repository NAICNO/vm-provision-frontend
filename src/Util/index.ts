import { VmStatusType } from '../types/VmStatusType.ts'

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
  [VmStatusType.TO_BE_PROVISIONED]: 'Pending',
  [VmStatusType.PLANNING]: 'Pending',
  [VmStatusType.PLANNING_COMPLETED]: 'Pending',
  [VmStatusType.PROVISIONING]: 'Creating',
  [VmStatusType.PROVISIONING_COMPLETED]: 'Created',
  [VmStatusType.PROVISIONING_FAILED]: 'Creation Failed',
  [VmStatusType.RUNNING]: 'Running',
  [VmStatusType.STOPPED]: 'Stopped',
  [VmStatusType.SHUTDOWN]: 'Shutdown',
  [VmStatusType.DESTROYING]: 'Destroying',
  [VmStatusType.DESTROYED]: 'Destroyed',
}

export function getVmStatusText(status: VmStatusType) {
  const text = statusTextMap[status]
  if (text === undefined) {
    return 'Unknown'
  }
  return text
}

const statusColorMap = {
  [VmStatusType.UNKNOWN]: 'gray',
  [VmStatusType.TO_BE_PROVISIONED]: 'gray',
  [VmStatusType.PLANNING]: 'gray',
  [VmStatusType.PLANNING_COMPLETED]: 'gray',
  [VmStatusType.PROVISIONING]: 'blue.400',
  [VmStatusType.PROVISIONING_COMPLETED]: 'blue.400',
  [VmStatusType.PROVISIONING_FAILED]: 'red',
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
