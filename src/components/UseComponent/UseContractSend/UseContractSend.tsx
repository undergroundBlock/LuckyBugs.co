import { utils } from 'ethers'
import { useState } from 'react'
import { BSCTestnet, useContractFunction, useEthers } from '@usedapp/core'
import { Box, Button } from '@chakra-ui/react'
import { contract } from '~/hooks'


type FunctionNameProps = {
  functionName: string
}

export const UseContractSend = (props: FunctionNameProps) => {

  const { account, switchNetwork, activateBrowserWallet } = useEthers()
  const [Busy, setBusy] = useState(false)
  const { state, send } = useContractFunction(contract, props.functionName, {
    transactionName: 'Wrap',
    gasLimitBufferPercentage: 10,
  })

  const handleClick = async () => {
    console.log('setBusy(true)')
    setBusy(true)
    if (!account) {
      await activateBrowserWallet()
      await switchNetwork(BSCTestnet.chainId)
      setBusy(false)
      console.log('setBusy(false)1')
    } else {
      console.log(utils.parseEther('1'))
      if (account) {
        await send()
      } else {
        console.log('now you are connected, try again')
      }
      setBusy(false)
      console.log('setBusy(false)2')
    }
  }

  return (
    <Box alignItems="center" textAlign="center">
      <Button mb={10} colorScheme="purple" isDisabled={Busy} onClick={handleClick}>Buy</Button>
      {/* {state.status === 'None' && <p>None!</p>} */}
      {state.status === 'PendingSignature' && <p>Pending Signature...</p>}
      {state.status === 'Mining' && <p>Transaction is being mined...</p>}
      {state.status === 'Success' && <p>Transaction successful!</p>}
      {state.status === 'Fail' && <p>Transaction failed!</p>}
      {state.status === 'Exception' && <p>Do you have enough funds?</p>}
      {state.status === 'CollectingSignaturePool' && <p>Collecting Signature Pool!</p>}
    </Box>
  )
}