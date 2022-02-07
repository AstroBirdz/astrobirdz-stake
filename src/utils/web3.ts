import Web3 from 'web3'
import { HttpProviderOptions } from 'web3-core-helpers'
import getRpcUrl from 'utils/getRpcUrl'

const RPC_URL = getRpcUrl()
const timeout = 10000
const httpProvider = new Web3.providers.HttpProvider(RPC_URL,timeout as HttpProviderOptions)
const web3NoAccount = new Web3(httpProvider)

const getWeb3NoAccount = () => {
  return web3NoAccount
}

export { getWeb3NoAccount }
export default web3NoAccount
