import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react'

const TermsOfService = () => {
  // Responsive padding, heading sizes, and font sizes
  const paddingX = useBreakpointValue({base: 4, md: 10})
  const headingSize = useBreakpointValue({base: 'lg', md: 'xl'})
  const subheadingSize = useBreakpointValue({base: 'md', md: 'lg'})
  const textSize = useBreakpointValue({base: 'sm', md: 'md'})
  const marginY = useBreakpointValue({base: 3, md: 5})

  return (
    <Box maxW="800px" mx="auto" px={paddingX} py={5}>
      <Heading as="h1" size={headingSize} mb={marginY} textAlign="center">
        Terms of Service for NAIC Orchestrator
      </Heading>
      <Text fontSize={textSize} color="gray.500" mb={marginY} textAlign="center">
        Effective Date: November 13, 2024
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        1. Acceptance of Terms
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        By accessing or using NAIC Orchestrator, a service provided by the Norwegian AI Cloud (NAIC), you agree to
        comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from
        using the service.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        2. Description of Service
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        NAIC Orchestrator enables users to create and manage virtual machines (VMs) across multiple cloud platforms. The
        service is accessible via{' '}
        <Link href="https://orchestrator.naic.no" color="teal.500" isExternal>
          orchestrator.naic.no
        </Link>.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        3. User Responsibilities
      </Heading>
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY}>
        <ListItem>
          <Text as="span" fontWeight="bold">Account Security:</Text> You are responsible for maintaining the
          confidentiality of your account credentials and for all activities that occur under your account.
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">Compliance:</Text> You agree to use the service in accordance with all
          applicable laws and regulations.
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">Prohibited Activities:</Text> You shall not use the service to engage in any
          unlawful activities, distribute malicious software, or infringe upon the rights of others.
        </ListItem>
      </List>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        4. Service Availability
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        NAIC strives to maintain the availability of NAIC Orchestrator but does not guarantee uninterrupted access.
        Maintenance, updates, or unforeseen circumstances may result in temporary service interruptions.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        5. Intellectual Property
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        All content, trademarks, and data associated with NAIC Orchestrator are the property of NAIC or its licensors.
        Unauthorized use of any intellectual property is prohibited.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        6. Data Privacy
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        Your use of the service is subject to our{' '}
        <Link href="/privacy-policy" color="teal.500">
          Privacy Policy
        </Link>, which outlines how we collect, use, and protect your information.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        7. Limitation of Liability
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        NAIC Orchestrator is provided &quot;as is&quot; without warranties of any kind. NAIC is not liable for any direct,
        indirect, incidental, or consequential damages arising from your use of the service.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        8. Modifications to Terms
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        NAIC reserves the right to modify these Terms of Service at any time. Changes will be effective upon posting on
        our website. Continued use of the service constitutes acceptance of the revised terms.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        9. Governing Law
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        These terms are governed by the laws of Norway. Any disputes arising from these terms or the use of the service
        shall be resolved in the courts of Oslo, Norway.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        10. Contact Information
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        For questions or concerns regarding these Terms of Service, please contact us at:
      </Text>
      <Text fontSize={textSize} mb={marginY}>
        Norwegian AI Cloud (NAIC)
      </Text>
      <Text fontSize={textSize} mb={marginY}>
        Email: <Link href="mailto:contact@naic.no" color="teal.500">contact@naic.no</Link>
      </Text>
      <Text fontSize={textSize} mb={marginY}>
        Address: Address: Ole-Johan Dahl&apos;s House, Gaustadalléen 23B, 0373 Oslo
      </Text>
      <Text fontSize={textSize} mb={marginY}>
        By using NAIC Orchestrator, you acknowledge that you have read, understood, and agree to these Terms of Service.
      </Text>
    </Box>
  )
}

export default TermsOfService
