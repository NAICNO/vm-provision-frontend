import { Alert } from '@chakra-ui/react'
import type { SpendingStatus } from '../types/CostPolicy'

interface SpendingAlertProps {
  /**
   * Alert status type
   */
  status: SpendingStatus
  /**
   * Alert title/heading
   */
  title?: string
  /**
   * Alert message content
   */
  message: string
  /**
   * Whether to show the alert
   */
  show?: boolean
}

const STATUS_TO_ALERT_STATUS: Record<SpendingStatus, 'info' | 'warning' | 'error'> = {
  normal: 'info',
  warning: 'warning',
  critical: 'error',
  blocked: 'error',
}

const DEFAULT_TITLES: Record<SpendingStatus, string> = {
  normal: 'Spending Status',
  warning: 'Spending Warning',
  critical: 'Critical Spending Alert',
  blocked: 'Spending Blocked',
}

/**
 * Alert banner component for displaying spending-related warnings and errors
 * with color-coded status indication.
 */
export function SpendingAlert({
  status,
  title,
  message,
  show = true,
}: SpendingAlertProps) {
  if (!show) return null

  return (
    <Alert.Root status={STATUS_TO_ALERT_STATUS[status]}>
      <Alert.Indicator />
      <Alert.Content>
        {title && <Alert.Title>{title || DEFAULT_TITLES[status]}</Alert.Title>}
        <Alert.Description>{message}</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  )
}
