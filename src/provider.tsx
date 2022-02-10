import React from 'react'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './utils/web3React'
import { NetworkContextName } from './config/constants/wallets'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

if ((window as any).ethereum) {
    (window as any).ethereum.autoRefreshOnNetworkChange = true
}

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
