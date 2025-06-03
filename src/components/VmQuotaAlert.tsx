import { Alert } from '@chakra-ui/react'
import { Quota } from '../types/FetchVmTemplatesResponse.ts'

interface VmQuotaAlertProps {
  quota: Quota
}

const VmQuotaAlert = ({quota}: VmQuotaAlertProps) => {
  if (quota.remainingQuota > 0) {
    return null
  }
  return (
    <Alert.Root status="warning" role="alert">
      <Alert.Indicator/>
      <Alert.Title>You have reached your quota of {quota.allocatedQuota} VMs. Please delete some VM(s) to create new ones.</Alert.Title>
    </Alert.Root>
  )
}

export default VmQuotaAlert
