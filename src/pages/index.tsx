import type { NextPage } from "next";
import type { FC } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Header from "../components/Header";
import { useWeb3 } from "../context/web3Context";

const Home: NextPage = () => {
  const { address } = useWeb3();
  console.log(address);
  return (
    <div className="py-6 justify-center text-center">
      <Header />
      <div className="flex justify-center">
        <ConnectButton />
      </div>

      <h1 className="text-4xl font-bold mt-6">🚀 address: {address}</h1>
    </div>
  );
};

export default Home;
