import { contractAddress, contractABI } from '~/hooks'
import { useEffect, useState } from 'react'
import { useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { Box, Button, Text } from '@chakra-ui/react'
import { parseGwei } from 'viem' //parseEther,

import {useDebounce} from '~/hooks/useDebounce'



type FunctionNameProps = {
  functionName: string,
}


export const UseContractMint = (props: FunctionNameProps) => {

  const [price, setPrice] = useState<number>(0)
  const debounceSendAmount = useDebounce(price, 500);

  const [contractString, setContract] = useState('')


  const { data: useContractReadData, isError: useContractReadIsError, isLoading: useContractReadIsLoading, status } = useContractRead({
    address: contractAddress,
    abi: contractABI.abi,
    functionName: 'ticketPrice',
    onSettled(data: unknown, error: unknown) {
      const a = (data: unknown) => Number(data);
      setPrice(a(data));
      console.log('Settled1:', { data, error });
    },
    
    // value: parseEther(price),
  })



  const { refetch, config, error } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI.abi,
    functionName: props.functionName,
    // value: price !== 0 ? debounceSendAmount : undefined,
    // enable: Boolean(price),
    // gasPrice: parseGwei('20'),
    onSettled(data: unknown, error: unknown) {
      console.log('Settled2', { data, error });
    },
    enabled: Boolean(debounceSendAmount),

  })

  const { data: useContractWriteData, isLoading, isSuccess, isError, write } = useContractWrite(config)

  const { data: useWaitForTransactionData } = useWaitForTransaction({
    hash: useContractWriteData?.hash,
  })

  function handleChange(event: any) {
    setPrice(event.target.value)
  }

  const handleClick = async () => {
    console.log('data:' + useContractReadData)
    await refetch()    
    write?.()
  }

  useEffect(() => {
    console.log('useContractWriteData: ' + useContractWriteData)
    console.log('useContractReadData: ' + useContractReadData)
    console.log('price:' + price)
    const a = (useContractReadData: unknown) => Number(useContractReadData)
    setPrice(a)
    refetch()

  },[useContractWriteData, useContractReadData, price] )

  return (
    <Box alignItems="center" textAlign="center">
      <Button mb={10} colorScheme="purple" disabled={!write} onClick={() => handleClick}>Mint ticket</Button>
      <Text>price: {price}</Text>
      {isLoading && <p>Transaction is being mined...</p>}
      {isSuccess && <p>Transaction successful: {JSON.stringify(useContractWriteData)}</p>}
      {isError && <p>Transaction failed! </p>}
      {error && 'error!'}
    </Box >
  )
}