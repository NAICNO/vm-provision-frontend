import { updateProvisioningStatus } from '../../src/util/ReactQueryUtils'
import { QueryClient } from '@tanstack/react-query'
import { Vm } from '../../src/types/Vm.ts'
import { VmStatusType } from '../../src/types/VmStatusType'

describe('updateProvisioningStatus', () => {
  const queryClient = new QueryClient()

  it('updates the status of a VM', async () => {
    const vmUpdate: Partial<Vm> = { vmId: '1', status: 'RUNNING' }
    const initialVm: Vm = { vmId: '1', status: VmStatusType.INITIALIZING }

    queryClient.setQueryData(['VMS'], [initialVm])

    await updateProvisioningStatus(vmUpdate, queryClient)

    const updatedVms = queryClient.getQueryData<Vm[]>(['VMS'])

    expect(updatedVms).toEqual([{ vmId: '1', status: 'RUNNING' }])
  })
})
