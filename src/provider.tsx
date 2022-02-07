import React from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
// import { Provider } from 'react-redux'
import { getLibrary } from './utils/web3React'
// import { ConfigureStore } from "./redux/configureStore";
import { NetworkContextName } from './config/constants/wallets'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

if ((window as any).ethereum) {
    (window as any).ethereum.autoRefreshOnNetworkChange = true
}

// const store = ConfigureStore();

const APP_ID = "cBUU3yAi7tLIm7puDBXuQ6uPETDlkp8qYqGyxZCG"
const SERVER_URL = 'https://67lxwnlg0yxa.usemoralis.com:2053/server'

const Providers: React.FC = ({ children }) => {
    return (
        <Web3ProviderNetwork getLibrary={getLibrary}>
            <Web3ReactProvider getLibrary={getLibrary}>
                {children}
            </Web3ReactProvider>
        </Web3ProviderNetwork>

    )
}

export default Providers
