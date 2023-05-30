import { contractAddress } from '~/hooks'
import { useEffect } from 'react'
import { useContractRead } from 'wagmi'
import ABI from '~/contract/contract.json'



// type FunctionNameProps = {
//   functionName: string
// }


// ### 2 data to get from comtract
// # get current ticket price #ticketPrice()
// # buy ticket #firstPurchaseTicket()

export const UseContractRead = () => {

  // const [value, setValue] = useState('0')

  const { data: useContractReadData, isError, isLoading, status } = useContractRead({
    address: contractAddress,
    abi: ABI.abi,
    functionName: 'societyBalance',
  })

  useEffect(() => {
    console.log('useContractReadData: ' + useContractReadData)
    if (!isError && !isLoading) {
      console.log(useContractReadData)

    }
  }, [useContractReadData, isError, isLoading])

  return (useContractReadData)

  // (
  // <Box alignItems="center" textAlign="center">

  //   <Button mb={10} colorScheme="purple" onClick={handleClick}>sss</Button>
  //   {status === 'idle' && <p>Pending Signature...</p>}
  //   {status === 'loading' && <p>Transaction is being mined...</p>}
  //   {status === 'success' && <p>Transaction successful</p>}
  //   {status === 'error' && <p>Transaction failed!</p>}
  // </Box>
  // )
}