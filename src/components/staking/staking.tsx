import Stakebox from "./stakebox"
import Tierbox from "./tierbox"
import abzbglogo from '../../images/astrologo.png'
import { useStake } from "callbacks/useStake"
import { DoubleBorderSpinner } from "react-fancy-loader";
import { useActiveWeb3React } from "hooks/web3";

let disclaimertable :{tier:number,months:number,apy:number}[] = [
    {
        tier:5,
        months:1,
        apy:5
    },
    {
        tier:4,
        months:3,
        apy:8
    },
    {
        tier:3,
        months:6,
        apy:12
    },
    {
        tier:2,
        months:10,
        apy:18
    },
    {
        tier:1,
        months:24,
        apy:25
    }
]

const Staking = () => {
    const { account } = useActiveWeb3React()
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
                <div className="col-lg-6">
                    <Stakebox create={create} />
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0 px-4 px-lg-5">
                    <p className="text-white mb-5"><span className="text-danger dis-font-weight">Disclaimer: </span> Once you stake there is no possibility to unstake your tokens before the time lock ends! We at Astrobirdz can alter the APY's after re-evaluation if there is a lot of demand. This would have no impact on people who staked with the previous APY but new stakers will get the updated APY. Release of eggs will not be done before the release of the NFT marketplace.</p>
                    <div className="mt-4 table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-white">Tiers</th>
                          <th className="text-white">Months</th>
                          <th className="text-white">APY</th>
                        </tr>
                      </thead>
                      <tbody>
                          {disclaimertable.map((item,index)=>{
                            return(
                                <tr key={index}>
                                  <td className="text-white">{item.tier}</td>
                                  <td className="text-white">{item.months}</td>
                                  <td className="text-white">{item.apy}%</td>
                                </tr>
                            )
                          })}
                      </tbody>
                    </table>
                    </div>
                    <p className="text-white h5 mb-0 mt-3">Min Stake 20,000</p>
                </div>
            </div>
            <div className="row">
                {/* <div className="col-lg-4"> */}
                {!stakes.length || isLoading || !account? null : <>
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