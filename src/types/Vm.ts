import { VmStatusType } from './VmStatusType.ts'
import { VmTemplate } from './VmTemplate.ts'

export interface Vm {
  vmId: string
  vmName: string
  status: VmStatusType
  ipv4Address: string
  ipv6Address: string
  vmTemplate: VmTemplate
  createdAt: Date
  updatedAt: Date
}


