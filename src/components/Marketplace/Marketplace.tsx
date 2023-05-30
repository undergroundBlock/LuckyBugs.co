// import { useMetaMask } from '~/hooks/useMetaMask'
// import { formatChainAsNum } from '~/utils'
import { Box, Image } from '@chakra-ui/react'
import imageToAdd from '~/assets/images/mushroom.png'

export const Marketplace = () => {

  // const { wallet } = useMetaMask()

  return (
    <Box as="section" w="100%" fontSize={'xs'}>
      <Box my="5" w="100%">
        <Image src={imageToAdd} alt="Image" />
      </Box>
      {/* {wallet.accounts.length > 0 &&
        <>
          <Text>Wallet Accounts: {wallet.accounts[0]}</Text>
          <Text>Wallet Balance: {wallet.balance}</Text>
          <Text>Hex ChainId: {wallet.chainId}</Text>
          <Text>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</Text>
        </>
      } */}

    </Box >
  )
}