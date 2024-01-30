export interface VmCreationRequest {
  vmName: string
  vmTemplateId: string
  sshKeyId: string
  duration: number
  ipRanges: string[]
}
