import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react'

const PrivacyPolicy = () => {
  // Responsive padding, heading sizes, and font sizes
  const paddingX = useBreakpointValue({base: 4, md: 10})
  const headingSize = useBreakpointValue({base: 'lg', md: 'xl'})
  const subheadingSize = useBreakpointValue({base: 'md', md: 'lg'})
  const textSize = useBreakpointValue({base: 'sm', md: 'md'})
  const marginY = useBreakpointValue({base: 3, md: 5})

  return (
    <Box maxW="800px" mx="auto" px={paddingX} py={5}>
      <Heading as="h1" size={headingSize} mb={marginY} textAlign="center">
        Privacy Policy for NAIC Orchestrator
      </Heading>
      <Text fontSize={textSize} color="gray.500" mb={marginY} textAlign="center">
        Effective Date: November 18, 2024
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        1. Introduction
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        Welcome to NAIC Orchestrator, a service provided by the Norwegian AI Cloud (NAIC) for virtual machine (VM)
        creation across multiple cloud platforms. We are committed to protecting your privacy and ensuring the security
        of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your
        data when you use our service.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        2. Information We Collect
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        We collect the following types of information:
      </Text>
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY}>
        <ListItem>
          <Text as="span" fontWeight="bold">Personal Information:</Text> When you register or interact with our service,
          we may collect personal details such as your name, email address, and contact information.
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">Usage Data:</Text> We gather information on how you access and use the
          service, including your IP address and activity logs.
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">VM Configuration Data:</Text> Details about the virtual machines you create,
          such as configurations and deployment preferences.
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">Resource Usage Monitoring:</Text> We will collect anonymized data about how
          many resources are used during operations performed in the VMs. This information will be presented to the VM
          owner, and we will use it in the decision-making process to determine optimal resource needs for similar
          operations.
        </ListItem>
      </List>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        3. How We Use Your Information
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        We use the collected information to:
      </Text>
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY}>
        <ListItem>Provide and maintain the NAIC Orchestrator service.</ListItem>
        <ListItem>Improve and personalize your user experience.</ListItem>
        <ListItem>Communicate with you regarding updates, security alerts, and administrative messages.</ListItem>
        <ListItem>Monitor and analyze usage to enhance service performance and security.</ListItem>
      </List>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        4. Data Sharing and Disclosure
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        We do not sell, rent, or intentionally share your personal information with third parties. However, please be
        aware that:
      </Text>
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY}>
        <ListItem>
          <Text as="span" fontWeight="bold">Cloud Service Providers:</Text> The VMs you create are deployed on
          third-party cloud platforms. While we do not intentionally share your personal information with these
          providers, the nature of the service means that certain data may be processed by them as part of the VM
          deployment and operation.
        </ListItem>
        <ListItem>
          <Text as="span" fontWeight="bold">Legal Obligations:</Text> We may disclose your information if required by
          law or to protect our rights and safety.
        </ListItem>
      </List>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        5. Data Security
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        We implement industry-standard security measures to protect your information from unauthorized access,
        alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic
        storage is completely secure.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        6. Your Rights
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        You have the right to:
      </Text>
      <List styleType="disc" pl={5} fontSize={textSize} mb={marginY}>
        <ListItem>Request correction of any inaccuracies in your personal data.</ListItem>
        <ListItem>Request deletion of your personal data, subject to legal obligations.</ListItem>
        <ListItem>Object to or restrict the processing of your data.</ListItem>
      </List>
      <Text fontSize={textSize} mb={marginY}>
        Please note that we do not provide an option for users to obtain a copy of their data.
      </Text>
      <Text fontSize={textSize} mb={marginY}>
        To exercise these rights, please contact us at{' '}
        <Link
          href="mailto:contact@naic.no"
          color="teal.500">
          contact@naic.no
        </Link>.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        7. Changes to This Privacy Policy
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you
        of any significant changes by posting the new policy on our website and updating the effective date.
      </Text>

      <Heading as="h2" size={subheadingSize} mt={marginY} mb={marginY}>
        8. Contact Us
      </Heading>
      <Text fontSize={textSize} mb={marginY}>
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
      </Text>
      <Text fontSize={textSize} mb={marginY}>
        Norwegian AI Cloud (NAIC)
      </Text>
      <Text fontSize={textSize} mb={marginY}>
        Email: <Link href="mailto:contact@naic.no" color="teal.500">contact@naic.no</Link>
      </Text>
      <Text fontSize={textSize} mb={marginY}>
        Address: Ole-Johan Dahl&apos;s House, Gaustadalléen 23B, 0373 Oslo
      </Text>
      <Text fontSize={textSize} mb={marginY}>
        By using NAIC Orchestrator, you acknowledge that you have read and understood this Privacy Policy and agree to
        our data practices.
      </Text>
    </Box>
  )
}

export default PrivacyPolicy
