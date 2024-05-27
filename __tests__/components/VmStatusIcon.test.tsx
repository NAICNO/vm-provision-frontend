import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { VmStatusIcon } from '../../src/components/VmStatusIcon'
import { VmStatusType } from '../../src/types/VmStatusType'

describe('VmStatusIcon', () => {
  it('renders correctly when status is STOPPED', () => {
    const {container} = render(<VmStatusIcon status={VmStatusType.STOPPED}/>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders correctly when status is RUNNING', () => {
    const {container} = render(<VmStatusIcon status={VmStatusType.RUNNING}/>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders correctly when status is PROVISIONING', () => {
    const {container} = render(<VmStatusIcon status={VmStatusType.PROVISIONING}/>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders correctly when status is PROVISIONING_COMPLETED', () => {
    const {container} = render(<VmStatusIcon status={VmStatusType.PROVISIONING_COMPLETED}/>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders correctly when status is INITIALIZING', () => {
    const {container} = render(<VmStatusIcon status={VmStatusType.INITIALIZING}/>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders correctly when status is DESTROYING', () => {
    const {container} = render(<VmStatusIcon status={VmStatusType.DESTROYING}/>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders default icon for unknown status', () => {
    const {container} = render(<VmStatusIcon status="unknown"/>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
