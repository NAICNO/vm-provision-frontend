import { useState } from 'react'
import { Select, Text, VStack } from '@chakra-ui/react'

import { useFetchProviders } from '../hooks/useFetchProviders.ts'
import { userFetchVmTemplatesByProvider } from '../hooks/useFetchVmTamplates.ts'
import VmTemplateDetailItem from '../components/VmTemplateDetailItem.tsx'

export default function VmTemplatesPage() {

  const {data: providers} = useFetchProviders()

  const [selectedProviderId, setSelectedProviderId] = useState<string | null>(null)

  const {data: vmTemplates} = userFetchVmTemplatesByProvider(selectedProviderId ?? '', !!selectedProviderId)


  return (
    <VStack alignItems={'start'} gap={4}>
      <Text>Select provider</Text>
      <Select.Root
        collection={providers}
        width={'300px'}
        onValueChange={(e) => setSelectedProviderId(e.value[0])}
      >
        <Select.HiddenSelect/>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select provider"/>
          </Select.Trigger>
        </Select.Control>
        <Select.Content>
          {
            providers?.map((provider) => (
              <Select.Item key={provider.providerId} item={provider.providerId}>{provider.providerName}</Select.Item>
            ))
          }
        </Select.Content>
      </Select.Root>
      {
        vmTemplates?.map((vmTemplate) => (
          <VmTemplateDetailItem key={vmTemplate.templateId} vmTemplate={vmTemplate}/>
        ))
      }
    </VStack>
  )
}
