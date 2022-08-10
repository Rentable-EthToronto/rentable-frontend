import { ChainId } from "@thirdweb-dev/sdk";
import { targetChainId } from "./targetChainConfig";
import RentableABI from "../deployment/Rentable.abi.json";

interface IAddresses {
  [key: string]: { [key: string]: string };
}

const ADDRESSES: IAddresses = {
  [ChainId.Goerli]: {
    Marketplace: "0xcDFD4F4c5A7f4138d65D31842cd9081F8539c57a",
  },
};

export const readAppContractAddresses = (name: string) => {
  return ADDRESSES[targetChainId][name];
};

const rentableABI = RentableABI;
export const contractConfig = {
  addressOrName: "0xcDFD4F4c5A7f4138d65D31842cd9081F8539c57a",
  contractInterface: rentableABI,
};
