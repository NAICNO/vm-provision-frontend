import { VmTemplate } from './VmTemplate.ts'

export interface Quota {
  remainingQuota: number;
  allocatedQuota: number;
}

export interface FetchVmTemplatesResponse {
  vmTemplates: VmTemplate[];
  quota: Quota;
}
