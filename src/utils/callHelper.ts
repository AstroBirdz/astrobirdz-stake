import BigNumber from 'bignumber.js'
import { astroStakes } from 'config/types/astroStakes';
import { IBEP20 } from 'config/types/IBEP20';
import { getstakeAddress } from './addressHelper';


export const approve =(contract: IBEP20,amount: BigNumber,account:string)=>{
    return contract.methods.approve(getstakeAddress(),amount.toFixed()).send({from:account})
}

export const configureLocks = async (contract: astroStakes ,index:number) => {
    return contract.methods.configuredLocks(index).call();
}
export const getuserStakes = async (contract: astroStakes, account: string) => {
    return contract.methods.allAccountStakes(account).call();
}
export const addStake = async (contract: any, amount: BigNumber, configId: number, account: string) => {
    return contract.methods.stake(amount, configId).send({ from: account })
}
export const withDrawStake = async (contract: any, amount: BigNumber, stakeID: number, account: string) => {
    return contract.methods.withDraw(amount, stakeID).send({ from: account })
}
export const getReward = async (contract: any, stakeID: number, account: string) => {
    return contract.methods.getReward(stakeID).send({ from: account })
}