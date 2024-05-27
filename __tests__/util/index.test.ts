import { VmStatusType } from '../../src/types/VmStatusType'
import { Vm } from '../../src/types/Vm'
import {
  getNaicLogo,
  toTitleCase,
  generateRandomString,
  getVmStatusText,
  getVmStatusTextColor,
  getProviderLogo,
  getVmRemainingTime,
  getVmRemainingTimePercentage,
  getVmRemainingTimeText,
  getVmRemainingTimeColor
} from '../../src/util'
import moment from 'moment'
import { Duration } from 'moment/moment'

describe('Utility Functions', () => {
  it('getNaicLogo returns correct logo based on color mode', () => {
    expect(getNaicLogo('light')).toBe('/images/naic/naic_dark.svg')
    expect(getNaicLogo('dark')).toBe('/images/naic/naic_light.svg')
  })

  it('toTitleCase returns string in title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World')
  })

  it('generateRandomString returns a string of length 16', () => {
    expect(generateRandomString().length).toBe(16)
  })

  it('getProviderLogo returns correct logo based on provider and color mode', () => {
    expect(getProviderLogo('NREC', 'light')).toBe('/images/nrec-vertical-dark.svg')
    expect(getProviderLogo('NREC', 'dark')).toBe('/images/nrec-vertical-light.svg')
  })

})

describe('getVmStatusText', () => {
  it('returns correct text for UNKNOWN status', () => {
    expect(getVmStatusText(VmStatusType.UNKNOWN)).toBe('Unknown')
  })

  it('returns correct text for TO_BE_PROVISIONED status', () => {
    expect(getVmStatusText(VmStatusType.TO_BE_PROVISIONED)).toBe('Pending Creation')
  })

  it('returns correct text for PLANNING status', () => {
    expect(getVmStatusText(VmStatusType.PLANNING)).toBe('Creating')
  })

  it('returns correct text for PLANNING_COMPLETED status', () => {
    expect(getVmStatusText(VmStatusType.PLANNING_COMPLETED)).toBe('Creating')
  })

  it('returns correct text for PROVISIONING status', () => {
    expect(getVmStatusText(VmStatusType.PROVISIONING)).toBe('Creating')
  })

  it('returns correct text for PROVISIONING_COMPLETED status', () => {
    expect(getVmStatusText(VmStatusType.PROVISIONING_COMPLETED)).toBe('Created. Starting to Initialize')
  })

  it('returns correct text for PROVISIONING_FAILED status', () => {
    expect(getVmStatusText(VmStatusType.PROVISIONING_FAILED)).toBe('Creation Failed')
  })

  it('returns correct text for INITIALIZING status', () => {
    expect(getVmStatusText(VmStatusType.INITIALIZING)).toBe('Initializing')
  })

  it('returns correct text for RUNNING status', () => {
    expect(getVmStatusText(VmStatusType.RUNNING)).toBe('Running')
  })

  it('returns correct text for STOPPED status', () => {
    expect(getVmStatusText(VmStatusType.STOPPED)).toBe('Stopped')
  })

  it('returns correct text for SHUTDOWN status', () => {
    expect(getVmStatusText(VmStatusType.SHUTDOWN)).toBe('Shutdown')
  })

  it('returns correct text for DESTROYING status', () => {
    expect(getVmStatusText(VmStatusType.DESTROYING)).toBe('Deleting')
  })

  it('returns correct text for DESTROYED status', () => {
    expect(getVmStatusText(VmStatusType.DESTROYED)).toBe('Deleted')
  })
})

describe('getVmStatusTextColor', () => {
  it('returns correct color for UNKNOWN status', () => {
    expect(getVmStatusTextColor(VmStatusType.UNKNOWN)).toBe('gray')
  })

  it('returns correct color for TO_BE_PROVISIONED status', () => {
    expect(getVmStatusTextColor(VmStatusType.TO_BE_PROVISIONED)).toBe('gray')
  })

  it('returns correct color for PLANNING status', () => {
    expect(getVmStatusTextColor(VmStatusType.PLANNING)).toBe('gray')
  })

  it('returns correct color for PLANNING_COMPLETED status', () => {
    expect(getVmStatusTextColor(VmStatusType.PLANNING_COMPLETED)).toBe('gray')
  })

  it('returns correct color for PROVISIONING status', () => {
    expect(getVmStatusTextColor(VmStatusType.PROVISIONING)).toBe('blue.400')
  })

  it('returns correct color for PROVISIONING_COMPLETED status', () => {
    expect(getVmStatusTextColor(VmStatusType.PROVISIONING_COMPLETED)).toBe('blue.400')
  })

  it('returns correct color for PROVISIONING_FAILED status', () => {
    expect(getVmStatusTextColor(VmStatusType.PROVISIONING_FAILED)).toBe('red')
  })

  it('returns correct color for INITIALIZING status', () => {
    expect(getVmStatusTextColor(VmStatusType.INITIALIZING)).toBe('green.400')
  })

  it('returns correct color for RUNNING status', () => {
    expect(getVmStatusTextColor(VmStatusType.RUNNING)).toBe('green.400')
  })

  it('returns correct color for STOPPED status', () => {
    expect(getVmStatusTextColor(VmStatusType.STOPPED)).toBe('red.400')
  })

  it('returns correct color for SHUTDOWN status', () => {
    expect(getVmStatusTextColor(VmStatusType.SHUTDOWN)).toBe('red.600')
  })

  it('returns correct color for DESTROYING status', () => {
    expect(getVmStatusTextColor(VmStatusType.DESTROYING)).toBe('orange.400')
  })

  it('returns correct color for DESTROYED status', () => {
    expect(getVmStatusTextColor(VmStatusType.DESTROYED)).toBe('gray.600')
  })
})

