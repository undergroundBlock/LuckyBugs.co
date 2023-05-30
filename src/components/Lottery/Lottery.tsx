import { Box, Heading, Text, SimpleGrid, Divider, VStack } from '@chakra-ui/react'
import { LotteryComp } from './LotteryComp'

export const Lottery = () => {

  // const { wallet } = useMetaMask()

  const cardProp = {
    w: '33.3%',
    minH: '250px',
    fontSize: '25px',
    ':hover': {
      color: 'purple.600',
    },
  }

  return (
    <Box>


      <Heading my="24px" fontSize="3xl">
        Lifetime lottery tickets
      </Heading>
      {/* make 3 buttons for each buy ticket function 
      * create a contract for that buttons
      * sell start before launching the token
      * so you need to make lotteryHoldersAmount external function
      * than you can make the lottery out of the contract 
      * make a function to move money to management contract
      */}

      <Heading fontSize="2xl">
        3 types of lottery tickets:
      </Heading>
      <Text>
        5% lottery miner A (max 690) price: 2.1BNB
      </Text>
      <Text>
        5% lottery miner B (max 6,900) price: 0.21BNB
      </Text>
      <Text>
        5% lottery miner C (max 69,000) price: 0.021BNB
      </Text>
      <Text>
        5% miner lottery require address once bought founder ticket  (infinite) price: 0.021BNB
      </Text>
      <Text mb="24px">
        1% miner lottery require address once bought token (infinite)
      </Text>




      <Divider />
      <SimpleGrid columns={2} spacing={10} minChildWidth="250px" bg="grey.50" >
        <Box>
          <LotteryComp
            header="LuckyTribe miner A"
            body="1% share (max 690) price: 2.1BNB"
            footer="Buy" />
        </Box>

        <Box>
          <LotteryComp
            header="LuckyTribe Lottery x1 winner"
            body="1% share (max tickets 7) price: 0.021BNB"
            footer="Buy" />
        </Box><Box >
          <LotteryComp
            header="LuckyTribe Lottery x1 winner"
            body="1% share (max tickets 77) price: 0.021BNB"
            footer="Buy" />
        </Box><Box>
          <LotteryComp
            header="LuckyTribe Lottery x1 winner"
            body="1% share (max tickets 777) price: 0.021BNB"
            footer="Buy" />
        </Box><Box>
          <LotteryComp
            header="LuckyTribe Lottery x1 winner"
            body="1% share (max tickets 7,777) price: 0.021BNB"
            footer="Buy" />
        </Box><Box>
          <LotteryComp
            header="LuckyTribe Lottery x1 winner"
            body="1% share (max tickets 77,777) price: 0.021BNB"
            footer="Buy" />
        </Box>

        <Box><LotteryComp
          header="LuckyTribe Lottery x10 winners"
          body="1% share (max tickets 7) price: 0.021BNB"
          footer="Buy" />
        </Box><Box >
          <LotteryComp
            header="LuckyTribe Lottery x10 winners"
            body="1% share (max tickets 77) price: 0.021BNB"
            footer="Buy" />
        </Box><Box>
          <LotteryComp
            header="LuckyTribe Lottery 777 x10 winners"
            body="1% share (max tickets 777) price: 0.021BNB"
            footer="Buy" />
        </Box><Box>
          <LotteryComp
            header="LuckyTribe Lottery 7777 x10 winners"
            body="1% share (max tickets 7,777) price: 0.021BNB"
            footer="Buy" />
        </Box><Box>
          <LotteryComp
            header="LuckyTribe Lottery 77777 x10 winners x10 tickets"
            body="1% share (max tickets 77,777) price: 0.021BNB"
            footer="Buy" />
        </Box>

        <Box><LotteryComp
          header="LuckyTribe Lottery 7 x1 winner"
          body="1% share (max tickets 7) price: 0.003BNB"
          footer="Buy" />
        </Box><Box >
          <LotteryComp
            header="LuckyTribe Lottery 77 x10 winner"
            body="1% share (max tickets 77) price: 0.003BNB"
            footer="Buy" />
        </Box><Box>
          <LotteryComp
            header="LuckyTribe Lottery 777 x100 winner"
            body="1% share (max tickets 777) price: 0.03BNB"
            footer="Buy" />
        </Box><Box>
          <LotteryComp
            header="LuckyTribe Lottery 7777 x100 winner"
            body="1% share (max tickets 7,777) price: 0.3BNB"
            footer="Buy" />
        </Box><Box>
          <LotteryComp
            header="LuckyTribe Lottery 77777 x100 winner x100 tickets"
            body="1% share (max tickets 77,777) price: 0.01BNB"
            footer="Buy" />
        </Box>

      </SimpleGrid>
    </Box>
  )
}
