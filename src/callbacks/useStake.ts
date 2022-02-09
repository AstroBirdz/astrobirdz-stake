import { useBEP20, useStakingContract } from "hooks/useContract"
import { useActiveWeb3React } from "hooks/web3"
import { useCallback, useEffect, useState } from "react"
import { getTokenAddress } from "utils/addressHelper"
import { addStake, getReward, withDrawStake, configureLocks, approve, accountStake } from "utils/callHelper"


interface durationOptions {
    time: string,
    apy: string
}
export interface IStake {
    active: boolean,
    apy: string,
    currentRewards: string,
    lastUpdated: string,
    stake: string,
    started: string,
    unlock: string,
    withdrawnRewards: string,
}

export const useStake = () => {

    const { account } = useActiveWeb3React()
    const stakecontract = useStakingContract()

    const tokenContract = useBEP20(getTokenAddress())

    const [stakes, setStakes] = useState<Partial<IStake[]>>([])
    const [earn, setEarn] = useState<any>([])
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
                let temp = await accountStake(stakecontract, _account, false)
                setStakes(temp.stakes)
                setEarn(temp.stakesEarned)
            } catch (error) {
                // alert((error as any).message)
            } finally {
                setLoading(false)
            }
        }, [stakecontract])

    useEffect(() => {
        if (account) getStakes(account)
        configLock()
    }, [account, getStakes, configLock])

    const create = useCallback(
        async (amount, configureLock) => {
            if (account) {
                const tx = await approve(tokenContract, amount, account)
                if (tx.status) {
                    let txStake = await addStake(stakecontract, amount, configureLock, account)
                    if (txStake.status) getStakes(account)
                }
            } else {
                alert('please connect wallet')
            }
        }, [stakecontract])

    const withDraw = useCallback(
        async (amount, stakeID) => {
            const tx = await withDrawStake(stakecontract, amount, stakeID, account)
            if (tx.status) getStakes(account)
        }, [stakecontract])

    const reward = useCallback(
        async (stakeID) => {
            const tx = await getReward(stakecontract, stakeID, account)
            if (tx.status) getStakes(account)
        }, [stakecontract])

    return { isLoading, stakesOption, stakes, create, withDraw, reward }
}