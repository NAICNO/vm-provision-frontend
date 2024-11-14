import { Select, Text, VStack } from '@chakra-ui/react'
import { useFetchProviders } from '../hooks/useFetchProviders.ts'
import { useState } from 'react'
import { userFetchVmTemplatesByProvider } from '../hooks/useFetchVmTamplates.ts'
import VmTemplateDetailItem from '../components/VmTemplateDetailItem.tsx'

export default function VmTemplatesPage() {

  const {data: providers} = useFetchProviders()

  const [selectedProviderId, setSelectedProviderId] = useState<string | null>(null)

  const {data: vmTemplates} = userFetchVmTemplatesByProvider(selectedProviderId ?? '', !!selectedProviderId)


  return (
    <VStack alignItems={'start'} spacing={4}>
      <Text>Select provider</Text>
      <Select
        placeholder="Select option"
        width={'300px'}
        onChange={(e) => setSelectedProviderId(e.target.value)}
      >
        {
          providers?.map((provider) => (
            <option key={provider.providerId} value={provider.providerId}>{provider.providerName}</option>
          ))
        }
      </Select>
      {
        vmTemplates?.map((vmTemplate) => (
          <VmTemplateDetailItem key={vmTemplate.templateId} vmTemplate={vmTemplate}/>
        ))
      }
    </VStack>
  )
}
