import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { WagmiProvider } from './WagamiContext'
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiProvider>
      <ChakraProvider >
        <App />
      </ChakraProvider>
    </WagmiProvider>
  </React.StrictMode >,
)
