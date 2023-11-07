import {
  SimpleGrid
} from '@chakra-ui/react'

import { useFetchMyMachines } from '../hooks/useFetchMachine.ts'
import { useEffect } from 'react'
import MachineStatusItem from '../components/MachineStatusItem.tsx'

export default function Dashboard() {

  const {data: myMachines} = useFetchMyMachines()

  useEffect(() => {
    console.log('data', myMachines)
  }, [myMachines])


  return (
    <SimpleGrid spacing={5} minChildWidth="300px">
      {
        myMachines?.map((machine: MachineStatusInfo) => (
          <MachineStatusItem key={machine.id} {...machine}/>
        ))
      }
    </SimpleGrid>
  )
}
