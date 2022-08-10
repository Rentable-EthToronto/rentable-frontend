import type { NextPage } from "next";
import type { FC } from "react";
import { useEffect, useState, useCallback } from "react";
import RentableABI from "../deployment/Rentable.json";
import { useWeb3 } from "../context/web3Context";
import Layout from "../components/layout";
import { useContract, useProvider, useContractRead } from "wagmi";

const rentableABI = RentableABI.abi;
const contractConfig = {
  addressOrName: "0x395451130f3F64b458eCE52D6731a5e5d415cF34",
  contractInterface: rentableABI,
};

const Listings: NextPage = () => {
  const { address } = useWeb3();
  const [totalRentalUnits, setTotalRentalUnits] = useState(0);
  const [owner, setOwner] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: "totalSupply",
    watch: true,
  });
  const { data: ownerData } = useContractRead({
    ...contractConfig,
    functionName: "ownerOf",
    tokenId: "0",
  });

  useEffect(() => {
    if (totalSupplyData) {
      setTotalRentalUnits(totalSupplyData.toNumber());
    }
  }, []);
  useEffect(() => {
    if (ownerData) {
      setOwner(ownerData.address);
    }
    console.log(owner);
  }, []);

  return (
    <Layout>
      {loading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      <div className="container pt-24 md:pt-24 mx-auto flex flex-wrap flex-col md:flex-row items-center text-base text-white">
        Totally {totalRentalUnits} rentable NFTs Owner{owner}
      </div>
    </Layout>
  );
};

export default Listings;
