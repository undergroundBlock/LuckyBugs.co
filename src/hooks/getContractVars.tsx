import { Contract, ethers, utils, getDefaultProvider } from 'ethers'
import { } from 'ethers'

export const getContract = (contractAddress: string, abi: any) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const contract = new Contract(contractAddress, abi, signer)

  return contract
}