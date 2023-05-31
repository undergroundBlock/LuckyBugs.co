import { Box, Image, Text } from '@chakra-ui/react'
import styles from './Home.module.css'
import imageToAdd from 'mushroom.png'
import { EmailSubscriptionForm } from '~/components/EmailSubscriptionForm'
import { MintComp } from './MintComp'




const handleFormSubmit = (email: string) => {
  console.log('Submitted email:', email)
}

export const Home = () => {

  return (
    <Box as="section" w="100%">
      <Box my="5" w="100%">
        <Image className={styles.img} src={imageToAdd} alt="Image" />
      </Box>

      <Box>
        <Text fontSize="xl">Tickets contract address:
          &apos;0xC1DCF57D10a8D799a8aAAD0ead3b833bd2Df1d40&apos;
        </Text>
      </Box>

      <MintComp heading="Lucky Tribe miners" />

      <Box my="10">
        <EmailSubscriptionForm onSubmit={handleFormSubmit} />
      </Box>
    </Box>
  )
}