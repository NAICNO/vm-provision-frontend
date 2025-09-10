import { VmStatusType } from './VmStatusType.ts'
import { VmTemplate } from './VmTemplate.ts'
import { PublicKey } from './PublicKey.ts'

export interface Vm {
  vmId: string
  vmName: string
  status: VmStatusType
  ipv4Address: string
  ipv6Address: string
  vmTemplate: VmTemplate
  publicKey: PublicKey
  duration: number
  ipRanges: string[]
  metadata?: VmMetadata
  startedAt: Date
  createdAt: Date
  updatedAt: Date
}

export interface VmMetadata {
  archived?: boolean
  applications?: VmApplication[]
}

export interface VmApplication {
  name: string
  [key: string]: any
}
