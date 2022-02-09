import { useBEP20, useStakingContract } from "hooks/useContract"
import { useActiveWeb3React } from "hooks/web3"
import { useCallback, useEffect, useState } from "react"
import { getTokenAddress } from "utils/addressHelper"
import { addStake, getReward, getuserStakes, withDrawStake, configureLocks, approve } from "utils/callHelper"


interface durationOptions {
    time: string,
    apy: string
}

export const useStake = () => {

    const { account } = useActiveWeb3React()
    const stakecontract = useStakingContract()

    const tokenContract = useBEP20(getTokenAddress())

    const [stakes, setStakes] = useState([])
    const [stakesOption, setStakeOption] = useState<Partial<durationOptions[]>>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    const configLock = useCallback(
        async () => {
            let n: number = 0;
            let temp: typeof stakesOption = [];
            while (n < 5) {
                temp[n] = await configureLocks(stakecontract, n);
                n++;
            }
            setStakeOption(temp)
        }, [stakecontract])

    const getStakes = useCallback(
        async (_account: string) => {
            setLoading(true)
            try {
                const userStake = await getuserStakes(stakecontract, _account);
                setStakes(userStake)
            } catch (error) {
                alert((error as any).message)
            } finally {
                setLoading(false)
            }
        }, [stakecontract])

    useEffect(() => {
        // if (account) getStakes(account)
        configLock()
    }, [account, getStakes, configLock])

    const create = useCallback(
        async (amount, configureLock) => {
            if(account){
                const tx = await approve(tokenContract, amount, account)
                if (tx.status) await addStake(stakecontract, amount, configureLock, account)
            }else{
                alert('please connect wallet')
            }
        }, [stakecontract])

    const withDraw = useCallback(
        async (amount, stakeID) => {
            const abc = await withDrawStake(stakecontract, amount, stakeID, account)
        }, [stakecontract])

    const reward = useCallback(
        async (stakeID) => {
            const abc = await getReward(stakecontract, stakeID, account)
        }, [stakecontract])

    return { isLoading, stakesOption, stakes, create, withDraw, reward }
}