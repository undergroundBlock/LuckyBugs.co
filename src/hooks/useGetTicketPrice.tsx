import { utils } from 'ethers'
import { useContractFunction, useEtherBalance, useEthers } from '@usedapp/core'
// import { getContract } from '~/hooks/getContract'
// import { contractAddress, contractABI } from '~/contract/contract'
import { Box, Button } from '@chakra-ui/react'
import { contract } from '~/hooks'
import { formatEther } from 'ethers/lib/utils'


const useAddMessage = () => {

    const { state, send, event } = useContractFunction(
        contract,
        'addMessage',
        {}
    );
    return { state, send, event };
};

// export const useGetTicketPrice = () => {
//     formatedPrice =

//     return formatedPrice
// }ticketPrice

export const useGetTicketPrice = () => {
    const { state, send } = useContractFunction(contract, 'ticketPrice')
    return { state, send }
}

export function GetValue(props: FunctionNameProps) {
    const { state, send } = useContractFunction(contract, props.functionName, { transactionName: '' })
    return { state, send }
}
