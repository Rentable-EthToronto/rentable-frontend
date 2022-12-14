import * as React from "react";
import { formatDisplayAddress } from "../utils/web3utils";
import { getEtherscanURL } from "../config/targetChainConfig";

export const NFTInfo: React.FC<{
  id: string;
  description: string;
  title: string;
  address: string;
}> = ({ id, description, title, address }) => {
  const etherscanURL = getEtherscanURL();

  return (
    <>
      <div
        id="title-and-link"
        className="flex flex-col justify-between text-sm 
       "
      >
        <div className="text-xl font-semibold">{title}</div>
        <div className="mt-2 flex ">
          <div className="text-sm">
            <span className="font-bold ">Token Address: </span>
            <a
              target="_blank"
              className="text-blue-700"
              href={`${etherscanURL}/token/${address}`}
              rel="noreferrer"
            >
              {formatDisplayAddress(address)}
            </a>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm ">
        {!description ? "No Description" : description.length > 30 ? `${description.slice(0, 30)}...` : description}
      </p>
    </>
  );
};

export default NFTInfo;
