import './App.global.css'
// import styles from './App.module.css'
import { Navigation } from './components/Navigation'
import { Home } from './components/Home'
import { Marketplace } from './components/Marketplace'
import { Roadmap } from './components/Roadmap'
import { Whitepaper } from './components/Whitepaper'
// import { Footer } from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Sidebar } from './components/Sidebar'
import { Lottery } from './components/Lottery'



export const App = () => {

  return (
    // <MetaMaskContextProvider>
    <Box>
      <BrowserRouter>
        <Grid templateColumns="repeat(6, 1fr)" bg="gray.300">
          <GridItem
            as="aside"
            colSpan={{ base: 6, lg: 2, xl: 1 }}
            bg="purple.400"
            minHeight={{ lg: '100vh' }}
            p={{ base: '20px', lg: '30px' }}>
            <Sidebar />
          </GridItem>
          <GridItem as="main" w="100%" colSpan={{ base: 6, lg: 4, xl: 5 }}
            p="40px">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/lottery" element={<Lottery />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
            </Routes>
          </GridItem>
        </Grid>
      </BrowserRouter>
      {/* <Footer /> */}
    </Box>
  )
}
{/* <MetaMaskError /> */ }
// </MetaMaskContextProvider>

