import {
  Box,
  Button,
  Menu,
  Portal,
  Skeleton,
  Text,
} from '@chakra-ui/react'
import { LuBuilding2, LuCheck, LuChevronDown, LuPlus } from 'react-icons/lu'
import { useNavigate } from 'react-router'
import { useOrganizationContext } from '../context/OrganizationContext'
import { useFetchCustomers } from '../hooks/useCustomer'

export default function OrganizationSelector() {
  const { selectedOrg, setSelectedOrg } = useOrganizationContext()
  const navigate = useNavigate()
  const { data: customers, isLoading: customersLoading } = useFetchCustomers()

  const handleOrganizationSelect = (orgUuid: string) => {
    const org = customers?.find(c => c.uuid === orgUuid)
    if (org) {
      setSelectedOrg(org)
      navigate(`/v2/org/${org.uuid}/view`)
    }
  }

  const handleCreateOrganization = () => {
    navigate('/v2/add-organization')
  }

  if (!selectedOrg) {
    return <Skeleton height="32px" width="200px" />
  }

  return (
    <Menu.Root positioning={{ placement: 'bottom-end' }}>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <LuBuilding2 />
          {selectedOrg.name}
          <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="250px" maxH="400px" overflowY="auto">
            {customersLoading ? (
              <Box p={4}>
                <Skeleton height="20px" mb={2} />
                <Skeleton height="20px" mb={2} />
                <Skeleton height="20px" />
              </Box>
            ) : (
              <>
                {/* Current Organization */}
                <Menu.Item
                  value={selectedOrg.uuid}
                  bg="bg.muted"
                  _hover={{ bg: 'bg.muted' }}
                  cursor="default"
                >
                  <LuCheck />
                  <Box flex="1">
                    <Text fontWeight="semibold">{selectedOrg.name}</Text>
                    <Text fontSize="xs" color="fg.muted">
                      Current Organization
                    </Text>
                  </Box>
                </Menu.Item>
                <Menu.Separator />

                {/* Other Organizations */}
                {customers
                  ?.filter((org) => org.uuid !== selectedOrg.uuid)
                  .map((org) => (
                    <Menu.Item
                      key={org.uuid}
                      value={org.uuid}
                      onClick={() => handleOrganizationSelect(org.uuid)}
                    >
                      <LuBuilding2 />
                      <Box flex="1">{org.name}</Box>
                    </Menu.Item>
                  ))}

                <Menu.Separator />
                <Menu.Item
                  value="create-new"
                  color="blue.solid"
                  onClick={handleCreateOrganization}
                >
                  <LuPlus />
                  <Box flex="1" fontWeight="medium">
                    Create New Organization
                  </Box>
                </Menu.Item>
              </>
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
