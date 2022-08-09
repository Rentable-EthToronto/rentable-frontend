import React, { useContext, ReactNode } from 'react';

import { useAccount } from 'wagmi';

interface Web3ContextInterface {
  address: string | any;
}

// create Context to pass data to different components
export const Web3Context = React.createContext<Web3ContextInterface>({
  address: '', // user's signed in address
});

export const Web3ContextProvider = ({ children }: { children: ReactNode }) => {
  const { address } = useAccount();
  return (
    <Web3Context.Provider
      value={{
        address,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  const web3 = useContext(Web3Context);
  return web3;
};
