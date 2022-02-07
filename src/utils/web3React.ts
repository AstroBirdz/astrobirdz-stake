import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { IWalletConnectProviderOptions } from '@walletconnect/types'
// eslint-disable-next-line import/no-unresolved
// import { BscConnector } from '@binance-chain/bsc-connector'
import Web3 from 'web3'
import { ConnectorNames } from 'config/constants/wallets'
import { NetworkConnector } from './NetworkConnector'
import getNodeUrl from './getRpcUrl'

const POLLING_INTERVAL = 12000
const rpcUrl = getNodeUrl()
const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)

export const injected = new InjectedConnector({ supportedChainIds: [chainId] })


const walletConnectorSetting: IWalletConnectProviderOptions = {
  rpc: { [chainId]: rpcUrl },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
}
export const walletconnect = new WalletConnectConnector(walletConnectorSetting)

// export const bscConnector = new BscConnector({ supportedChainIds: [chainId] })

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
//   [ConnectorNames.BSC]: bscConnector,
}

export const getLibrary = (provider: any): Web3 => {
  const library = new Web3(provider)
  return library
}

export const network = new NetworkConnector({
  urls: { [chainId]: rpcUrl },
})