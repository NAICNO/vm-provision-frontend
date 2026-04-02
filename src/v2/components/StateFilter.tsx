import { Menu, Button, Portal, Badge, HStack } from '@chakra-ui/react'
import { LuChevronDown, LuCheck, LuFilter } from 'react-icons/lu'
import type { Resource } from '../../client/types.gen'

interface StateFilterProps {
  resources: Resource[]
  onFilterChange: (state: string | null) => void
  selectedState: string | null
}

const STATE_OPTIONS = [
  { value: 'OK', label: 'Running', colorPalette: 'green' },
  { value: 'Creating', label: 'Creating', colorPalette: 'blue' },
  { value: 'Updating', label: 'Updating', colorPalette: 'cyan' },
  { value: 'Erred', label: 'Erred', colorPalette: 'red' },
  { value: 'Terminating', label: 'Terminating', colorPalette: 'orange' },
] as const

/**
 * State Filter component - allows filtering resources by state
 * Follows the same pattern as ProjectFilter
 */
export const StateFilter = ({ resources, onFilterChange, selectedState }: StateFilterProps) => {
  const stateCounts = STATE_OPTIONS
    .map((opt) => ({
      ...opt,
      count: resources.filter((r) => r.state === opt.value).length,
    }))
    .filter((opt) => opt.count > 0)

  const selectedOption = STATE_OPTIONS.find((o) => o.value === selectedState)
  const buttonLabel = selectedOption ? selectedOption.label : 'All States'

  if (stateCounts.length <= 1) return null

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="md">
          <LuFilter />
          {buttonLabel}
          <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="200px">
            <Menu.Item value="all" onClick={() => onFilterChange(null)}>
              <HStack gap={2}>
                {!selectedState && <LuCheck />}
                All States ({resources.length})
              </HStack>
            </Menu.Item>
            {stateCounts.map((opt) => (
              <Menu.Item key={opt.value} value={opt.value} onClick={() => onFilterChange(opt.value)}>
                <HStack gap={2}>
                  {selectedState === opt.value && <LuCheck />}
                  <Badge colorPalette={opt.colorPalette} size="sm">
                    {opt.count}
                  </Badge>
                  {opt.label}
                </HStack>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
