import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import web3NoAccount from 'utils/web3'

//addresses

import { getstakeAddress } from '../utils/addressHelper'

// ABI
import bep20Abi from 'config/abi/IBEP20.json'
import stakingAbi from 'config/abi/AstroBirdzStaking.json'

//types
import { IBEP20 } from 'config/types/IBEP20'
import { astroStakes } from 'config/types/astroStakes'

const getContract = ( address: string, abi: any, web3?: Web3) => {
    const _web3 = web3 ?? web3NoAccount
    return new _web3.eth.Contract(abi as unknown as AbiItem[], address)
}

export const getBep20Contract = (address: string, web3?: Web3) => {
    return getContract( address,bep20Abi, web3) as unknown as IBEP20
  }
export const getstakeContract = (web3?: Web3) => {
    return getContract( getstakeAddress(), stakingAbi, web3) as unknown as astroStakes
}
