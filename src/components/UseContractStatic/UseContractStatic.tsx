// import { ethers } from 'ethers'
import { useContractFunction } from '@usedapp/core'
import { contractAddress, contractABI } from '~/contract/contract'
import { Box, Button } from '@chakra-ui/react'
import { contract } from '~/hooks'


type FunctionNameProps = {
  functionName: string
}

export const UseContractStatic = (props: FunctionNameProps) => {


  // const { library } = useEthers()
  // const YSocietyContract = getContract(contractAddress, contractABI)
  // const { state, send } = useContractFunction(YSocietyContract, props.functionName)
  const { state, send } = useContractFunction(contract, 'deposit', {
    transactionName: props.functionName,
    gasLimitBufferPercentage: 10,
  })

  const handleClick = async () => {
    send()
  }

  return (
    <Box alignItems="center" textAlign="center">
      <Button mb={10} colorScheme="purple" onClick={handleClick}>Buy</Button>
      {/* {state.status === 'None' && <p>None!</p>} */}
      {state.status === 'PendingSignature' && <p>Pending Signature...</p>}
      {state.status === 'Mining' && <p>Transaction is being mined...</p>}
      {state.status === 'Success' && <p>Transaction successful!</p>}
      {state.status === 'Fail' && <p>Transaction failed!</p>}
      {state.status === 'Exception' && <p>Exception!</p>}
      {state.status === 'CollectingSignaturePool' && <p>Collecting Signature Pool!</p>}
    </Box>
  )
}