import type { NextPage } from "next";
import type { FC } from "react";
import { useEffect, useState, useCallback } from "react";
import RentableABI from "../deployment/Rentable.abi.json";
import { useWeb3 } from "../context/web3Context";
import Layout from "../components/layout";
import { useContract, useProvider, useContractRead } from "wagmi";

const rentableABI = RentableABI;
const contractConfig = {
  addressOrName: "0xcDFD4F4c5A7f4138d65D31842cd9081F8539c57a",
  contractInterface: rentableABI,
};

const Listings: NextPage = () => {
  const { address } = useWeb3();
  const [totalRentalUnits, setTotalRentalUnits] = useState(0);
  const [listings, setListings] = useState([]);
  const [latestRentalId, setLatestRentalId] = useState(0);
  const [balance, setBalance] = useState(0);
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
    args: 0,
  });

  const { data: balanceData } = useContractRead({
    ...contractConfig,
    functionName: "balanceOf",
    args: address,
  });

  const { data: latestRentalIdData } = useContractRead({
    ...contractConfig,
    functionName: "getLatestId",
  });

  const { data: listingsData } = useContractRead({
    ...contractConfig,
    functionName: "getRentalUnitList",
    args: [0, latestRentalId],
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

  useEffect(() => {
    if (balanceData) {
      setBalance(balanceData.toNumber());
    }
    console.log(balance);
  }, []);

  useEffect(() => {
    if (latestRentalIdData) {
      setLatestRentalId(latestRentalIdData.toNumber());
    }
    console.log(latestRentalId);
  }, []);

  useEffect(() => {
    if (listingsData) {
      setListings(listingsData as []);
    }
  }, [listingsData]);

  console.log("listingsData", listings);
  return (
    <Layout>
      {error && <div>{error}</div>}
      <div className="flex flex-col">
        <div className="container pt-24 md:pt-24 mx-auto flex flex-wrap flex-col md:flex-row items-center text-base text-white">
          Totally {totalRentalUnits} rentable NFTs available
        </div>
        <div className="container pt-24 md:pt-24 mx-auto flex flex-wrap flex-col md:flex-row items-center text-base text-white">
          Balance of {address} is {balance}
        </div>
        <div className="container pt-24 md:pt-24 mx-auto flex flex-wrap  md:flex-row items-center text-base text-white">
          <div className="flex flex-col">
            {listings &&
              listings.map((listing, idx) => (
                <div>
                  <div key={idx}>
                    Rentable NFT Contract Address: {listing[0]}
                  </div>
                  {/* <div key={idx}>Rentable NFT Token ID: {listing[1]}</div> */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Listings;
