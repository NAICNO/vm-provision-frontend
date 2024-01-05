import { VmStatusType } from './VmStatusType.ts'
import { VmTemplate } from './VmTemplate.ts'

export interface Vm {
  vmId: string
  vmName: string
  status: VmStatusType
  ipv4Address: string
  ipv6Address: string
  vmTemplate: VmTemplate
  duration: number
  startedAt: Date
  createdAt: Date
  updatedAt: Date
}


