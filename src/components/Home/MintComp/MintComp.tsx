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
          <Text>price: { }</Text>
          <UseContractMint functionName="firstPurchaseTicket" />
        </CardBody>
        <CardFooter>
          <VStack alignItems="start">
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