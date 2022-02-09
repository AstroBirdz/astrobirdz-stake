import Stakebox from "./stakebox"
import Tierbox from "./tierbox"
import abzbglogo from '../../images/abzbglogo.png'
import { useStake } from "callbacks/useStake"


const Staking = () => {
    const { stakes, withDraw, reward } = useStake()

    return (
        <div className="container-fluid">
            <img src={abzbglogo} className="w-50 abz-bg" alt="..."></img>
            <div className="row mt-4 pb-5">
                <div className="col-lg-6 offset-lg-3">
                    <Stakebox />
                </div>
                
                {/* <div className="col-lg-5 offset-lg-1">
                    {!stakes.length ? null : <>
                        {stakes.map((stake, ind) => <Tierbox stake={stake} key={ind} index={ind} withDraw={withDraw} reward={reward} />)}
                    </>}
                </div> */}
            </div>
            <div className="row">
                <div className="col-lg-4">
                    {!stakes.length ? null : <>
                        {stakes.map((stake, ind) => <Tierbox stake={stake} key={ind} index={ind} withDraw={withDraw} reward={reward} />)}
                    </>}
                </div>
            </div>
        </div>
    )
}
export default Staking