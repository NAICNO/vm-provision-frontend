export interface VmTemplateMetadata {
  username: string
  tags: string[]
  type?: string //'bare-metal' | 'virtual-machine'
}