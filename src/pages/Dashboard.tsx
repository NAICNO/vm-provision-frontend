import {
  Button,
  SimpleGrid
} from '@chakra-ui/react'

import { useFetchMyVms } from '../hooks/useFetchVm.ts'
import { useEffect } from 'react'
import VmStatusItem from '../components/VmStatusItem.tsx'
import { Vm } from '../types/Vm.ts'
import VmStatusItemSkeleton from '../components/VmStatusItemSkeleton.tsx'
import NoVmItemsPlaceholder from '../components/NoVmItemsPlaceholder.tsx'

const vmStatusSkeletons = [1, 2, 3, 4, 5, 6]

export default function Dashboard() {

  const {
    data: myVms,
    refetch,
    isLoading
  } = useFetchMyVms()

  useEffect(() => {
    console.log('data', myVms)
  }, [myVms])


  return (
    <>
      <Button onClick={() => refetch()}>Refresh</Button>
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
