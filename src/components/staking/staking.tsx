import Stakebox from "./stakebox"
import Tierbox from "./tierbox"
import abzbglogo from '../../images/abzbglogo.png'


const Staking =()=>{
    return(
        <div className="container-fluid">
            <img src={abzbglogo} className="w-50 abz-bg" alt="..."></img>
            <div className="row mt-4 pb-5">
                <div className="col-lg-4 offset-lg-1">
                   <Stakebox></Stakebox>
                </div>
                <div className="col-lg-5 offset-lg-1">
                    <Tierbox></Tierbox>
                    <Tierbox></Tierbox>
                </div>
            </div>
        </div>
    )
}
export default Staking