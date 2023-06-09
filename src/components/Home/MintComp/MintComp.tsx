import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { useContractRead } from 'wagmi'
import { contractABI, contractAddress } from '~/hooks'
import { useEffect } from 'react'
import { UseContractMint } from '~/components/UseComponent/UseContractMint'



type ticketProps = {
  heading: string,
}

export const MintComp = (props: ticketProps) => {

  const { data: useContractReadData, isError, isLoading } = useContractRead({
    address: contractAddress,
    abi: contractABI.abi,
    functionName: 'maxTickets',
  })

  useEffect(() => {
    // console.log('useContractReadData: ' + useContractReadData)
    if (!isError && !isLoading) {
      console.log('no error: ' + useContractReadData)
    }
  }, [useContractReadData, isError, isLoading])


  return (
    <Box as="section" w="100%">
      <Card my="5" alignItems="left">
        <CardHeader>
          <Heading as="h3">{props.heading}</Heading>
        </CardHeader>
        <CardBody>
          <UseContractMint functionName="firstPurchaseTicket" /> {/* replace with mintTicket */}
          <UseContractMint functionName="firstPurchaseTicket" /> {/* replace with mintTicket */}
        </CardBody>
        <CardFooter>
          <VStack alignItems="start">
            <Text> free the world from slavery</Text>
            <Text> create free bluprints for anyone to create free energy to sell it world wide</Text>
            <Text>taxes and selling</Text>
            <Text>auto sale price: lastPrice + ((lastPrice * 39) / 100)</Text>

            <Text>* All tickets are hijackable means they can be sold x2 floor price
              without your confirmation
            </Text>
            <Text>
              * Disclaimer: when you buy a ticket your address
              will be saved in the infinite mining 1% list for ever and ever
              regardless of whether you sold your ticket or not
              and you will never be stopping getting LuckyTribe tokens
            </Text>
          </VStack>
        </CardFooter>
      </Card>
    </Box>
  )
}