import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
    getstakeContract,
    getBep20Contract
} from 'utils/contractHelper'

export const useBEP20 = (address: string) => {
    const web3 = useWeb3()
    return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

export const useStakingContract = () => {
    const web3 = useWeb3()
    return useMemo(() => getstakeContract(web3), [web3])
}