import { VmStatus } from '../types/VmStatus.ts'

export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function (txt: string): string {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  })
}

export function mapStringToVirtualMachineStatus(statusString: string): VmStatus {
  const status = Object.values(VmStatus).find(s => s === statusString.toLowerCase())
  return status ?? VmStatus.UNKNOWN // Return UNKNOWN if no match is found
}

export function generateRandomString(): string {
  const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let array = new Uint8Array(16)
  window.crypto.getRandomValues(array)
  array = array.map(x => validChars.charCodeAt(x % validChars.length))
  return String.fromCharCode.apply(null, array as unknown as number[])
}
