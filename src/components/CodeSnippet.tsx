import { Button, useClipboard, Box, Flex } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet = ({code}: CodeSnippetProps) => {
  const clipboard = useClipboard({defaultValue: code})
  const {colorMode} = useColorMode()

  const bgColor = {light: 'gray.100', dark: 'gray.600'}
  const borderColor = {light: 'gray.300', dark: 'gray.600'}

  return (
    <Flex
      alignItems="center"
      borderWidth="1px"
      rounded="lg"
      p={4}
      my={4}
      bg={bgColor[colorMode]}
      borderColor={borderColor[colorMode]}
    >
      <Box flex="1" overflowX="auto" whiteSpace="pre-wrap" wordBreak="break-all">
        <pre>
          <code>{code}</code>
        </pre>
      </Box>
      <Button size="xs" onClick={clipboard.copy} ml={4}>
        {clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </Flex>
  )
}

export default CodeSnippet
