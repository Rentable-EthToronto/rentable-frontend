import { ChainId } from "@thirdweb-dev/sdk";

export const targetChainId = ChainId.Mainnet;

/***
 * Need to add support for your own network
 */
export const getEtherscanURL = () => {
  if (targetChainId === ChainId.Mainnet) {
    return "https://Mainnet.etherscan.io/";
  } else {
    console.log("Please add etherscan URL for your network");
    return undefined;
  }
};
