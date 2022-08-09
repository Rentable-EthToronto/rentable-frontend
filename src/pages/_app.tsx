import '../../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import type { AppProps } from 'next/app';
import { Web3ContextProvider } from '../context/web3Context';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { targetChainId } from '../config/targetChainConfig';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.goerli, chain.kovan, chain.rinkeby],
  [jsonRpcProvider({ rpc: () => ({ http: 'https://rpc.ankr.com/eth' }) }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Rentabale App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={targetChainId}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Web3ContextProvider>
            <Component {...pageProps} />
          </Web3ContextProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ThirdwebProvider>
  );
}

export default MyApp;
