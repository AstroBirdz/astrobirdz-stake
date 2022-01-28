import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import  Navbar  from './components/navbar/navbar'
import Staking  from './components/staking/staking'

const Main=()=>{
    return(
        <div className='main-bg'>
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    {/* <Route path="/" element={<></>}/> */}
                    <Route path="/" element={<Staking></Staking>}/>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default Main 