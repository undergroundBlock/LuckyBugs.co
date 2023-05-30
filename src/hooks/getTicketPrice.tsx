import { ethers } from 'ethers'
import { useContractCall } from '@usedapp/core'
import simpleContractAbi from '../abi/SimpleContract.json'
import { contract } from '.'
// import contract

const simpleContractInterface = new ethers.utils.Interface(simpleContractAbi)

export function useCount() {
    const [count]: any = useContractCall({
        abi: simpleContractInterface,
        address: contract,
        method: 'count',
        args: [],
    }) ?? []
    return count
}