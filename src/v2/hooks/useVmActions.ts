import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  openstackInstancesStart,
  openstackInstancesStop,
  openstackInstancesRestart,
  openstackInstancesBackup,
  openstackInstancesConsoleRetrieve,
  openstackInstancesConsoleLogRetrieve,
  openstackInstancesPull,
} from '../../client'
import QueryKeys from '../../constants/QueryKeys'
import { toaster } from '../../components/ui/toaster'

/**
 * Hook for starting a VM
 */
export const useStartVm = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (uuid: string) => {
      await openstackInstancesStart({
        path: { uuid },
      })
    },
    onSuccess: async () => {
      // Force immediate refetch after action
      await queryClient.invalidateQueries({ 
        queryKey: [QueryKeys.W_OPENSTACK_INSTANCE],
        refetchType: 'active'
      })
      queryClient.invalidateQueries({ queryKey: [QueryKeys.W_RESOURCES] })
      
      toaster.create({
        title: 'VM Starting',
        description: 'The virtual machine is starting up.',
        type: 'success',
      })
    },
    onError: (error: Error) => {
      toaster.create({
        title: 'Failed to start VM',
        description: error.message || 'An error occurred while starting the VM.',
        type: 'error',
      })
    },
  })
}

/**
 * Hook for stopping a VM
 */
export const useStopVm = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (uuid: string) => {
      await openstackInstancesStop({
        path: { uuid },
      })
    },
    onSuccess: async () => {
      // Force immediate refetch after action
      await queryClient.invalidateQueries({ 
        queryKey: [QueryKeys.W_OPENSTACK_INSTANCE],
        refetchType: 'active'
      })
      queryClient.invalidateQueries({ queryKey: [QueryKeys.W_RESOURCES] })
      
      toaster.create({
        title: 'VM Stopping',
        description: 'The virtual machine is shutting down.',
        type: 'success',
      })
    },
    onError: (error: Error) => {
      toaster.create({
        title: 'Failed to stop VM',
        description: error.message || 'An error occurred while stopping the VM.',
        type: 'error',
      })
    },
  })
}

/**
 * Hook for restarting a VM
 */
export const useRestartVm = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (uuid: string) => {
      await openstackInstancesRestart({
        path: { uuid },
      })
    },
    onSuccess: async () => {
      // Force immediate refetch after action
      await queryClient.invalidateQueries({ 
        queryKey: [QueryKeys.W_OPENSTACK_INSTANCE],
        refetchType: 'active'
      })
      queryClient.invalidateQueries({ queryKey: [QueryKeys.W_RESOURCES] })
      
      toaster.create({
        title: 'VM Restarting',
        description: 'The virtual machine is rebooting.',
        type: 'success',
      })
    },
    onError: (error: Error) => {
      toaster.create({
        title: 'Failed to restart VM',
        description: error.message || 'An error occurred while restarting the VM.',
        type: 'error',
      })
    },
  })
}

/**
 * Hook for creating a VM backup
 */
export const useBackupVm = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (uuid: string) => {
      await openstackInstancesBackup({
        path: { uuid },
        body: {
          name: `backup-${new Date().toISOString()}`,
        },
      })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ 
        queryKey: [QueryKeys.W_OPENSTACK_INSTANCE],
        refetchType: 'active'
      })
      
      toaster.create({
        title: 'Backup Started',
        description: 'Creating a backup of the virtual machine.',
        type: 'success',
      })
    },
    onError: (error: Error) => {
      toaster.create({
        title: 'Backup Failed',
        description: error.message || 'An error occurred while creating the backup.',
        type: 'error',
      })
    },
  })
}

/**
 * Hook for getting VM console URL
 */
export const useGetVmConsole = () => {
  return useMutation({
    mutationFn: async (uuid: string) => {
      const response = await openstackInstancesConsoleRetrieve({
        path: { uuid },
      })
      return response.data
    },
    onSuccess: (data: unknown) => {
      const consoleData = data as { url?: string }
      if (consoleData?.url) {
        window.open(consoleData.url, '_blank')
        toaster.create({
          title: 'Console Opening',
          description: 'Opening VM console in a new window.',
          type: 'success',
        })
      } else {
        toaster.create({
          title: 'Console Unavailable',
          description: 'Console URL not available for this VM.',
          type: 'warning',
        })
      }
    },
    onError: (error: Error) => {
      toaster.create({
        title: 'Console Access Failed',
        description: error.message || 'An error occurred while accessing the console.',
        type: 'error',
      })
    },
  })
}

/**
 * Hook for getting VM console log
 */
export const useGetVmConsoleLog = () => {
  return useMutation({
    mutationFn: async (uuid: string) => {
      const response = await openstackInstancesConsoleLogRetrieve({
        path: { uuid },
      })
      return response.data
    },
    onSuccess: (data: unknown) => {
      const logContent = typeof data === 'string' ? data : 'No console log available'
      // Create a blob and download it
      const blob = new Blob([logContent], { type: 'text/plain' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `console-log-${new Date().toISOString()}.txt`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      
      toaster.create({
        title: 'Console Log Downloaded',
        description: 'The console log has been downloaded.',
        type: 'success',
      })
    },
    onError: (error: Error) => {
      toaster.create({
        title: 'Console Log Failed',
        description: error.message || 'An error occurred while retrieving the console log.',
        type: 'error',
      })
    },
  })
}

/**
 * Hook for syncing VM with OpenStack
 */
export const usePullVm = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (uuid: string) => {
      await openstackInstancesPull({
        path: { uuid },
      })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ 
        queryKey: [QueryKeys.W_OPENSTACK_INSTANCE],
        refetchType: 'active'
      })
      queryClient.invalidateQueries({ queryKey: [QueryKeys.W_RESOURCES] })
      
      toaster.create({
        title: 'Sync Started',
        description: 'Syncing VM data with OpenStack.',
        type: 'success',
      })
    },
    onError: (error: Error) => {
      toaster.create({
        title: 'Sync Failed',
        description: error.message || 'An error occurred while syncing the VM.',
        type: 'error',
      })
    },
  })
}
