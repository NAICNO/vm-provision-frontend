import { fireEvent, render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { HamburgerButton } from '../../src/components/HamburgerButton'

const renderComponent = () => {
  return render(
    <ChakraProvider>
      <HamburgerButton openSidebarDrawer={mockOpenSidebarDrawer} />
    </ChakraProvider>
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
