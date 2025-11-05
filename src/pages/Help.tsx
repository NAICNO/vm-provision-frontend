import {
  Box,
  Heading,
  Text,
  List,
  Link,
} from '@chakra-ui/react'
import { LuExternalLink } from 'react-icons/lu'

const HelpPage = () => {
  const responsiveStyles = {
    paddingX: {base: 4, md: 10} as const,
    h1Size: {base: 'lg', md: 'xl'} as const,
    h2Size: {base: 'md', md: 'lg'} as const,
    textSize: {base: 'sm', md: 'md'} as const,
    marginY: {base: 3, md: 5} as const,
  }

  return (
    <Box maxW="800px" px={responsiveStyles.paddingX} py={5} alignItems={'start'}>
      <Heading as="h1" size={responsiveStyles.h1Size} mb={responsiveStyles.marginY}>
        Help and Support
      </Heading>
      <Text fontSize={responsiveStyles.textSize} color="gray.500" mb={responsiveStyles.marginY}>
        Get help and find answers to common questions
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        Frequently Asked Questions
      </Heading>
      <List.Root as="ul" pl={5} fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY} gap={4}>
        <List.Item>
          <Text as="span" fontWeight="bold">What is the NAIC Orchestrator?</Text>
          <Text>The NAIC Orchestrator is a cloud management platform that allows you to manage and deploy virtual
            machines across multiple cloud providers.</Text>
        </List.Item>
        <List.Item>
          <Text as="span" fontWeight="bold">How do I create a new virtual machine?</Text>
          <Text>To create a new virtual machine, log into your NAIC Orchestrator account, navigate to the dashboard, and
            click on &quot;Create VM.&quot; Follow the prompts to customize and create your VM.</Text>
        </List.Item>
        <List.Item>
          <Text as="span" fontWeight="bold">What cloud platforms are supported?</Text>
          <Text>
            NAIC Orchestrator supports multiple cloud platforms including NREC, AWS, Google Cloud, IBM Cloud and Nscale. Additional
            platforms may be available based on your organization’s configuration.
          </Text>
        </List.Item>
        <List.Item>
          <Text as="span" fontWeight="bold">Having trouble accessing your virtual machine via SSH?</Text>
          <Text>Check out our <Link href="/help/ssh-troubleshoot" color="teal.500" target="_blank">SSH Troubleshooting Guide <LuExternalLink/></Link> for help.</Text>
        </List.Item>
      </List.Root>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        Additional Resources
      </Heading>
      <List.Root as="ul" listStyle="disc" pl={5} fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        <List.Item>
          <Link href="/privacy-policy" color="teal.500" target="_blank">Privacy Policy <LuExternalLink /></Link> -
          Information on how we protect your data.
        </List.Item>
        <List.Item>
          <Link href="/terms-of-service" color="teal.500" target="_blank">Terms of Service <LuExternalLink
          /></Link> - Details on our service terms and
          user responsibilities.
        </List.Item>
      </List.Root>
      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        Contact Support
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        If you need further assistance, please reach out to our support team at <Link
          href="https://www.naic.no/english/naic-support-desk/" color="teal.500" target="_blank">NAIC Support
        Desk<LuExternalLink/></Link>.
      </Text>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        Email: <Link href="mailto:support@naic.no" color="teal.500">support@naic.no</Link>
      </Text>
    </Box>
  )
}

export default HelpPage
