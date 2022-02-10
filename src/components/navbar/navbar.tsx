import { connectorLocalStorageKey, ConnectorNames } from 'config/constants/wallets'
import useAuth from 'hooks/useAuth'
import { useActiveWeb3React } from 'hooks/web3'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import '../../App.css'
import abznavlogo from '../../images/astrologo.png'

const Navbar = () => {
    const navigate = useNavigate()

    const { login, logout } = useAuth()
    const { account } = useActiveWeb3React()
    const [dropdownOpen, setdropdownOpen] = useState<boolean>(false)

    return (
        <div>
            <nav className=" navbar navbar-expand-lg navbar-dark bg-transparent py-4">
                <img src={abznavlogo} style={{ width: "100px" }} onClick={() => navigate('/')} className='abznavlogo pointer' alt="..."></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto ml-5">
                        {/* <NavLink end to="/"  className={(navData) => navData.isActive ? "active nav-item nav-link text-white px-3 nav-font" : "nav-item nav-link text-white px-3 nav-font" } >Home</NavLink> */}
                        <NavLink end to="/" className={(navData) => navData.isActive ? "active nav-item nav-link text-white px-3 nav-font" : "nav-item nav-link text-white px-3 nav-font"}>Staking</NavLink>
                    </div>
                    {
                        account ? <>
                            <div className='px-4 py-2 ml-5 ml-lg-0 mt-2 mt-lg-0 bg-btn-color text-white'>{account }</div>
                        </> : <>
                            <Dropdown isOpen={dropdownOpen} toggle={() => setdropdownOpen(!dropdownOpen)}>
                                <DropdownToggle caret className='px-4 py-2 ml-5 ml-lg-0 mt-2 mt-lg-0 bg-btn-color'>
                                    Connect To a Wallet
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={() => {
                                        login(ConnectorNames.Injected);
                                        window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected);
                                    }}> MetaMask </DropdownItem>
                                    <DropdownItem onClick={() => {
                                        login(ConnectorNames.WalletConnect);
                                        window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.WalletConnect);
                                    }}> WalletConnect</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            {/* <Button
                                className='px-4 py-2 ml-5 ml-lg-0 mt-2 mt-lg-0 bg-btn-color'
                                onClick={() => {
                                    login(ConnectorNames.Injected);
                                    window.localStorage.setItem(connectorLocalStorageKey, ConnectorNames.Injected);
                                }}>Connect To a Wallet </Button> */}
                        </>
                    }
                </div>
            </nav>
        </div>
    )
}
export default Navbar