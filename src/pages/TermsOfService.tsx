import {
  Box,
  Heading,
  Text,
  List,
  Link,
} from '@chakra-ui/react'

const TermsOfService = () => {
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
        Terms of Service for NAIC Orchestrator
      </Heading>
      <Text fontSize={responsiveStyles.textSize} color="gray.500" mb={responsiveStyles.marginY} textAlign="center">
        Effective Date: November 18, 2024
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        1. Acceptance of Terms
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        By accessing or using NAIC Orchestrator, a service provided by the Norwegian AI Cloud (NAIC), you agree to
        comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from
        using the service. For any further clarifications, please contact{' '}
        <Link href="mailto:contact@naic.no" color="teal.500">contact@naic.no</Link>.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        2. Description of Service
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        NAIC Orchestrator enables users to create and manage virtual machines (VMs) across multiple cloud platforms. The
        service is accessible via{' '}
        <Link href="https://orchestrator.naic.no" color="teal.500" target="_blank">
          orchestrator.naic.no
        </Link>.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        3. User Responsibilities
      </Heading>
      <List.Root as="ul" listStyle="disc" pl={5} fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        <List.Item>
          <Text as="span" fontWeight="bold">Account Security:</Text> You are responsible for maintaining the
          confidentiality of your account credentials and for all activities that occur under your account.
        </List.Item>
        <List.Item>
          <Text as="span" fontWeight="bold">Compliance:</Text> You agree to use the service in accordance with all
          applicable laws and regulations. The service should be used for research and education purposes only, except
          in cases where prior permission has been obtained for commercial activity. When virtual machines are created
          under your account and distributed to third parties, these terms must be clearly communicated, and you, as the
          account owner, hold responsibility for compliance.
        </List.Item>
        <List.Item>
          <Text as="span" fontWeight="bold">Prohibited Activities:</Text> You shall not use the service to engage in any
          unlawful activities, distribute malicious software, infringe upon the rights of others, or use this service
          for cryptocurrency-related activities. The software provided with the virtual machines must not be used
          outside their license agreement terms and conditions.
        </List.Item>
        <List.Item>
          <Text as="span" fontWeight="bold">Privacy:</Text> As the account owner, you are responsible for the data you
          make available with the virtual machines. The virtual machines should not hold or process data beyond category
          yellow.{' '}(<Link href="https://www.uio.no/english/services/it/security/lsis/data-classes.html" color="teal.500" target="_blank">
          https://www.uio.no/english/services/it/security/lsis/data-classes.html</Link>)
        </List.Item>
      </List.Root>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        4. Service Availability
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        NAIC strives to maintain the availability of NAIC Orchestrator but does not guarantee uninterrupted access.
        Maintenance, updates, or unforeseen circumstances may result in temporary service interruptions. The virtual
        machines we provide should not be used to store persistent data. These virtual machines do not have backup
        services, and all data will be lost at the end of their lifetime, as decided during the provisioning stage.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        5. Intellectual Property
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        All content, trademarks, and data associated with NAIC Orchestrator are the property of NAIC or its licensors.
        Unauthorized use of any intellectual property is prohibited.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        6. Data Privacy
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        Your use of the service is subject to our{' '}
        <Link href="/privacy-policy" color="teal.500">Privacy Policy</Link>, which outlines how we collect, use, and
        protect your information.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        7. Limitation of Liability
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        NAIC Orchestrator is provided &quot;as is&quot; without warranties of any kind. NAIC is not liable for any direct,
        indirect, incidental, or consequential damages arising from your use of the service.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        8. Modifications to Terms
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        NAIC reserves the right to modify these Terms of Service at any time. Changes will be effective upon posting on
        our website. Continued use of the service constitutes acceptance of the revised terms.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        9. Governing Law
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        These terms are governed by the laws of Norway. Any disputes arising from these terms or the use of the service
        shall be resolved accordingly.
      </Text>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        10. Additional License and Terms and Conditions
      </Heading>
      <List.Root as="ul" listStyle="disc" pl={5} fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        <List.Item>
          For services that use the European Environment for Scientific Software Installations (EESSI), visit{' '}
          <Link href="https://www.eessi.io/docs/" color="teal.500" target="_blank">EESSI Documentation</Link>.
        </List.Item>
        <List.Item>
          For NIRD data service, visit{' '}
          <Link href="https://www.sigma2.no/nird-research-data-archive-preservation-plan" color="teal.500" target="_blank">
            NIRD Research Data Archive Preservation Plan
          </Link>.
        </List.Item>
      </List.Root>

      <Heading as="h2" size={responsiveStyles.h2Size} mt={responsiveStyles.marginY} mb={responsiveStyles.marginY}>
        11. Contact Information
      </Heading>
      <Text fontSize={responsiveStyles.textSize} mb={responsiveStyles.marginY}>
        For questions or concerns regarding these Terms of Service, please contact us at:
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
        By using NAIC Orchestrator, you acknowledge that you have read, understood, and agree to these Terms of Service.
      </Text>
    </Box>
  )
}

export default TermsOfService
