import type { NextPage } from "next";
import type { FC } from "react";

import { useWeb3 } from "../context/web3Context";
import Layout from "../components/layout";

const Home: NextPage = () => {
  const { address } = useWeb3();

  return (
    <Layout>
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            We can make your
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              NFT Rentable
            </span>
            to make you money!
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
            NFT protocal that make NFTs rentable for multple use!
          </p>
        </div>
        <div className="w-full xl:w-3/5 p-12 overflow-hidden">
          <img
            className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
            src="images.jpeg"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
