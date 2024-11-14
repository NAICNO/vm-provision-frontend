import { VmProvider } from './VmProvider.ts'
import { VmMetadata } from './VmMetadata.ts'

export interface VmTemplate {
  templateId: string
  templateName: string
  provider: VmProvider
  cpu: number
  ram: number
  storage: number
  os: string
  description: string
  metadata: VmMetadata
  enabled: boolean
  createdAt: Date
  updatedAt: Date
}
