import { VmStatus } from './VmStatus.ts'
import { VmTemplate } from './VmTemplate.ts'

export interface Vm {
  vmId: string
  vmName: string
  status: VmStatus
  ipv4Address: string
  ipv6Address: string
  vmTemplate: VmTemplate
  createdAt: Date
  updatedAt: Date
}


