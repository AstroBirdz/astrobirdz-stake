import Providers from 'provider';
import React from 'react';
import Web3ReactManager from 'utils/web3ReactManager';
import Main from './main'

function App() {
  return (
    <div>
      <Providers>
        <Web3ReactManager >
          <Main />
        </Web3ReactManager>
      </Providers>
    </div>
  );
}

export default App;
