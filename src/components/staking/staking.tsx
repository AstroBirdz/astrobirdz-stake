import Stakebox from "./stakebox"
import Tierbox from "./tierbox"
import abzbglogo from '../../images/abzbglogo.png'
import { useStake } from "callbacks/useStake"
import { DoubleBorderSpinner } from "react-fancy-loader";


const Staking = () => {
    const { stakes, isLoading } = useStake()

    return (
        <div className="container-fluid">
            <img src={abzbglogo} className="w-50 abz-bg" alt="..."></img>
            {/* {isLoading ? (
                <div className="d-flex justify-content-between">
                    <DoubleBorderSpinner
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            margin: "auto",
                        }}
                        className="d-flex justify-content-center mt-3"
                        size={100}
                        color="gold"
                        stroke={9}
                        duration={1000}
                    />
                </div>
            ) : (
                <div className="d-flex justify-content-between"></div>
            )} */}
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
                    {!stakes.length || isLoading ? null : <>
                        {stakes.map((stake, ind) => <Tierbox
                            stake={stake}
                            key={ind}
                            index={ind}
                        />)}
                    </>}
                </div>
            </div>
        </div>
    )
}
export default Staking