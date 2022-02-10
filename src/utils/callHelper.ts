import BigNumber from 'bignumber.js'
import { astroStakes } from 'config/types/astroStakes';
import { IBEP20 } from 'config/types/IBEP20';
import { getstakeAddress } from './addressHelper';


export const approve = (contract: IBEP20, amount: BigNumber, account: string) => {
    return contract.methods.approve(getstakeAddress(), amount.toFixed()).send({ from: account })
}
export const tokenBalance =(contract: IBEP20,account: string)=>{
    return contract.methods.balanceOf(account).call();
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
export const addStake = async (contract: any, amount: BigNumber, configId: number, account: string) => {
    return contract.methods.stake(amount, configId).send({ from: account })
}
export const withDrawStake = async (contract: any, amount: BigNumber, stakeID: number, account: string) => {
    return contract.methods.withdraw(amount, stakeID).send({ from: account })
}
export const getReward = async (contract: any, stakeID: number, account: string) => {
    return contract.methods.getReward(stakeID).send({ from: account })
}
export const earnAmount = async (contract: any, acount: string, index: number) => {
    return contract.methods.earned(acount, index).call();
}