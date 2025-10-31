import {
  Box,
  Heading,
  Text,
  List,
  Link,
} from '@chakra-ui/react'

const PrivacyPolicy = () => {
  const responsiveStyles = {
    paddingX: {base: 4, md: 10} as const,
    h1Size: {base: 'lg', md: 'xl'} as const,
    h2Size: {base: 'md', md: 'lg'} as const,
    textSize: {base: 'sm', md: 'md'} as const,
    marginY: {base: 3, md: 5} as const,
  }

  return (
    <Box maxW="800px" mx="auto" px={responsiveStyles.paddingX} py={5}>
      <Heading as="h1" size={responsiveStyles.h1Size} mb={responsiveStyles.marginY} textAlign="center">
        Privacy Policy for NAIC Orchestrator
      </Heading>
      <Text fontSize={responsiveStyles.textSize} color="gray.500" mb={responsiveStyles.marginY} textAlign="center">
        Effective Date: November 18, 2024
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        1. Introduction
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        Welcome to NAIC Orchestrator, a service provided by the Norwegian AI Cloud (NAIC) for virtual machine (VM)
        creation across multiple cloud platforms. We are committed to protecting your privacy and ensuring the security
        of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your
        data when you use our service.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        2. Information We Collect
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        We collect the following types of information:
      </Text>
      <List.Root as="ul" listStyle="disc" pl={5} fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        <List.Item>
          <Text as="span" fontWeight="bold">Personal Information:</Text> When you register or interact with our service,
          we may collect personal details such as your name, email address, and contact information.
        </List.Item>
        <List.Item>
          <Text as="span" fontWeight="bold">Usage Data:</Text> We gather information on how you access and use the
          service, including your IP address and activity logs.
        </List.Item>
        <List.Item>
          <Text as="span" fontWeight="bold">VM Configuration Data:</Text> Details about the virtual machines you create,
          such as configurations and deployment preferences.
        </List.Item>
        <List.Item>
          <Text as="span" fontWeight="bold">Resource Usage Monitoring:</Text> We will collect anonymized data about how
          many resources are used during operations performed in the VMs. This information will be presented to the VM
          owner, and we will use it in the decision-making process to determine optimal resource needs for similar
          operations.
        </List.Item>
      </List.Root>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        3. How We Use Your Information
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        We use the collected information to:
      </Text>
      <List.Root as="ul" listStyle="disc" pl={5} fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        <List.Item>Provide and maintain the NAIC Orchestrator service.</List.Item>
        <List.Item>Improve and personalize your user experience.</List.Item>
        <List.Item>Communicate with you regarding updates, security alerts, and administrative messages.</List.Item>
        <List.Item>Monitor and analyze usage to enhance service performance and security.</List.Item>
      </List.Root>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        4. Data Sharing and Disclosure
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        We do not sell, rent, or intentionally share your personal information with third parties. However, please be
        aware that:
      </Text>
      <List.Root as="ul" listStyle="disc" pl={5} fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        <List.Item>
          <Text as="span" fontWeight="bold">Cloud Service Providers:</Text> The VMs you create are deployed on
          third-party cloud platforms. While we do not intentionally share your personal information with these
          providers, the nature of the service means that certain data may be processed by them as part of the VM
          deployment and operation.
        </List.Item>
        <List.Item>
          <Text as="span" fontWeight="bold">Legal Obligations:</Text> We may disclose your information if required by
          law or to protect our rights and safety.
        </List.Item>
      </List.Root>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        5. Data Security
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        We implement industry-standard security measures to protect your information from unauthorized access,
        alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic
        storage is completely secure.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        6. Your Rights
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        You have the right to:
      </Text>
      <List.Root as="ul" listStyle="disc" pl={5} fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        <List.Item>Request correction of any inaccuracies in your personal data.</List.Item>
        <List.Item>Request deletion of your personal data, subject to legal obligations.</List.Item>
        <List.Item>Object to or restrict the processing of your data.</List.Item>
      </List.Root>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        Please note that we do not provide an option for users to obtain a copy of their data.
      </Text>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        To exercise these rights, please contact us at{' '}
        <Link
          href="mailto:contact@naic.no"
          color="teal.500">
          contact@naic.no
        </Link>.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        7. Changes to This Privacy Policy
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you
        of any significant changes by posting the new policy on our website and updating the effective date.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        8. Contact Us
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
      </Text>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        Norwegian AI Cloud (NAIC)
      </Text>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        Email: <Link href="mailto:contact@naic.no" color="teal.500">contact@naic.no</Link>
      </Text>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        Address: Ole-Johan Dahl&apos;s House, Gaustadalléen 23B, 0373 Oslo
      </Text>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        By using NAIC Orchestrator, you acknowledge that you have read and understood this Privacy Policy and agree to
        our data practices.
      </Text>
    </Box>
  )
}

export default PrivacyPolicy
