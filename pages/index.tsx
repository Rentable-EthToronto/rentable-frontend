import type { NextPage } from "next";
import type { FC } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Home: NextPage = () => {
  return (
    <div className="py-6 justify-center text-center">
      <div className="flex justify-center">
        <ConnectButton />
      </div>

      <h1 className="text-4xl font-bold mt-6">🚀 create-web3-frontend</h1>
      <InfoSection />
    </div>
  );
};

const InfoSection: FC = () => {
  return <div className="mt-10"></div>;
};

export default Home;
