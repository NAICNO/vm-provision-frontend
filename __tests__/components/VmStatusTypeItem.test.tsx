import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import VmStatusItem from '../../src/components/VmStatusItem'
import { VmStatusType } from '../../src/types/VmStatusType.ts'
import moment from 'moment'
import { MemoryRouter } from 'react-router-dom'

// Setup mock for the util module
vi.mock('../util', () => ({
  getProviderLogo: vi.fn(() => 'logo-url'),
  getVmRemainingTime: vi.fn(() => moment.duration(1, 'hours')),
  getVmRemainingTimeColor: vi.fn(() => 'green'),
  getVmRemainingTimePercentage: vi.fn(() => 50),
  getVmRemainingTimeText: vi.fn(() => '1 hour left'),
  getVmStatusText: vi.fn(() => 'Running'),
  getVmStatusTextColor: vi.fn(() => 'blue')
}))

describe('VmStatusTypeItem', () => {
  const commonVmProps = {
    vmId: '123',
    vmName: 'Test VM',
    vmTemplate: {
      provider: {providerName: 'Azure'},
      cpu: 4,
      ram: 16,
      storage: 100,
      os: 'Ubuntu 20.04'
    },
    duration: 2, // hours
  }

  beforeEach(() => {
    // Reset mock implementations if needed before each test
    vi.resetAllMocks()
  })


  it('renders correctly with a DESTROYED status', () => {
    const vm = {
      ...commonVmProps,
      status: VmStatusType.DESTROYED,
    }

    const {container} = render(<MemoryRouter> <VmStatusItem {...vm} /></MemoryRouter>)
    expect(container).toMatchSnapshot()
  })

})
