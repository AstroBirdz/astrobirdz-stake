import { IStake, useStake } from 'callbacks/useStake'
import { Button } from 'reactstrap'
import { formatBN, formatDateTime, formatDuration } from 'utils/formatters'
import abzbird from '../../images/birdlogo.png'

interface ItierBox {
    stake: any,
    index: number,
}

const Tierbox = ({ stake, index }: ItierBox) => {

    const { earn, withDraw, reward } = useStake()
    return (
        <div>
            <div className="border-box p-2 p-sm-3 mb-3">
                <div className='d-flex justify-content-between align-items-center border-bottom-tier pb-2'>
                    <div className='text-white'><p className='mb-0 h5'><img className='abzbird mr-2' src={abzbird} alt="..."></img> Tier {index + 1}</p></div>
                </div>
                <div className='my-3 border-bottom-tier pb-1'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-2 tier-font text-grey-color'>Staked Amount</p>
                        <p className='mb-2 tier-font text-white'>{formatBN(stake.stake)} ABZ</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-2 tier-font text-grey-color'>Staked Started</p>
                        <p className='mb-2 tier-font text-white'>{formatDateTime(stake.started * 1000)}</p>
                    </div>
                    {/* <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-2 tier-font text-grey-color'>Staked Duration</p>
                        <p className='mb-2 tier-font text-white'>{formatDuration(stake.unlock)}</p>
                    </div> */}
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-2 tier-font text-grey-color'>Withdraw TimeFrame</p>
                        <p className='mb-2 tier-font text-white'>{formatDateTime(stake.unlock * 1000)}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-2 tier-font text-grey-color'>APY</p>
                        <p className='mb-2 tier-font text-white'>{parseInt(stake.apy) / 100}%</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-2 tier-font text-grey-color'>currentRewards </p>
                        <p className='mb-2 tier-font text-white'>{formatBN(earn[index])} ABZ</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-2 tier-font text-grey-color'>withdrawn Rewards </p>
                        <p className='mb-2 tier-font text-white'>{stake.withdrawnRewards} ABZ</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-2 tier-font text-grey-color'>last Updated </p>
                        <p className='mb-2 tier-font text-white'>{formatDateTime(stake.lastUpdated * 1000)}</p>
                    </div>
                </div>
                <Button className='bg-btn-color py-1 px-4' onClick={() => withDraw(stake.stake, index)}>Withdraw</Button>
                <Button className='bg-btn-color py-1 px-4' onClick={() => reward(index)}>Get Reward</Button>
                {/* <p className='mb-0 text-white text-center tier-font'>Tier 1 earns 15% APY + 1 Egg + 1 Mystery Box</p> */}
            </div>
            )
        </div>
    )
}
export default Tierbox

