import { contractAddress, contractABI } from '~/hooks'
import { useEffect, useState } from 'react'
import { useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { Box, Button, Input } from '@chakra-ui/react'
import { parseEther, parseGwei } from 'viem'



type FunctionNameProps = {
  functionName: string
}

export const UseContractMint = (props: FunctionNameProps) => {

  const [price, setPrice] = useState('')
  // const [price2, setPrice2] = useState('')

  const { data: useContractReadData, isError: useContractReadIsError, isLoading: useContractReadIsLoading, status } = useContractRead({
    address: contractAddress,
    abi: contractABI.abi,
    functionName: 'maxTickets',
    // value: parseEther(price),
  })



  const { config, error } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI.abi,
    functionName: props.functionName,
    gasPrice: parseGwei('20'),
  })

  const { data: useContractWriteData, isLoading, isSuccess, isError, write } = useContractWrite(config)

  const { data: useWaitForTransactionData } = useWaitForTransaction({
    hash: useContractWriteData?.hash,
  })


  // const handleClick = async () => {
  //   console.log('data:' + useContractReadData)

  //   if (!isError && !isLoading) {
  //     console.log(useContractReadData)
  //   }

  // }

  useEffect(() => {
    console.log('useContractWriteData: ' + useContractWriteData)
    console.log('useWaitForTransactionData: ' + useWaitForTransactionData)
    // setPrice(useContractReadData)

  }, [useContractWriteData, useWaitForTransactionData])

  return (
    <Box alignItems="center" textAlign="center">
      <Input
        type="text"
        placeholder="SDSD"
        name="useContractReadData"
        onChange={(e) => setPrice(e.target.value)} />

      <Button mb={10} colorScheme="purple" onClick={() => write?.()}>Mint ticket</Button>
      {isLoading && <p>Transaction is being mined...</p>}
      {isSuccess && <p>Transaction successful: {JSON.stringify(useContractWriteData)}</p>}
      {isError && <p>Transaction failed! </p>}
      {error && 'error!'}

    </Box >
  )
}