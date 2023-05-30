


// #start dependencies

import { Button, Text, useToast, Box } from '@chakra-ui/react'
import { bsc } from '@wagmi/chains'
import { useAccount, useConnect, useDisconnect, Connector } from 'wagmi'

import { useNetwork, useSwitchNetwork } from 'wagmi'

// #the component
export const ConnectButton = () => {

  const { chain } = useNetwork()
  const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()

  const toast = useToast()

  const { address } = useAccount()
  const { connector: activeConnector, isConnected } = useAccount()
  const { connectAsync, connectors } = useConnect()
  const { disconnect } = useDisconnect()


  const connectClick = async (connector: Connector) => {


    const { account, chain } = await connectAsync({ connector })

    console.log(account + ':' + chain)

    toast({
      title: 'logged in',
      description: 'Successfully logged in',
      duration: 3000,
      isClosable: true,
      status: 'success',
      position: 'top',
    })
  }


  const disconnectClick = async () => {
    disconnect()
    toast({
      title: 'logged out',
      description: 'Successfully logged out',
      duration: 3000,
      isClosable: true,
      status: 'success',
      position: 'top',
    })
  }


  return isConnected ? (
    <Box>
      {chain?.id !== bsc.id && chains.map((x) => (
        <button
          disabled={!switchNetwork || x.id === chain?.id}
          key={x.id}
          onClick={() => switchNetwork?.(x.id)}
        >
          login with {x.name}
          {isLoading && pendingChainId === x.id && ' (switching)'}
        </button>
      ))}

      <Button ml="12px" colorScheme="purple" onClick={disconnectClick}>Logout from </Button>


    </Box>
  )
    : (
      <Box>
        {connectors.map((connector) => {
          const { id, name } = connector
          return <Button colorScheme="purple" onClick={() => connectClick(connector)} key={id}> Login with {name}</Button>
        })}
      </Box>
    )
}

