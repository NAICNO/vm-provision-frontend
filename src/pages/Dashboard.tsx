import { useEffect, useState } from 'react'
import {
  Box,
  Checkbox,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react'

import { useFetchMyVms } from '../hooks/useFetchVm.ts'
import { usePrefetchVmTemplates } from '../hooks/useFetchVmTamplates.ts'
import VmStatusItem from '../components/VmStatusItem.tsx'
import { Vm } from '../types/Vm.ts'
import VmStatusItemSkeleton from '../components/VmStatusItemSkeleton.tsx'
import NoVmItemsPlaceholder from '../components/NoVmItemsPlaceholder.tsx'
import * as WebSocketUtils from '../util/WebSoketUtil.ts'
import { WebSocketEventType } from '../types/WebSocketEventType.ts'
import { useQueryClient } from '@tanstack/react-query'
import { updateProvisioningStatus } from '../util/ReactQueryUtils.ts'

const vmStatusSkeletons = [1, 2, 3, 4, 5, 6]


export default function Dashboard() {

  const [showArchived, setShowArchived] = useState<boolean>(false)

  const {
    data: myVms = [],
    isLoading,
  } = useFetchMyVms()

  const filteredVms = showArchived ? myVms : myVms?.filter(vm => !vm?.metadata?.archived)
  const hasArchivedVms = myVms?.some(vm => vm?.metadata?.archived)

  const queryClient = useQueryClient()
  usePrefetchVmTemplates()
  const socket = WebSocketUtils.getSocket()

  useEffect(() => {
    socket?.on(WebSocketEventType.PROVISIONING_UPDATE, (message) => {
      updateProvisioningStatus(message, queryClient)
    })

    return () => {
      socket?.off(WebSocketEventType.PROVISIONING_UPDATE) // Clean up the
    }
  }, [socket])

  if (!isLoading && filteredVms && filteredVms.length === 0) {
    return (
      <NoVmItemsPlaceholder hasArchivedVms={hasArchivedVms} showArchivedVms={() => setShowArchived(true)}/>
    )
  }

  return (
    <Box>
      <Flex justifyContent={'flex-end'} mb={2}>
        <Checkbox.Root
          checked={showArchived}
          onCheckedChange={(e) => setShowArchived(!!e.checked)}
          colorPalette={'blue'}
          variant="subtle"
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control/>
          <Checkbox.Label>
            Show Archived
          </Checkbox.Label>
        </Checkbox.Root>
      </Flex>
      <Grid templateColumns="repeat(auto-fill, minmax(350px, 1fr))" gap={6}>
        {
          isLoading ?
            vmStatusSkeletons.map((_, index) => (
              <GridItem key={index}>
                <VmStatusItemSkeleton/>
              </GridItem>
            ))
            :
            filteredVms?.map((vm: Vm) => (
              <GridItem key={vm.vmId}>
                <VmStatusItem {...vm}/>
              </GridItem>
            ))
        }
      </Grid>
    </Box>
  )
}
