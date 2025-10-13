import { useColorMode } from './ui/color-mode.tsx'
import { Box, Clipboard, Flex, IconButton } from '@chakra-ui/react'

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet = ({code}: CodeSnippetProps) => {
  const { colorMode } = useColorMode()

  const bgColor = colorMode === 'light' ? 'gray.100' : 'gray.600'
  const borderColor = colorMode === 'light' ? 'gray.300' : 'gray.600'

  return (
    <Flex
      alignItems="center"
      borderWidth="1px"
      rounded="lg"
      p={4}
      my={4}
      bg={bgColor}
      borderColor={borderColor}
    >
      <Box flex="1" overflowX="auto" whiteSpace="pre-wrap" wordBreak="break-all">
        <pre>
          <code>{code}</code>
        </pre>
      </Box>
      <Clipboard.Root value={code}>
        <Clipboard.Trigger asChild>
          <IconButton variant="surface" size="xs">
            <Clipboard.Indicator />
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Root>
    </Flex>
  )
}

export default CodeSnippet
