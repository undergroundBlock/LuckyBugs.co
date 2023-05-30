// import React, { useEffect } from 'react'
// import { useEthers, useContractFunction, useContractEvent } from '@usedapp/core'
// import { ethers } from 'ethers'
// import { Box } from '@chakra-ui/react';

// interface MyComponentProps {
//     contractAddress: string;
//     contractABI: any[];
//     mappingKey: string;
//     mappingName: string;
// }

// export const Web3: (props: MyComponentProps) => {

// const { account } = useEthers()
// const { provider } = new ethers.providers.Web3Provider(window.ethereum)
// const signer = provider.getSigner()

// const contractAddress = '0x123456789...'; // Replace with your contract's address
// const contractABI = props.contractABI // Replace with your contract's ABI

// const contract = new ethers.Contract(contractAddress, contractABI, signer)

// const events = useContractEvent(contract, 'yourEventName', {
//     fromBlock: 0, // Replace with the starting block number to fetch events from
//     toBlock: 'latest', // Replace with the ending block number or 'latest'
// });


// // const { account } = useEthers()
// // const provider = new ethers.providers.Web3Provider(window.ethereum)
// // const signer = provider.getSigner()

// // const contract = new ethers.Contract(props.contractAddress, props.contractABI, signer)

// const { state: mappingValue, send: fetchMappingValue } = useContractFunction(contract, props.mappingName)

// // useEffect(() => {
// //     if (account && props.mappingKey) {
// //         fetchMappingValue(props.mappingKey)
// //     }
// // }, [account, props.mappingKey, fetchMappingValue])

// return (
//     <Box>
//         <h1>Mapping Value: {mappingValue}</h1>

//         <div>
//             <h1>Marketplace Events</h1>
//             {events.map((event, index) => (
//                 <div key={index}>
//                     <p>Event Details:</p>
//                     <p>Event Name: {event.event}</p>
//                     <p>Event Data: {JSON.stringify(event.args)}</p>
//                 </div>
//             ))}
//         </div>
//     </Box>
// )
// }