describe('getVmRemainingTime', () => {
  it('returns correct remaining time for a running VM', () => {
    const vm: Vm = {
      startedAt: moment().subtract(30, 'minutes').toDate(),
      status: VmStatusType.RUNNING,
      duration: 1
    }
    const remainingTime = getVmRemainingTime(vm)
    expect(remainingTime.asMinutes()).toBeCloseTo(30, 1)
  })

  it('returns zero duration for a VM with a status other than RUNNING', () => {
    const vm: Vm = {
      startedAt: moment().subtract(30, 'minutes').toDate(),
      status: VmStatusType.STOPPED,
      duration: 1
    }
    const remainingTime = getVmRemainingTime(vm)
    expect(remainingTime.asSeconds()).toBe(0)
  })
})

describe('getVmRemainingTimePercentage', () => {
  it('returns 75 for a remaining time that is 75% of the total duration', () => {
    const remainingTime: Duration = moment.duration(45, 'minutes')
    const totalDuration: Duration = moment.duration(1, 'hours')
    expect(getVmRemainingTimePercentage(remainingTime, totalDuration)).toBeCloseTo(75, 1)
  })

  it('returns 50 for a remaining time that is 50% of the total duration', () => {
    const remainingTime: Duration = moment.duration(30, 'minutes')
    const totalDuration: Duration = moment.duration(1, 'hours')
    expect(getVmRemainingTimePercentage(remainingTime, totalDuration)).toBeCloseTo(50, 1)
  })

  it('returns 25 for a remaining time that is 25% of the total duration', () => {
    const remainingTime: Duration = moment.duration(15, 'minutes')
    const totalDuration: Duration = moment.duration(1, 'hours')
    expect(getVmRemainingTimePercentage(remainingTime, totalDuration)).toBeCloseTo(25, 1)
  })

  it('returns 0 for a remaining time that is 0% of the total duration', () => {
    const remainingTime: Duration = moment.duration(0, 'minutes')
    const totalDuration: Duration = moment.duration(1, 'hours')
    expect(getVmRemainingTimePercentage(remainingTime, totalDuration)).toBeCloseTo(0, 1)
  })

  describe('getVmRemainingTimePercentage', () => {
    const totalDuration: Duration = moment.duration(1, 'hours')

    it('returns 15 for a remaining time that is 15% of the total duration', () => {
      const remainingTime: Duration = moment.duration(9, 'minutes')
      expect(getVmRemainingTimePercentage(remainingTime, totalDuration)).toBeCloseTo(15, 1)
    })

    it('returns 66 for a remaining time that is 66% of the total duration', () => {
      const remainingTime: Duration = moment.duration(39.6, 'minutes')
      expect(getVmRemainingTimePercentage(remainingTime, totalDuration)).toBeCloseTo(66, 1)
    })

    it('returns 92 for a remaining time that is 92% of the total duration', () => {
      const remainingTime: Duration = moment.duration(55.2, 'minutes')
      expect(getVmRemainingTimePercentage(remainingTime, totalDuration)).toBeCloseTo(92, 1)
    })
  })
})

describe('getVmRemainingTimeText', () => {
  it('returns correct remaining time text for a remaining time that is more than 0 seconds', () => {
    const remainingTime: Duration = moment.duration(30, 'minutes')
    expect(getVmRemainingTimeText(remainingTime)).toBe('30 minutes remaining')
  })

  it('returns "Expired" for a remaining time that is exactly 0 seconds', () => {
    const remainingTime: Duration = moment.duration(0, 'seconds')
    expect(getVmRemainingTimeText(remainingTime)).toBe('Expired')
  })

  it('returns "1 hour remaining" for a remaining time that is exactly 1 hour', () => {
    const remainingTime: Duration = moment.duration(1, 'hours')
    expect(getVmRemainingTimeText(remainingTime)).toBe('an hour remaining')
  })

  it('returns "1 minute remaining" for a remaining time that is exactly 1 minute', () => {
    const remainingTime: Duration = moment.duration(1, 'minutes')
    expect(getVmRemainingTimeText(remainingTime)).toBe('a minute remaining')
  })
})

describe('getVmRemainingTimeColor', () => {
  it('returns "green" for a percentage that is more than 75', () => {
    expect(getVmRemainingTimeColor(80)).toBe('green')
  })

  it('returns "yellow" for a percentage that is more than 50 but less than or equal to 75', () => {
    expect(getVmRemainingTimeColor(70)).toBe('yellow')
  })

  it('returns "orange" for a percentage that is more than 25 but less than or equal to 50', () => {
    expect(getVmRemainingTimeColor(40)).toBe('orange')
  })

  it('returns "red" for a percentage that is less than or equal to 25', () => {
    expect(getVmRemainingTimeColor(20)).toBe('red')
  })
})
