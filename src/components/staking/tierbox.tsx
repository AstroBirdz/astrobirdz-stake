import {Button} from 'reactstrap'
import abzbird from '../../images/birdlogo.png'
const Tierbox=()=>{
    return(
        <div className="border-box p-2 p-sm-3 mb-3">
            <div className='d-flex justify-content-between align-items-center border-bottom-tier pb-2'>
                <div className='text-white'><p className='mb-0 h5'><img className='abzbird mr-2' src={abzbird} alt="..."></img> Tier 1</p></div>
                <Button className='bg-btn-color py-1 px-4'>Withdraw</Button>
            </div>
            <div className='my-3 border-bottom-tier pb-1'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-grey-color'>Staked Amount</p>
                    <p className='mb-2 tier-font text-white'>2000000 $ABZ</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-grey-color'>Staked Duration</p>
                    <p className='mb-2 tier-font text-white'>1 Year</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-grey-color'>Withdraw TimeFrame</p>
                    <p className='mb-2 tier-font text-white'>20 July,2023 6:17:20</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-grey-color'>APY</p>
                    <p className='mb-2 tier-font text-white'>15%</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-2 tier-font text-grey-color'>Reward Amount</p>
                    <p className='mb-2 tier-font text-white'>3000000 $ABZ</p>
                </div>
            </div>
            <p className='mb-0 text-white text-center tier-font'>Tier 1 earns 15% APY + 1 Egg + 1 Mystery Box</p>

        </div>
    )
}
export default Tierbox