import { Button, useClipboard, Box, Flex, useColorMode } from '@chakra-ui/react'

interface CodeSnippetProps {
  code: string;
}

const CodeSnippet = ({code}: CodeSnippetProps) => {
  const {hasCopied, onCopy} = useClipboard(code)
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
      <Box flex="1" overflowX="auto">
        <pre>
          <code>{code}</code>
        </pre>
      </Box>
      <Button colorScheme="teal" size="xs" onClick={onCopy} ml={4}>
        {hasCopied ? 'Copied' : 'Copy'}
      </Button>
    </Flex>
  )
}

export default CodeSnippet
