import { Box, Heading, Text, VStack, Code, List, Stack } from '@chakra-ui/react'

export default function HelpGenerateSshKey() {
  return (
    <Box maxW="4xl" mx="auto" p={8}>
      <VStack align="stretch" gap={6}>
        <Heading size="2xl">How to Generate SSH Key Pairs</Heading>
        
        <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }}>
          SSH keys provide a secure way to access your virtual machines. Follow the guide below to generate and use SSH keys.
        </Text>

        {/* Windows Section */}
        <Box>
          <Heading size="xl" mb={4}>For Windows Users</Heading>
          
          <VStack align="stretch" gap={4}>
            <Box>
              <Heading size="md" mb={2}>Using PowerShell or Command Prompt</Heading>
              <List.Root gap={3}>
                <List.Item>
                  <Text>Open PowerShell or Command Prompt</Text>
                </List.Item>
                <List.Item>
                  <Text>Generate a new SSH key pair:</Text>
                  <Code display="block" p={3} mt={2} borderRadius="md">
                    ssh-keygen -t ed25519 -f %userprofile%\.ssh\id_ed25519
                  </Code>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mt={1}>
                    Or for older systems that don&apos;t support Ed25519:
                  </Text>
                  <Code display="block" p={3} mt={1} borderRadius="md">
                    ssh-keygen -t rsa -b 4096 -f %userprofile%\.ssh\id_rsa
                  </Code>
                </List.Item>
                <List.Item>
                  <Text>Enter a secure passphrase when prompted (optional but recommended)</Text>
                </List.Item>
                <List.Item>
                  <Text>View your public key:</Text>
                  <Code display="block" p={3} mt={2} borderRadius="md">
                    type %userprofile%\.ssh\id_ed25519.pub
                  </Code>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mt={1}>
                    For RSA keys, use: <Code>type %userprofile%\.ssh\id_rsa.pub</Code>
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>Copy the entire output (starting with ssh-ed25519 or ssh-rsa) and paste it into the import dialog</Text>
                </List.Item>
              </List.Root>
            </Box>
          </VStack>
        </Box>

        {/* macOS/Linux Section */}
        <Box>
          <Heading size="xl" mb={4}>For macOS and Linux Users</Heading>
          
          <VStack align="stretch" gap={4}>
            <Box>
              <Heading size="md" mb={2}>Using Terminal</Heading>
              <List.Root gap={3}>
                <List.Item>
                  <Text>Open Terminal</Text>
                </List.Item>
                <List.Item>
                  <Text>Generate a new SSH key pair:</Text>
                  <Code display="block" p={3} mt={2} borderRadius="md">
                    ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519
                  </Code>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mt={1}>
                    Or for older systems that don&apos;t support Ed25519:
                  </Text>
                  <Code display="block" p={3} mt={1} borderRadius="md">
                    ssh-keygen -t rsa -b 4096 -f ~/.ssh/id_rsa
                  </Code>
                </List.Item>
                <List.Item>
                  <Text>Enter a secure passphrase when prompted (optional but recommended)</Text>
                </List.Item>
                <List.Item>
                  <Text>View your public key:</Text>
                  <Code display="block" p={3} mt={2} borderRadius="md">
                    cat ~/.ssh/id_ed25519.pub
                  </Code>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }} mt={1}>
                    For RSA keys, use: <Code>cat ~/.ssh/id_rsa.pub</Code>
                  </Text>
                </List.Item>
                <List.Item>
                  <Text>Copy the entire output (starting with ssh-ed25519 or ssh-rsa) and paste it into the import dialog</Text>
                </List.Item>
              </List.Root>
            </Box>
          </VStack>
        </Box>

        {/* Viewing the Public Key */}
        <Box>
          <Heading size="xl" mb={4}>How to View Your Public Key</Heading>
          
          <Text mb={3}>If you already have an SSH key and need to view it:</Text>
          
          <VStack align="stretch" gap={3}>
            <Box>
              <Text fontWeight="medium">Windows (PowerShell/CMD):</Text>
              <Code display="block" p={3} mt={1} borderRadius="md">
                type %userprofile%\.ssh\id_ed25519.pub
              </Code>
            </Box>
            <Box>
              <Text fontWeight="medium">macOS/Linux (Terminal):</Text>
              <Code display="block" p={3} mt={1} borderRadius="md">
                cat ~/.ssh/id_ed25519.pub
              </Code>
            </Box>
          </VStack>
        </Box>

        {/* Important Notes */}
        <Box bg="blue.50" _dark={{ bg: 'blue.950' }} p={4} borderRadius="md">
          <Heading size="md" mb={3}>Important Notes</Heading>
          <List.Root gap={2} pl={4}>
            <List.Item>
              <Text>
                <Text as="span" fontWeight="bold">Never share your private key!</Text> Only share the public key (file ending in .pub)
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Your private key should remain on your local machine and never be uploaded anywhere
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                The public key is safe to share and is what you&apos;ll paste into the import dialog
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                Your public key typically starts with <Code>ssh-ed25519</Code> or <Code>ssh-rsa</Code>
              </Text>
            </List.Item>
          </List.Root>
        </Box>

        {/* Next Steps */}
        <Box>
          <Heading size="xl" mb={4}>Next Steps</Heading>
          <Text>
            Once you&apos;ve copied your public key to the clipboard, paste it into the &quot;Public Key&quot; field 
            in the Import SSH Key dialog. Give it a memorable name to help you identify it later.
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}
