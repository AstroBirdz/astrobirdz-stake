import React, { FC, useMemo, useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, FormFeedback } from 'reactstrap';
import { isFinite, isNil, toFinite, isEmpty } from 'lodash'
import { validateSingle } from 'utils/validate';
import abzbird from '../../images/astrologo.png';
import { useStake } from 'callbacks/useStake';
import { formatBN, formatDuration } from 'utils/formatters';
import { useToken } from 'hooks/useToken';
import { DoubleBorderSpinner } from "react-fancy-loader";
import web3 from 'web3';
import BigNumber from 'bignumber.js'
import { utils } from 'ethers'
import { toBigNumber } from 'utils/converters';

interface props {
    create: (amount, index) => void
}

const Stakebox = ({ create }: props) => {

    const { stakesOption } = useStake()

    const { balance } = useToken()

    const [dropdownOpen, setdropdownOpen] = useState<boolean>(false)
    const [dropdownvalue, setdropdownvalue] = useState<string>("TIME PERIOD")

    const [amount, setAmount] = useState<any>()
    const [index, setIndex] = useState<number>()
    const [amountError, setAmountError] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        if (value && toFinite(value) < 50000) {
            setAmountError("amount should be greater than 50000")
        } else {
            const { value: amount, error } = validateSingle(value, 'BigNumber');
            if (error) {
                setAmountError(error)
            } else {
                setAmountError(null)
                setAmount(amount)
            }
        }
    }
    const valid = useMemo(() => isEmpty(amountError) && amount && (index + 1), [amountError, amount, index])
    const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        if (amount) create(amount, index)
    }

    return (
        <div className="border-box p-3 p-sm-4 mb-3 mb-lg-0">
            <div className="d-flex justify-content-between align-items-center">
                <i className="fal fa-arrow-left text-white" style={{ fontSize: '20px', cursor: 'pointer' }}></i>
                <p className="text-white h4">Stake</p>
                <span></span>
                {/* <i className="fal fa-question-circle  text-white" style={{ fontSize: '20px', cursor: 'pointer' }}></i> */}
            </div>
            <div className="border-box p-3 my-4 text-white">
                <div className="form-group d-flex justify-content-between align-items-start">
                    <label htmlFor="numb" className="text-grey-color mb-3">Input</label>
                    <p className="mb-0 text-grey-color">Balance : {formatBN(toBigNumber(balance))}</p>
                </div>
                <div className="d-flex justify-content-between align-items-start">
                    <input
                        type="number"
                        className="form-control text-grey-color bg-transparent"
                        id="numb"
                        placeholder="0.0"
                        onChange={onChange}
                    />
                    <p className="mb-0 text-white"><img src={abzbird} className='abzbird-stake mr-2' alt="..."></img>ABZ</p>
                </div>
                {amountError ? <div style={{ color: 'red' }}>{amountError}</div> : null}
            </div>
            <div className="my-4 text-white d-flex align-items-end">
                {/* <span className="border-box py-2 px-2">
                    <i className="far fa-minus text-grey-color pointer pr-3"
                        onClick={() => {
                            // onChange(count - 1, 'duration', 'number')
                            setCount(count - 1)
                        }} />
                    {count < 0 ? 0 : count}
                    <i className="far fa-plus text-grey-color pointer pl-3"
                        onClick={() => {
                            // onChange(count + 1, 'duration', 'number')
                            setCount(count + 1)
                        }} />
                </span> */}
                <div className='dropdown-stake ml-2'>
                    <Dropdown isOpen={dropdownOpen} toggle={() => setdropdownOpen(!dropdownOpen)}>
                        <DropdownToggle caret>
                            {dropdownvalue}
                        </DropdownToggle>
                        <DropdownMenu>
                            {isEmpty(stakesOption) ? null : <>
                                {stakesOption.map((option, ind) => {
                                    return <DropdownItem key={ind} onClick={() => { setIndex(ind); setdropdownvalue(`${parseInt(option.apy) / 100}% apy ${formatDuration(parseInt(option.time) * 1000)}`) }}>{parseInt(option.apy) / 100}% apy {formatDuration(parseInt(option.time) * 1000)}</DropdownItem>
                                })}
                            </>}
                        </DropdownMenu>
                        {/* <DropdownItem onClick={() => setdropdownvalue('Year')}>Year</DropdownItem>
                            <DropdownItem onClick={() => setdropdownvalue('Months')}>Months</DropdownItem> */}
                        {/* </DropdownMenu> */}
                    </Dropdown>
                </div>
            </div>
            <p className='mb-0 text-grey-color'><i className="fal fa-question-circle text-grey-color"></i> Read our disclaimer before proceeding</p>
            <div className='border-box p-3 mt-5'>
                <p className='mb-0 text-grey-color'>
                    Note: There is no possibility to UNSTAKE your tokens BEFORE the locking period has ended!
                </p>
            </div>
            <Button
                className="bg-btn-color w-100 py-2 my-5"
                style={{ fontSize: '20px' }}
                disabled={!valid}
                onClick={onSubmit}
            >Stake</Button>
        </div>
    )
}
export default Stakebox