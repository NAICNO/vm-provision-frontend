import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  useBreakpointValue, UnorderedList, Code,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import CodeSnippet from '../components/CodeSnippet.tsx'

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
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY} spacing={2}>
        <ListItem>
          <Text>You are establishing a secure, encrypted connection.</Text>
        </ListItem>
        <ListItem>
          <Text>You will typically log in using a username and an SSH key or password.</Text>
        </ListItem>
        <ListItem>
          <Text>Your VM must be running and accessible on the network.</Text>
        </ListItem>
      </List>

      <Heading as="h2" size={subheadingSize} mt={8} mb={marginY}>
        2. Pre-Connection Checklist
      </Heading>
      <Text pb={2}>Before troubleshooting, verify these basics:</Text>
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY} spacing={2}>
        <ListItem>
          <Text as={'b'}>Network Connectivity:</Text>
          <Text>Ensure your computer is connected to the internet or the correct local network.</Text>
        </ListItem>
        <ListItem>
          <Text as={'b'}>VM Status:</Text>
          <Text>Confirm that your virtual machine is running. Check the{' '}
            <Link
              href="/dashboard"
              color="teal.500"
              isExternal>dashboard
            </Link>{' '} to view the
            VM&apos;s status.</Text>
        </ListItem>
        <ListItem>
          <Text as={'b'}>Correct IP:</Text>
          <Text>Verify you are using the correct IP address to connect.</Text>
        </ListItem>
        <ListItem>
          <Text as={'b'}>SSH Client Installation:</Text>
          <Text>Make sure your system has an SSH client installed.</Text>
          <List styleType="disc" pl={10} spacing={2} pt={2}>
            <ListItem>
              <Text>On Linux and macOS, the SSH client is usually pre-installed.</Text>
            </ListItem>
            <ListItem>
              <Text>On Windows, you might use the {' '}
                <Link
                  href="https://learn.microsoft.com/en-us/windows/terminal/tutorials/ssh"
                  color="teal.500"
                  isExternal
                >
                  built-in SSH client
                  <ExternalLinkIcon mx="2px"/>
                </Link>
                {' '}or{' '}
                <Link
                  href="https://www.putty.org/"
                  color="teal.500"
                  isExternal>Putty<ExternalLinkIcon mx="2px"/>
                </Link>.</Text>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <Heading as="h2" size={subheadingSize} mt={8} mb={marginY}>
        3. SSH Command Structure
      </Heading>
      <Text pb={2}>A typical SSH command for key-based authentication looks like this:</Text>
      <CodeSnippet code={'ssh -i /path/to/your/private_key username@vm-ip-address'}/>
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY} spacing={2}>
        <ListItem>
          <Text>Replace <Code>/path/to/your/private_key</Code> with the path to your private SSH key.</Text>
        </ListItem>
        <ListItem>
          <Text>Replace <Code>username</Code> with your username on the VM.</Text>
        </ListItem>
        <ListItem>
          <Text>Replace <Code>vm-ip-address</Code> with the IP address or hostname of your VM.</Text>
        </ListItem>
      </List>
      <Text pb={2}>You can find this information when you click <Text as={'b'}>Help</Text> button of your VM in the{' '}
        <Link href="/dashboard" color="teal.500" isExternal>dashboard</Link>.</Text>

      <Heading as="h3" size={subheadingSize} mt={8} mb={marginY}>
        4. Common Issues and How to Resolve Them
      </Heading>
      <Heading as="h4" size={subsubheadingSize}>A. Connection Refused</Heading>
      <Heading as="h5" size={subsubheadingSize} pt={2}>Symptoms:</Heading>
      <UnorderedList pt={2} pb={4}>
        <ListItem>
          <Text>Error message: </Text>
          <Code>ssh: connect to host vm-ip-address port 22: Connection refused</Code>
        </ListItem>
      </UnorderedList>
      <Heading as="h5" size={subsubheadingSize}>Possible Causes & Solutions:</Heading>
      <UnorderedList spacing={2}>
        <ListItem>
          <Text as={'b'}>Incorrect IP/Hostname:</Text>
          <Text>Double-check the address you are using.</Text>
        </ListItem>
        <ListItem>
          <Text as={'b'}>Firewall Blocking Port 22:</Text>
          <Text>Check your IP address is listed in the list of allowed IPs on the VM’s configuration.</Text>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" mt={8} size={subsubheadingSize}>B. Permission Denied (Publickey)</Heading>
      <Heading as="h5" size={subsubheadingSize} pt={2}>Symptoms:</Heading>
      <UnorderedList pt={2} pb={4}>
        <ListItem>
          <Text>Error message: </Text>
          <Code>Permission denied (publickey)</Code>
        </ListItem>
      </UnorderedList>
      <Heading as="h5" size={subsubheadingSize}>Possible Causes & Solutions:</Heading>
      <UnorderedList spacing={2}>
        <ListItem>
          <Text as={'b'}>Incorrect or Missing SSH Key:</Text>
          <Text>Ensure you are using the correct private key.</Text>
        </ListItem>
        <ListItem>
          <Text as={'b'}>File Permissions:</Text>
          <Text>Your SSH key file should have restricted permissions. Use:</Text>
          <CodeSnippet code={'chmod 600 /path/to/your/private_key'}/>
        </ListItem>
        <ListItem>
          <Text as={'b'}>Wrong Username:</Text>
          <Text>Verify that you are connecting with the correct username associated with your VM.</Text>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" mt={8} size={subsubheadingSize}>C. Timeout or No Route to Host</Heading>
      <Heading as="h5" size={subsubheadingSize} pt={2}>Symptoms:</Heading>
      <UnorderedList pt={2} pb={4}>
        <ListItem>
          <Text>Error message: </Text>
          <Code>ssh: connect to host vm-ip-address port 22: Operation timed out</Code>
        </ListItem>
      </UnorderedList>
      <Heading as="h5" size={subsubheadingSize}>Possible Causes & Solutions:</Heading>
      <UnorderedList spacing={2}>
        <ListItem>
          <Text as={'b'}>Network Issues:</Text>
          <Text>Check your local network connection and ensure there is no outage.</Text>
        </ListItem>
        <ListItem>
          <Text as={'b'}>Incorrect IP:</Text>
          <Text>Re-confirm the IP address you are trying to reach.</Text>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" mt={8} size={subsubheadingSize}>D. Host Key Verification Failed</Heading>
      <Heading as="h5" size={subsubheadingSize} pt={2}>Symptoms:</Heading>
      <UnorderedList pt={2} pb={4}>
        <ListItem>
          <Text>Error message: </Text>
          <Code>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</Code>
          <Code>@&nbsp;&nbsp;&nbsp;&nbsp;WARNING: REMOTE HOST IDENTIFICATION HAS
            CHANGED!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@</Code>
          <Code>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</Code>
        </ListItem>
      </UnorderedList>
      <Heading as="h5" size={subsubheadingSize}>What It Means:</Heading>
      <Text pt={2} pb={4}>
        This warning indicates that the SSH client has detected a mismatch between the host key of the
        VM you’re trying to connect to and the one stored in your local{' '}
        <Code>~/.ssh/known_hosts</Code>
        {' '}file.
      </Text>
      <Heading as="h5" size={subsubheadingSize}>Possible Causes & Solutions:</Heading>
      <UnorderedList pt={2} pb={4} spacing={2}>
        <ListItem>
          <Text as={'b'}>New VM with a Previously Used IP:</Text>
          <Text>If a new virtual machine has been created using an IP address that was previously assigned to another
            machine,
            the SSH host key will be different. This situation is common in environments where IP addresses are
            recycled.</Text>
        </ListItem>
        <ListItem>
          <Text as={'b'}>Remove the Old Key:</Text>
          <Text>Remove the old key from your <Code>known_hosts</Code> file. You can do this manually or by
            running:</Text>
          <CodeSnippet code={'ssh-keygen -R <vm-ip-address>'}/>
          <Text>Replace <Code>vm-ip-address</Code> with the actual IP address of the VM.</Text>
        </ListItem>
        <ListItem>
          <Text as={'b'}>Reconnect:</Text>
          <Text>Once the old key is removed, reconnect. SSH will prompt you to accept the new host key.</Text>
        </ListItem>
      </UnorderedList>


      <Heading as="h2" size={subheadingSize} mt={8} mb={marginY}>
        5. Advanced Tips
      </Heading>
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY} spacing={2}>
        <ListItem>
          <Text>Verbose Mode:</Text>
          Run SSH in verbose mode to get more detailed error messages:
          <CodeSnippet code={'ssh -v -i /path/to/your/private_key username@vm-ip-address'}/>
          <Text>Increase verbosity with <Code>-vv</Code> or <Code>-vvv</Code> for deeper diagnostics.</Text>
        </ListItem>
        <ListItem>
          <Text>Check SSH Config:</Text>
          <Text>Review your SSH configuration file <Code>(~/.ssh/config)</Code> for any settings that might interfere
            with your connection.</Text>
        </ListItem>
      </List>
      <Text>
        By following these steps, you should be able to diagnose and resolve common SSH issues when connecting to
        your virtual machine.
        If problems persist, consider reaching out to our support team at{' '}
        <Link
          href="https://www.naic.no/english/naic-support-desk/"
          color="teal.500"
          isExternal>
          NAIC Support Desk<ExternalLinkIcon mx="2px"/>
        </Link>
        .</Text>
    </Box>
  )
}

export default HelpSSHPage
