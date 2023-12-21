import { VmProvider } from './VmProvider.ts'

export interface VmTemplate {
  templateId: string
  templateName: string
  provider: VmProvider
  cpu: number
  ram: number
  storage: number
  os: string
  description: string
  createdAt: Date
  updatedAt: Date
}
