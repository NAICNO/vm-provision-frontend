import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import VmQuotaAlert from '../../src/components/VmQuotaAlert'


describe('VmQuotaAlert', () => {
  it('should not render anything when remainingQuota is greater than 0', () => {
    render(<VmQuotaAlert quota={{remainingQuota: 1, allocatedQuota: 5}}/>)
    const alert = screen.queryByRole('alert')
    expect(alert).not.toBeInTheDocument()
  })

  it('should render a warning message when remainingQuota is 0', () => {
    render(<VmQuotaAlert quota={{remainingQuota: 0, allocatedQuota: 5}}/>)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent('You have reached your quota of 5 VMs. Please delete some VM(s) to create new ones.')
  })

  it('should render a warning message when remainingQuota is less than 0', () => {
    render(<VmQuotaAlert quota={{remainingQuota: -1, allocatedQuota: 5}}/>)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent('You have reached your quota of 5 VMs. Please delete some VM(s) to create new ones.')
  })
})
