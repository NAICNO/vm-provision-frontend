import { render, fireEvent } from '@testing-library/react'
import CodeSnippet from '../../src/components/CodeSnippet.tsx'
import { beforeAll } from 'vitest'
import { userEvent } from '@testing-library/user-event'

describe('CodeSnippet', () => {
  let user: ReturnType<typeof userEvent.setup>
  beforeAll(() => {
    user = userEvent.setup()

    Object.assign(document, {
      execCommand: (cmd: string) => {
        switch (cmd) {
        case 'copy':
          user.copy()
          return true
        case 'paste':
          user.paste()
          return
        }
      },
    })
  })

  it('renders without crashing', () => {
    const {getByText} = render(<CodeSnippet code="Test code"/>)
    expect(getByText('Test code')).toBeInTheDocument()
  })

  it('displays the correct code', () => {
    const {getByText} = render(<CodeSnippet code="Test code"/>)
    expect(getByText('Test code')).toBeInTheDocument()
  })

  it('has a Copy button', () => {
    const {getByText} = render(<CodeSnippet code="Test code"/>)
    expect(getByText('Copy')).toBeInTheDocument()
  })

  it('changes the Copy button text to Copied when clicked and correct text is copied to clipboard', async () => {
    const {getByText} = render(<CodeSnippet code="Test code"/>)
    const copyButton = getByText('Copy')
    fireEvent.click(copyButton)
    expect(getByText('Copied')).toBeInTheDocument()
    expect(navigator.clipboard.readText()).resolves.toEqual('Test code')

  })
})
