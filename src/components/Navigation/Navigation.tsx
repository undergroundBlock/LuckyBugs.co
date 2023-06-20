import { ConnectButton } from '~/components/ConnectButton'

import { Divider, Box, Flex, HStack, Heading, Spacer, Image } from '@chakra-ui/react'
import icon from './logo.ico'


export const Navigation = () => {

  return (
    <Box>
      <Flex as="nav" mb="10px" alignItems="center" gap="10px">
        <Image src={icon} h="60px" alt="Image" />
        <Heading color="blackAlpha.800" as="h1">Lucky Bugs</Heading>
        <Spacer />
        <HStack spacing="20px">
          <Box bg="grey.200" p="10px"></Box>
          <ConnectButton />
        </HStack>
      </Flex >
      <Divider my="12px" />
    </Box>

  )
}