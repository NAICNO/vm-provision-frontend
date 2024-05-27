import { Vm } from '../types/Vm.ts'
import { QueryClient } from '@tanstack/react-query'
import QueryKeys from '../constants/QueryKeys.ts'

export const updateProvisioningStatus = async (vmUpdate: Partial<Vm>, queryClient: QueryClient) => {
  queryClient.setQueryData([QueryKeys.VMS],
    (oldVms: Vm[] | undefined) => {
      if (oldVms) {
        return oldVms.map(oldVm => {
          if (oldVm.vmId === vmUpdate.vmId) {
            return {...oldVm, ...vmUpdate}
          } else {
            return oldVm
          }
        })
      } else {
        return []
      }

    }
  )

}
