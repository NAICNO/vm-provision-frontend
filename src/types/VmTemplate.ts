import { VmProvider } from './VmProvider.ts'
import { VmTemplateMetadata } from './VmTemplateMetadata.ts'

export interface VmTemplate {
  templateId: string
  templateName: string
  provider: VmProvider
  cpu: number
  ram: number
  storage: number
  os: string
  description: string
  metadata: VmTemplateMetadata
  enabled: boolean
  createdAt: Date
  updatedAt: Date
}
