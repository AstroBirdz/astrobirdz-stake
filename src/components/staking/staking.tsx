import Stakebox from "./stakebox"
import Tierbox from "./tierbox"
import abzbglogo from '../../images/abzbglogo.png'
import { useStake } from "callbacks/useStake"
import { DoubleBorderSpinner } from "react-fancy-loader";


const Staking = () => {
    const { stakes, earn, isLoading, create, withDraw, reward } = useStake()

    return (
        <div className="container-fluid">
            <img src={abzbglogo} className="w-50 abz-bg" alt="..."></img>
            {isLoading ? (
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
            )}
            <div className="row mt-4 pb-5">
                <div className="col-lg-6 offset-lg-3">
                    <Stakebox create={create} />
                </div>
            </div>
            <div className="row">
                {/* <div className="col-lg-4"> */}
                {!stakes.length || isLoading ? null : <>
                    {stakes.map((stake, ind) => {
                        return (
                            <div className="col-lg-4">
                                <Tierbox
                                    stake={stake}
                                    earn={earn}
                                    key={ind}
                                    index={ind}
                                    withDraw={withDraw}
                                    reWard={reward}
                                />
                            </div>
                        )
                    })}
                </>}
                {/* </div> */}
            </div>
        </div>
    )
}
export default Staking