import { useEffect } from 'react'
import {
  Button,
  SimpleGrid
} from '@chakra-ui/react'

import { useFetchMyVms } from '../hooks/useFetchVm.ts'
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

  const {
    data: myVms,
    isLoading,
  } = useFetchMyVms()

  const queryClient = useQueryClient()

  const socket = WebSocketUtils.getSocket()

  useEffect(() => {
    socket?.on(WebSocketEventType.PROVISIONING_UPDATE, (message) => {
      updateProvisioningStatus(message, queryClient)
    })

    return () => {
      socket?.off(WebSocketEventType.PROVISIONING_UPDATE) // Clean up the
    }
  }, [socket])

  return (
    <>
      <SimpleGrid spacing={5} minChildWidth="300px">
        {
          isLoading ?
            vmStatusSkeletons.map((_, index) => (
              <VmStatusItemSkeleton key={index}/>
            ))
            :
            myVms && myVms.length > 0 ? myVms?.map((vm: Vm) => (
              <VmStatusItem key={vm.vmId} {...vm}/>
            )) : <NoVmItemsPlaceholder/>
        }
      </SimpleGrid>
    </>
  )
}
