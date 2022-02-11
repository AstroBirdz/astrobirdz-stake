/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import BigNumber from 'bignumber.js'
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
    Callback,
    PayableTransactionObject,
    NonPayableTransactionObject,
    BlockType,
    ContractEventLog,
    BaseContract,
} from "./types";

export interface EventOptions {
    filter?: object;
    fromBlock?: BlockType;
    topics?: string[];
}

export interface astroStakes extends BaseContract {
    constructor(
        jsonInterface: any[],
        address?: string,
        options?: ContractOptions
    ): astroStakes;
    clone(): astroStakes;

    methods: {
        initialize(_stakingToken: string, _rewardsToken: string): NonPayableTransactionObject<void>

        configuredLocks(index: number): NonPayableTransactionObject<any | null>

        allAccountStakes(
            creator: string,
            index: number
        ): NonPayableTransactionObject<{
            active: boolean,
            apy: string,
            currentRewards: string,
            lastUpdated: string,
            stake: string,
            started: string,
            unlock: string,
            withdrawnRewards: string,
            0: boolean,
            1: string,
            2: string,
            3: string,
            4: string,
            5: string,
            6: string,
            7: string,
        } | null>

        allConfiguredLocks(): NonPayableTransactionObject<{
            time: string,
            apy: string,
            0: string,
            1: string
        }[]>

        accountStakes(creator: string, addEarned: boolean): NonPayableTransactionObject<{
            stakes: {
                active: boolean,
                apy: string,
                currentRewards: string,
                lastUpdated: string,
                stake: string,
                started: string,
                unlock: string,
                withdrawnRewards: string,
                0: boolean,
                1: string,
                2: string,
                3: string,
                4: string,
                5: string,
                6: string,
                7: string,
            }[],
            stakesEarned: string[]
        } | null>

        stake(amount: number | BN | string, index: number): NonPayableTransactionObject<void>

        updateReward(account: string, index: number): NonPayableTransactionObject<void>

        withdraw(amount: number | BN | string, index: number): NonPayableTransactionObject<void>

        getReward(index: number): NonPayableTransactionObject<void>

        exit(index: number): NonPayableTransactionObject<void>

        getAllRewards(): NonPayableTransactionObject<void>

        exitUnlocked(): NonPayableTransactionObject<void>

        updateStartTime(startTime: number): NonPayableTransactionObject<void>

        updateConfiguredLock(index: number, time: number, apy: number): NonPayableTransactionObject<void>

        updateConfiguredLocks(locks: string[]): NonPayableTransactionObject<void>

        earned(acount: string, index: number): NonPayableTransactionObject<string>
    }
}