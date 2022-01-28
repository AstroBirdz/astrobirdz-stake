import React, { FC,useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,Button} from 'reactstrap';
import abzbird from '../../images/birdlogo.png'


const Stakebox:FC=()=>{
    const [dropdownOpen,setdropdownOpen]=useState<boolean>(false)
    const [dropdownvalue,setdropdownvalue]=useState<string>('Year')
    return(
        <div className="border-box p-3 p-sm-4 mb-3 mb-lg-0">
            <div className="d-flex justify-content-between align-items-center">
                <i className="fal fa-arrow-left text-white" style={{fontSize:'20px',cursor:'pointer'}}></i>
                <p className="text-white h4">Stake</p>
                <i className="fal fa-question-circle  text-white" style={{fontSize:'20px',cursor:'pointer'}}></i>
            </div>
            <div className="border-box p-3 my-4 text-white">
                <div className="form-group d-flex justify-content-between align-items-start">
                  <label htmlFor="numb" className="text-grey-color mb-3">Input</label>
                    <p className="mb-0 text-grey-color">Balance : 0</p>
                </div>
                <div className="d-flex justify-content-between align-items-start">
                    <input type="number" className="form-control text-grey-color bg-transparent" id="numb" placeholder="0.0"/>
                    <p className="mb-0 text-white"><img src={abzbird} className='abzbird-stake mr-2' alt="..."></img>ABZ</p>
                </div>
            </div>
            <div className="my-4 text-white d-flex align-items-end">
                <span className="border-box py-2 px-2">
                    <i className="far fa-minus text-grey-color pointer pr-3"></i>
                    0
                    <i className="far fa-plus text-grey-color pointer pl-3"></i>
                </span>
                <div className='dropdown-stake ml-2'>
                    <Dropdown isOpen={dropdownOpen} toggle={()=>setdropdownOpen(!dropdownOpen)}>
                        <DropdownToggle caret>
                            {dropdownvalue}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={()=>setdropdownvalue('Year')}>Year</DropdownItem>
                          <DropdownItem onClick={()=>setdropdownvalue('Months')}>Months</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <p className='mb-0 text-grey-color'><i className="fal fa-question-circle text-grey-color"></i> Read our term & condition before proceeding</p>
            <div className='border-box p-3 mt-5'>
                <p className='mb-0 text-grey-color'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <Button className="bg-btn-color w-100 py-2 my-5" style={{fontSize:'20px'}}>Stake</Button>
        </div>
    )
}
export default Stakebox