import { contractAddress, con } from '~/hooks';
import { useEffect, useState } from 'react';
import { useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { Box, Button } from '@chakra-ui/react';
import { parseGwei } from 'viem';
import { useDebounce } from '~/hooks/use-debounce'


// import { useDebounce } from '~/hooks/useDebounce';

type FunctionNameProps = {
  functionName: string;
};

type ContractABI = {
  // Define the ABI structure here based on your contract ABI
  // For example:
  inputs: never[];
  stateMutability: string;
  type: string;
  anonymous?: boolean;
  name?: string;
  outputs?: any[];
};

const contractABI: ContractABI[] = [
  // Define your contract ABI here
];



export const UseContractMint = (props: FunctionNameProps) => {
  const [price, setPrice] = useState<number>(0);

  const debounceSendAmount = useDebounce(price, 500);

  const { data: useContractReadData, isError: useContractReadIsError, isLoading: useContractReadIsLoading } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: 'ticketPrice',
    onSettled: (data: unknown, error: unknown) => {
      const a = (data: unknown) => Number(data);
      setPrice(a(data));
      console.log('Settled1:', { data, error });
    },
  });

  const { refetch, config, error } = usePrepareContractWrite<typeof contractABI, FunctionNameProps['functionName'], number>({
    address: contractAddress,
    abi: contractABI,
    functionName: props.functionName,
    value: price !== 0 ? price : undefined,
    enable: Boolean(price),
    onSettled: (data: unknown, error: unknown) => {
      console.log('Settled2', { data, error });
    },
  });

  const { data: useContractWriteData, isLoading, isSuccess, isError, write } = useContractWrite(config);

  const { data: useWaitForTransactionData } = useWaitForTransaction({
    hash: useContractWriteData?.hash,
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPrice(Number(event.target.value));
  }

  const handleClick = async () => {
    console.log('data:', useContractReadData);
    await refetch();
    write?.();
  };

  useEffect(() => {
    const a = (useContractReadData: unknown) => Number(useContractReadData);
    setPrice(a(useContractReadData));
    refetch();
  }, [useContractReadData]);

  return (
    <Box alignItems="center" textAlign="center">
      <Button mb={10} colorScheme="purple" disabled={!write} onClick={handleClick}>
        Mint ticket
      </Button>
      {isSuccess && price}
      {isLoading && <p>Transaction is being mined...</p>}
      {isSuccess && <p>Transaction successful: {JSON.stringify(useContractWriteData)}</p>}
      {isError && <p>Transaction failed! </p>}
      {error && 'error!'}
    </Box>
  );
};
