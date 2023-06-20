import { Box, Image, Text } from '@chakra-ui/react'
import imageToAdd from './mushroom.png'
import { EmailSubscriptionForm } from '~/components/EmailSubscriptionForm'
import { MintComp } from './MintComp'




const handleFormSubmit = (email: string) => {
  console.log('Submitted email:', email)
}

export const Home = () => {

  return (
    <Box as="section" w="100%">
      <Box my="5" w="100%">
        <Image src={imageToAdd} alt="Image" />
      </Box>

      <Box>
        <Text fontSize="xl">Tickets contract address:
          &apos;0xB97E964ceD7ebD9A76278bfeF579949701811327&apos;
        </Text>
      </Box>

      <MintComp heading="Lucky Bugs miners" />

      <Box my="10">
        <EmailSubscriptionForm onSubmit={handleFormSubmit} />
      </Box>
    </Box>
  )
}