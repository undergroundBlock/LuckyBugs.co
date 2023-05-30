
import { useContractFunction } from '@usedapp/core'
import { contract } from '~/hooks'

type FunctionNameProps = {
    functionName: string
}

export function GetValue(props: FunctionNameProps) {
    const { state, send } = useContractFunction(contract, props.functionName, { transactionName: '' })
    return { state, send }
}

export function SetValue(props: FunctionNameProps) {
    const { state, send } = useContractFunction(contract, props.functionName, { transactionName: '' })
    return { state, send }
}