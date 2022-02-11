import BigNumber from 'bignumber.js'
import { astroStakes } from 'config/types/astroStakes';
import { IBEP20 } from 'config/types/IBEP20';
import exp from 'constants';
import { getstakeAddress } from './addressHelper';

// token calls

export const tokenBalance =async (contract: IBEP20,account: string)=>{
    return contract.methods.balanceOf(account).call();
}

export const approve = (contract: IBEP20, amount: BigNumber, account: string) => {
    return contract.methods.approve(getstakeAddress(), amount.toFixed()).send({ from: account })
}

export const configureLocks = async (contract: any) => {
    return contract.methods.allConfiguredLocks().call();
}
export const accountStake = (contract: astroStakes, account: string, addEarned: boolean) => {
    return contract.methods.accountStakes(account, addEarned).call();
}
export const getuserStakes = async (contract: astroStakes, account: string, index: number) => {
    return contract.methods.allAccountStakes(account, index).call();
}
export const addStake = async (contract: astroStakes, amount: BigNumber, configId: number, account: string) => {
    return contract.methods.stake(amount.toFixed(), configId).send({ from: account })
}
export const withDrawStake = async (contract: astroStakes, amount: BigNumber, stakeID: number, account: string) => {
    return contract.methods.withdraw(amount.toString(), stakeID).send({ from: account })
}
export const getReward = async (contract: astroStakes, stakeID: number, account: string) => {
    return contract.methods.getReward(stakeID).send({ from: account })
}
export const earnAmount = async (contract: astroStakes, acount: string, index: number) => {
    return contract.methods.earned(acount, index).call();
}