import { BigNumber } from "ethers"
import { useCallback, useEffect, useState } from "react"
import { getTokenAddress } from "utils/addressHelper"
import { tokenBalance } from "utils/callHelper"
import { useBEP20 } from "./useContract"
import { useActiveWeb3React } from "./web3"



export const useToken = () => {

    const { account } = useActiveWeb3React()
    const tokenContract = useBEP20(getTokenAddress())

    const [balance, setBalance] = useState<string>()

    const getBalance = useCallback(
        async (_account:string) => {
            const temp = await tokenBalance(tokenContract, _account)
            setBalance(temp)
        }, [tokenContract,account])

    useEffect(() => {
        if (account) getBalance(account)
    }, [account])

    return {balance}
}