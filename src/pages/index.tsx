import type { NextPage } from "next";
import type { FC } from "react";

import { useWeb3 } from "../context/web3Context";
import Layout from "../components/layout";

const Home: NextPage = () => {
  const { address } = useWeb3();

  return (
    <Layout>
      <div className="py-6 justify-center text-center">
        <h1 className="text-4xl font-bold mt-6">🚀 address: {address}</h1>
      </div>
    </Layout>
  );
};

export default Home;
