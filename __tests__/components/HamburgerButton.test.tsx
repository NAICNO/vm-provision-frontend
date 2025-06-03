import { fireEvent, screen } from '@testing-library/react'

import { HamburgerButton } from '../../src/components/HamburgerButton'
import { render } from '../test-utils'

const renderComponent = () => {
  return render(
    <HamburgerButton openSidebarDrawer={mockOpenSidebarDrawer}/>
  )
}
const mockOpenSidebarDrawer = vi.fn()

describe('HamburgerButton', () => {

  it('should call opOpenSidebarDrawer when the hamburger button is clicked', () => {
    renderComponent()

    const button = screen.getByRole('button', {name: 'Open menu'})
    fireEvent.click(button)

    expect(mockOpenSidebarDrawer).toHaveBeenCalled()
  })

})
