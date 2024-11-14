import React from 'react'
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const HelpPage: React.FC = () => {
  // Responsive padding, heading sizes, and font sizes
  const paddingX = useBreakpointValue({base: 4, md: 10})
  const headingSize = useBreakpointValue({base: 'lg', md: 'xl'})
  const subheadingSize = useBreakpointValue({base: 'md', md: 'lg'})
  const textSize = useBreakpointValue({base: 'sm', md: 'md'})
  const marginY = useBreakpointValue({base: 3, md: 5})

  return (
    <Box maxW="800px" px={paddingX} py={5} alignItems={'start'}>
      <Heading as="h1" size={headingSize} mb={marginY} >
        Help and Support
      </Heading>
      <Text fontSize={textSize} color="gray.500" mb={marginY}>
        Get help and find answers to common questions
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        Frequently Asked Questions
      </Heading>
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY} spacing={4}>
        <ListItem>
          <Text as="span" fontWeight="bold">How do I create a new virtual machine?</Text>
          <Text>To create a new virtual machine, log into your NAIC Orchestrator account, navigate to the dashboard, and
            click on &quot;Create VM.&quot; Follow the prompts to customize and create your VM.</Text>
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">What cloud platforms are supported?</Text>
          <Text>NAIC Orchestrator supports multiple cloud platforms including AWS, Google Cloud, and Azure. Additional
            platforms may be available based on your organization’s configuration.</Text>
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">How do I reset my password?</Text>
          <Text>Click on &quot;Reset Password&quot; on the login page, and follow the instructions to reset
            your password.</Text>
        </ListItem>
      </List>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        Additional Resources
      </Heading>
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY}>
        <ListItem>
          <Link href="/privacy-policy" color="teal.500" isExternal>Privacy Policy <ExternalLinkIcon mx='2px' /></Link> - Information on how we protect your data.
        </ListItem>
        <ListItem>
          <Link href="/terms-of-service" color="teal.500" isExternal>Terms of Service <ExternalLinkIcon mx='2px' /></Link> - Details on our service terms and
          user responsibilities.
        </ListItem>
      </List>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        Contact Support
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        If you need further assistance, please reach out to our support team at <Link href="https://www.naic.no/english/naic-support-desk/" color="teal.500" isExternal>NAIC Support Desk<ExternalLinkIcon mx='2px' /></Link>.
      </Text>
      <Text fontSize={textSize} mb={marginY}>
        Email: <Link href="mailto:support@naic.no" color="teal.500">support@naic.no</Link>
      </Text>
    </Box>
  )
}

export default HelpPage
