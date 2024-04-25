import { Alert, AlertIcon } from '@chakra-ui/react'
import { Quota } from '../types/FetchVmTemplatesResponse.ts'

interface VmQuotaAlertProps {
  quota: Quota
}

const VmQuotaAlert = ({quota}: VmQuotaAlertProps) => {
  if (quota.remainingQuota > 0) {
    return null
  }
  return (
    <Alert status="warning">
      <AlertIcon/>
      You have reached your quota of {quota.allocatedQuota} VMs. Please delete some VM(s) to create new ones.
    </Alert>
  )
}

export default VmQuotaAlert
