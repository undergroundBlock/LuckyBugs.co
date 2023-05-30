import { ReactNode, FC } from 'react'
// import { bsc } from '@wagmi/chains'
import { bscTestnet } from '@wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'


const { chains, publicClient } = configureChains(
  // [bsc],
  [bscTestnet],

  [jsonRpcProvider({
    rpc: (bscTestnet) => ({
      // http: 'https://lively-thrumming-bush.bsc.discover.quiknode.pro/32357f46ffd6de2934cca524b5a2fe323f8b701f/',
      // http: 'https://rpc.ankr.com/bsc_testnet_chapel/2bc93dbee3c19968e57ff35135942d590c7c89041a3e32cff2f673367365d887',
      http: bscTestnet.rpcUrls.default.http[0],
    }),
  }),
  ],
)

const connector: InjectedConnector = new InjectedConnector({
  chains,
  options: {
    name: 'Injected',
    shimDisconnect: true,
  },
})


const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [connector],
})

interface WagmiProviderProps {
  children: ReactNode
}

export const WagmiProvider: FC<WagmiProviderProps> = ({ children }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>
}