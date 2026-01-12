import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppHeader from '../../src/components/AppHeader'
import { BrowserRouter as Router } from 'react-router'


// Mock hooks and external components
vi.mock('../../src/hooks/useAuth', () => ({
  useAuth: () => ({authState: {user: {name: 'John Doe', email: 'john@example.com'}}})
}))

vi.mock('@chakra-ui/react', () => {
  const originalModule = vi.importActual('@chakra-ui/react') // This must be inside the mock

  return {
    ...originalModule,
    // Ensure all components used in the test are mocked or passed through
    Flex: originalModule.Flex,
    Box: originalModule.Box,
    Image: originalModule.Image,
    Heading: originalModule.Heading,
    Spacer: originalModule.Spacer,
    HStack: originalModule.HStack,
    Avatar: originalModule.Avatar,
    Text: originalModule.Text,
    Show: originalModule.Show,
    useColorMode: () => ({colorMode: 'light'}) // Custom mocked function
  }
})

// vi.mock('../../src/util', () => ({
//   getNaicLogo: () => 'naic-logo.png'
// }))

const opOpenSidebarDrawer = vi.fn()

function renderAppHeader() {
  return render(
    <Router>
      <AppHeader opOpenSidebarDrawer={opOpenSidebarDrawer}/>
    </Router>
  )
}

describe.skip('AppHeader', () => {

  it('renders without crashing', () => {
    renderAppHeader()
    expect(screen.getByText('YourAppName')).toBeInTheDocument()
    expect(screen.getByAltText('NAIC logo')).toBeInTheDocument()
  })

  it('displays user information when authenticated', () => {
    renderAppHeader()
    expect(screen.getByText('John Doe')).toBeVisible()
    expect(screen.getByText('john@example.com')).toBeVisible()
  })

  it('calls opOpenSidebarDrawer when hamburger button is clicked', () => {
    renderAppHeader()
    const hamburgerButton = screen.getByRole('button')
    userEvent.click(hamburgerButton)
    expect(opOpenSidebarDrawer).toHaveBeenCalled()
  })

})
