import { Menu, Button, Portal } from '@chakra-ui/react'
import { LuChevronDown, LuCheck, LuLayoutGrid } from 'react-icons/lu'
import { useState, useEffect, useMemo } from 'react'
import type { Resource } from '../../client/types.gen'
import { groupResourcesByProject } from '../hooks/useOrgVmResources'

interface ProjectFilterProps {
  resources: Resource[]
  onFilterChange: (projectUuid: string | null) => void
  organizationUuid?: string
}

/**
 * Project Filter component - allows filtering VMs by project
 * Persists selection in localStorage per organization
 */
export const ProjectFilter = ({ resources, onFilterChange, organizationUuid }: ProjectFilterProps) => {
  const storageKey = organizationUuid ? `vm-project-filter-${organizationUuid}` : 'vm-project-filter'
  
  const [selectedProjectUuid, setSelectedProjectUuid] = useState<string | null>(() => {
    // Load from localStorage
    const saved = localStorage.getItem(storageKey)
    return saved || null
  })

  // Extract unique projects from resources
  const projects = useMemo(() => {
    const grouped = groupResourcesByProject(resources)
    return grouped.map(({ project, resources }) => ({
      uuid: project.uuid,
      name: project.name,
      vmCount: resources.length,
    }))
  }, [resources])

  // Update localStorage when selection changes
  useEffect(() => {
    if (selectedProjectUuid) {
      localStorage.setItem(storageKey, selectedProjectUuid)
    } else {
      localStorage.removeItem(storageKey)
    }
    onFilterChange(selectedProjectUuid)
  }, [selectedProjectUuid, storageKey, onFilterChange])

  const selectedProject = projects.find(p => p.uuid === selectedProjectUuid)
  const buttonLabel = selectedProject ? selectedProject.name : 'All Projects'

  if (projects.length === 0) {
    return null // No projects to filter
  }

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="md">
          <LuLayoutGrid />
          {buttonLabel}
          <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="200px">
            {/* All Projects option */}
            <Menu.Item
              value="all"
              onClick={() => setSelectedProjectUuid(null)}
            >
              {!selectedProjectUuid && <LuCheck />}
            All Projects ({resources.length})
            </Menu.Item>

            {/* Individual project options */}
            {projects.map((project) => (
              <Menu.Item
                key={project.uuid}
                value={project.uuid}
                onClick={() => setSelectedProjectUuid(project.uuid)}
              >
                {selectedProjectUuid === project.uuid && <LuCheck />}
                {project.name} ({project.vmCount})
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
