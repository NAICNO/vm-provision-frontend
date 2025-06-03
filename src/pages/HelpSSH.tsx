import {
  Box,
  Heading,
  Text,
  List,
  Link,
  useBreakpointValue, Code,
} from '@chakra-ui/react'
import CodeSnippet from '../components/CodeSnippet.tsx'
import { LuExternalLink } from 'react-icons/lu'

const HelpSSHPage = () => {
  // Responsive padding, heading sizes, and font sizes
  const paddingX = useBreakpointValue({base: 4, md: 10})
  const headingSize = useBreakpointValue({base: 'lg', md: 'xl'})
  const subheadingSize = useBreakpointValue({base: 'md', md: 'md'})
  const subsubheadingSize = useBreakpointValue({base: 'sm', md: 'sm'})
  const textSize = useBreakpointValue({base: 'sm', md: 'md'})
  const marginY = useBreakpointValue({base: 3, md: 5})

  return (
    <Box maxW="800px" px={paddingX} py={5} alignItems={'start'}>
      <Heading as="h1" size={headingSize} mb={marginY}>
        SSH Troubleshooting Guide
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        This guide is designed to help you troubleshoot common issues when using SSH to connect to your virtual machine
        (VM). Follow the steps below to diagnose and resolve problems.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        1. Understanding SSH and Your VM
      </Heading>
      <Text pb={2}>
        <Text as={'b'}>SSH (Secure Shell)</Text> is a protocol that allows you to securely connect to a remote machine.
        When you use SSH:
      </Text>
      <List.Root  pl={5} fontSize={textSize} mb={marginY} gap={2}>
        <List.Item>
          <Text>You are establishing a secure, encrypted connection.</Text>
        </List.Item>
        <List.Item>
          <Text>You will typically log in using a username and an SSH key or password.</Text>
        </List.Item>
        <List.Item>
          <Text>Your VM must be running and accessible on the network.</Text>
        </List.Item>
      </List.Root>

      <Heading as="h2" size={subheadingSize} mt={8} mb={marginY}>
        2. Pre-Connection Checklist
      </Heading>
      <Text pb={2}>Before troubleshooting, verify these basics:</Text>
      <List.Root pl={5} fontSize={textSize} mb={marginY} gap={2}>
        <List.Item>
          <Text as={'b'}>Network Connectivity:</Text>
          <Text>Ensure your computer is connected to the internet or the correct local network.</Text>
        </List.Item>
        <List.Item>
          <Text as={'b'}>VM Status:</Text>
          <Text>Confirm that your virtual machine is running. Check the{' '}
            <Link
              href="/dashboard"
              color="teal.500"
              target="_blank">dashboard
            </Link>{' '} to view the
            VM&apos;s status.</Text>
        </List.Item>
        <List.Item>
          <Text as={'b'}>Correct IP:</Text>
          <Text>Verify you are using the correct IP address to connect.</Text>
        </List.Item>
        <List.Item>
          <Text as={'b'}>SSH Client Installation:</Text>
          <Text>Make sure your system has an SSH client installed.</Text>
          <List.Root pl={10} gap={2} pt={2}>
            <List.Item>
              <Text>On Linux and macOS, the SSH client is usually pre-installed.</Text>
            </List.Item>
            <List.Item>
              <Text>On Windows, you might use the {' '}
                <Link
                  href="https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh"
                  color="teal.500"
                  target="_blank"
                >
                  built-in SSH client
                  <LuExternalLink/>
                </Link>
                {' '}or{' '}
                <Link
                  href="https://www.putty.org/"
                  color="teal.500"
                  target="_blank">Putty<LuExternalLink/>
                </Link>.</Text>
            </List.Item>
          </List.Root>
        </List.Item>
      </List.Root>

      <Heading as="h2" size={subheadingSize} mt={8} mb={marginY}>
        3. SSH Command Structure
      </Heading>
      <Text pb={2}>A typical SSH command for key-based authentication looks like this:</Text>
      <CodeSnippet code={'ssh -i /path/to/your/private_key username@vm-ip-address'}/>
      <List.Root pl={5} fontSize={textSize} mb={marginY} gap={2}>
        <List.Item>
          <Text>Replace <Code>/path/to/your/private_key</Code> with the path to your private SSH key.</Text>
        </List.Item>
        <List.Item>
          <Text>Replace <Code>username</Code> with your username on the VM.</Text>
        </List.Item>
        <List.Item>
          <Text>Replace <Code>vm-ip-address</Code> with the IP address or hostname of your VM.</Text>
        </List.Item>
      </List.Root>
      <Text pb={2}>You can find this information when you click <Text as={'b'}>Help</Text> button of your VM in the{' '}
        <Link href="/dashboard" color="teal.500" target="_blank">dashboard</Link>.</Text>

      <Heading as="h3" size={subheadingSize} mt={8} mb={marginY}>
        4. Common Issues and How to Resolve Them
      </Heading>
      <Heading as="h4" size={subsubheadingSize}>A. Connection Refused</Heading>
      <Heading as="h5" size={subsubheadingSize} pt={2}>Symptoms:</Heading>
      <List.Root as={'ul'} pt={2} pb={4}>
        <List.Item>
          <Text>Error message: </Text>
          <Code>ssh: connect to host vm-ip-address port 22: Connection refused</Code>
        </List.Item>
      </List.Root>
      <Heading as="h5" size={subsubheadingSize}>Possible Causes & Solutions:</Heading>
      <List.Root as={'ul'} gap={2}>
        <List.Item>
          <Text as={'b'}>Incorrect IP/Hostname:</Text>
          <Text>Double-check the address you are using.</Text>
        </List.Item>
        <List.Item>
          <Text as={'b'}>Firewall Blocking Port 22:</Text>
          <Text>Check your IP address is listed in the list of allowed IPs on the VM’s configuration.</Text>
        </List.Item>
      </List.Root>

      <Heading as="h4" mt={8} size={subsubheadingSize}>B. Permission Denied (Publickey)</Heading>
      <Heading as="h5" size={subsubheadingSize} pt={2}>Symptoms:</Heading>
      <List.Root as={'ul'} pt={2} pb={4}>
        <List.Item>
          <Text>Error message: </Text>
          <Code>Permission denied (publickey)</Code>
        </List.Item>
      </List.Root>
      <Heading as="h5" size={subsubheadingSize}>Possible Causes & Solutions:</Heading>
      <List.Root as='ul' gap={2}>
        <List.Item>
          <Text as={'b'}>Incorrect or Missing SSH Key:</Text>
          <Text>Ensure you are using the correct private key.</Text>
        </List.Item>
        <List.Item>
          <Text as={'b'}>File Permissions:</Text>
          <Text>Your SSH key file should have restricted permissions. Use:</Text>
          <CodeSnippet code={'chmod 600 /path/to/your/private_key'}/>
        </List.Item>
        <List.Item>
          <Text as={'b'}>Wrong Username:</Text>
          <Text>Verify that you are connecting with the correct username associated with your VM.</Text>
        </List.Item>
      </List.Root>

      <Heading as="h4" mt={8} size={subsubheadingSize}>C. Timeout or No Route to Host</Heading>
      <Heading as="h5" size={subsubheadingSize} pt={2}>Symptoms:</Heading>
      <List.Root as='ul' pt={2} pb={4}>
        <List.Item>
          <Text>Error message: </Text>
          <Code>ssh: connect to host vm-ip-address port 22: Operation timed out</Code>
        </List.Item>
      </List.Root>
      <Heading as="h5" size={subsubheadingSize}>Possible Causes & Solutions:</Heading>
      <List.Root as='ul'  gap={2}>
        <List.Item>
          <Text as={'b'}>Network Issues:</Text>
          <Text>Check your local network connection and ensure there is no outage.</Text>
        </List.Item>
        <List.Item>
          <Text as={'b'}>Incorrect IP:</Text>
          <Text>Re-confirm the IP address you are trying to reach.</Text>
        </List.Item>
      </List.Root>

      <Heading as="h4" mt={8} size={subsubheadingSize}>D. Host Key Verification Failed</Heading>
      <Heading as="h5" size={subsubheadingSize} pt={2}>Symptoms:</Heading>
      <List.Root as={'ul'} pt={2} pb={4}>
        <List.Item>
          <Text>Error message: </Text>
          <Code>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</Code>
          <Code>@&nbsp;&nbsp;&nbsp;&nbsp;WARNING: REMOTE HOST IDENTIFICATION HAS
            CHANGED!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@</Code>
          <Code>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</Code>
        </List.Item>
      </List.Root>
      <Heading as="h5" size={subsubheadingSize}>What It Means:</Heading>
      <Text pt={2} pb={4}>
        This warning indicates that the SSH client has detected a mismatch between the host key of the
        VM you’re trying to connect to and the one stored in your local{' '}
        <Code>~/.ssh/known_hosts</Code>
        {' '}file.
      </Text>
      <Heading as="h5" size={subsubheadingSize}>Possible Causes & Solutions:</Heading>
      <List.Root as={'ul'} pt={2} pb={4} gap={2}>
        <List.Item>
          <Text as={'b'}>New VM with a Previously Used IP:</Text>
          <Text>If a new virtual machine has been created using an IP address that was previously assigned to another
            machine,
            the SSH host key will be different. This situation is common in environments where IP addresses are
            recycled.</Text>
        </List.Item>
        <List.Item>
          <Text as={'b'}>Remove the Old Key:</Text>
          <Text>Remove the old key from your <Code>known_hosts</Code> file. You can do this manually or by
            running:</Text>
          <CodeSnippet code={'ssh-keygen -R <vm-ip-address>'}/>
          <Text>Replace <Code>vm-ip-address</Code> with the actual IP address of the VM.</Text>
        </List.Item>
        <List.Item>
          <Text as={'b'}>Reconnect:</Text>
          <Text>Once the old key is removed, reconnect. SSH will prompt you to accept the new host key.</Text>
        </List.Item>
      </List.Root>


      <Heading as="h2" size={subheadingSize} mt={8} mb={marginY}>
        5. Advanced Tips
      </Heading>
      <List.Root pl={5} fontSize={textSize} mb={marginY} gap={2}>
        <List.Item>
          <Text>Verbose Mode:</Text>
          Run SSH in verbose mode to get more detailed error messages:
          <CodeSnippet code={'ssh -v -i /path/to/your/private_key username@vm-ip-address'}/>
          <Text>Increase verbosity with <Code>-vv</Code> or <Code>-vvv</Code> for deeper diagnostics.</Text>
        </List.Item>
        <List.Item>
          <Text>Check SSH Config:</Text>
          <Text>Review your SSH configuration file <Code>(~/.ssh/config)</Code> for any settings that might interfere
            with your connection.</Text>
        </List.Item>
      </List.Root>
      <Text>
        By following these steps, you should be able to diagnose and resolve common SSH issues when connecting to
        your virtual machine.
        If problems persist, consider reaching out to our support team at{' '}
        <Link
          href="https://www.naic.no/english/naic-support-desk/"
          color="teal.500"
          target="_blank">
          NAIC Support Desk<LuExternalLink/>
        </Link>
        .</Text>
    </Box>
  )
}

export default HelpSSHPage
