import { Button, HStack, Dialog, Portal, DialogOpenChangeDetails, Input, Text, Menu } from '@chakra-ui/react'
import { LuPlay, LuPower, LuRefreshCw, LuTrash2, LuHardDrive, LuTerminal, LuFileText, LuRotateCw, LuEllipsisVertical } from 'react-icons/lu'
import { useStartVm, useStopVm, useRestartVm, useBackupVm, useGetVmConsole, useGetVmConsoleLog, usePullVm } from '../../hooks/useVmActions'
import { useTerminateResource } from '../../hooks/useMarketplaceResource'
import type { Resource, OpenStackInstance } from '../../../client/types.gen'
import { useState } from 'react'

interface VmActionButtonsProps {
  resource: Resource
  instance?: OpenStackInstance
  variant?: 'full' | 'compact'
}

/**
 * Action buttons for VM lifecycle operations
 * Handles start/stop/restart/terminate with proper state checks
 */
export const VmActionButtons = ({ resource, instance, variant = 'full' }: VmActionButtonsProps) => {
  const [isTerminateDialogOpen, setIsTerminateDialogOpen] = useState(false)
  const [confirmationText, setConfirmationText] = useState('')
  
  const startVm = useStartVm()
  const stopVm = useStopVm()
  const restartVm = useRestartVm()
  const backupVm = useBackupVm()
  const getConsole = useGetVmConsole()
  const getConsoleLog = useGetVmConsoleLog()
  const pullVm = usePullVm()
  const terminateResource = useTerminateResource()

  const resourceState = resource.state
  const runtimeState = instance?.runtime_state
  const instanceUuid = instance?.uuid
  const resourceUuid = resource.uuid

  // Determine which actions are available based on state
  const canStart = resourceState === 'OK' && (runtimeState === 'SHUTOFF' || runtimeState === 'SUSPENDED')
  const canStop = resourceState === 'OK' && runtimeState === 'ACTIVE'
  const canRestart = resourceState === 'OK' && runtimeState === 'ACTIVE'
  const canTerminate = resourceState === 'OK' || resourceState === 'Erred'

  // Disable all actions if resource is in transitioning state
  const isTransitioning = ['Creating', 'Updating', 'Terminating'].includes(resourceState || '')
  const isInstanceTransitioning = runtimeState && [
    'BUILD',
    'REBOOT',
    'HARD_REBOOT',
    'REBUILD',
    'MIGRATING',
  ].includes(runtimeState)

  const isAnyActionPending =
    startVm.isPending || stopVm.isPending || restartVm.isPending || 
    backupVm.isPending || getConsole.isPending || getConsoleLog.isPending || 
    pullVm.isPending || terminateResource.isPending

  const allDisabled = isTransitioning || isInstanceTransitioning || isAnyActionPending

  const handleStart = () => {
    if (instanceUuid) {
      startVm.mutate(instanceUuid)
    }
  }

  const handleStop = () => {
    if (instanceUuid) {
      stopVm.mutate(instanceUuid)
    }
  }

  const handleRestart = () => {
    if (instanceUuid) {
      restartVm.mutate(instanceUuid)
    }
  }

  const handleTerminate = () => {
    if (resourceUuid) {
      terminateResource.mutate(resourceUuid)
      setIsTerminateDialogOpen(false)
      setConfirmationText('')
    }
  }

  const handleBackup = () => {
    if (instanceUuid) {
      backupVm.mutate(instanceUuid)
    }
  }

  const handleConsole = () => {
    if (instanceUuid) {
      getConsole.mutate(instanceUuid)
    }
  }

  const handleConsoleLog = () => {
    if (instanceUuid) {
      getConsoleLog.mutate(instanceUuid)
    }
  }

  const handlePull = () => {
    if (instanceUuid) {
      pullVm.mutate(instanceUuid)
    }
  }

  const handleDialogOpenChange = (details: DialogOpenChangeDetails) => {
    setIsTerminateDialogOpen(details.open)
    if (!details.open) {
      setConfirmationText('')
    }
  }

  if (variant === 'compact') {
    return (
      <HStack gap={2}>
        {canStart && (
          <Button
            size="sm"
            colorPalette="green"
            onClick={handleStart}
            disabled={allDisabled}
            loading={startVm.isPending}
          >
            <LuPlay />
          </Button>
        )}
        {canStop && (
          <Button
            size="sm"
            colorPalette="orange"
            onClick={handleStop}
            disabled={allDisabled}
            loading={stopVm.isPending}
          >
            <LuPower />
          </Button>
        )}
        {canRestart && (
          <Button
            size="sm"
            colorPalette="blue"
            onClick={handleRestart}
            disabled={allDisabled}
            loading={restartVm.isPending}
          >
            <LuRefreshCw />
          </Button>
        )}
      </HStack>
    )
  }

  return (
    <>
      <HStack gap={3}>
        
        {/* More Actions Menu */}
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button variant="outline" disabled={allDisabled || !instanceUuid}>
              <LuEllipsisVertical /> More
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="backup" onClick={handleBackup} disabled={resourceState !== 'OK'}>
                  <LuHardDrive /> Create Backup
                </Menu.Item>
                <Menu.Item value="console" onClick={handleConsole} disabled={resourceState !== 'OK'}>
                  <LuTerminal /> Open Console
                </Menu.Item>
                <Menu.Item value="console-log" onClick={handleConsoleLog} disabled={resourceState !== 'OK'}>
                  <LuFileText /> Download Console Log
                </Menu.Item>
                <Menu.Item value="sync" onClick={handlePull}>
                  <LuRotateCw /> Sync with OpenStack
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
        
        <Button
          colorPalette="green"
          onClick={handleStart}
          disabled={!canStart || allDisabled}
          loading={startVm.isPending}
        >
          <LuPlay /> Start
        </Button>
        <Button
          colorPalette="orange"
          onClick={handleStop}
          disabled={!canStop || allDisabled}
          loading={stopVm.isPending}
        >
          <LuPower /> Stop
        </Button>
        <Button
          colorPalette="blue"
          onClick={handleRestart}
          disabled={!canRestart || allDisabled}
          loading={restartVm.isPending}
        >
          <LuRefreshCw /> Restart
        </Button>
        <Button
          colorPalette="red"
          variant="outline"
          disabled={!canTerminate || allDisabled}
          onClick={() => setIsTerminateDialogOpen(true)}
        >
          <LuTrash2 /> Terminate
        </Button>
      </HStack>
      
      <Dialog.Root open={isTerminateDialogOpen} onOpenChange={handleDialogOpenChange} closeOnInteractOutside={false}>
        <Portal>
          <Dialog.Backdrop/>
          <Dialog.Positioner>
            <Dialog.Content maxW={{base: '95vw', md: '40vw'}}>
              <Dialog.Header>
                <Dialog.Title>Terminate Virtual Machine</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Text mb={4}>
                  Are you sure you want to terminate <strong>{resource.attributes?.name as string || resource.name}</strong>?
                </Text>
                <Text mb={2} color="red.600">
                  This action cannot be undone. All data on this VM will be permanently deleted.
                </Text>
                <Text mb={2}>
                  Please type <strong>delete</strong> to confirm.
                </Text>
                <Input
                  value={confirmationText}
                  onChange={(e) => setConfirmationText(e.target.value)}
                  placeholder="Type 'delete' to confirm"
                />
              </Dialog.Body>
              <Dialog.Footer>
                <HStack gap={3}>
                  <Button
                    variant="outline"
                    onClick={() => setIsTerminateDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    colorPalette="red"
                    onClick={handleTerminate}
                    loading={terminateResource.isPending}
                    disabled={confirmationText !== 'delete'}
                  >
                    Terminate VM
                  </Button>
                </HStack>
              </Dialog.Footer>
              <Dialog.CloseTrigger />
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}
