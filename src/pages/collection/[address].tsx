import { NextPage, NextPageContext } from "next";
import * as React from "react";

import {
  OwnedNft,
  OwnedNftsResponse,
  getNftsForOwner,
} from "@alch/alchemy-sdk";
import NftCard from "../../components/NftCard";
import { alchemy } from "../../config/alchemy";
import { useRouter } from "next/router";
import NFTInfo from "../../components/NFTInfo";
import { useAddress } from "@thirdweb-dev/react";
import Layout from "@/src/components/layout";
import { AnkrRepository } from "@/src/infrastructure/repositories/AnkrRepository";

export async function getServerSideProps(context: NextPageContext) {
  const address: string | string[] | undefined = context.query.address;
  const data = await getNftsForOwner(alchemy, address?.toString() ?? "");
  // const ankrRepository = new AnkrRepository();
  // const ankrData = await ankrRepository.getOwnNFTs(address?.toString() || '');
  return { props: { data: JSON.stringify(data) } };
}

const CollectionPage: NextPage<{ data: string; address: string }> = ({
  data,
  address,
}) => {
  const router = useRouter();
  const userAddress = useAddress();
  const viewingOwnCollection = userAddress === address;

  const fetchedData: OwnedNftsResponse = JSON.parse(data);

  const nfts = fetchedData?.ownedNfts?.map((ownedNft: OwnedNft) => {
    const address = ownedNft.contract.address;
    const description = ownedNft.description;
    const image = ownedNft.media[0]?.gateway;
    if (address.toLocaleLowerCase() === '0xcdfd4f4c5a7f4138d65d31842cd9081f8539c57a') {
      return (<></>)
    }

    return (
      <NftCard image={image} key={ownedNft.tokenId}>
        <div id="container w-full">
          <NFTInfo
            id={ownedNft.tokenId}
            description={description}
            title={ownedNft.title}
            address={address}
          />
          {viewingOwnCollection && (
            <button
              id="list-button"
              onClick={() => {
                router.push(
                  `/create-lending/${address}?tokenId=${ownedNft.tokenId}`
                );
              }}
              className="mt-2 bg-white text-black p-2 rounded-lg"
            >
              Lend NFT
            </button>
          )}
        </div>
      </NftCard>
    );
  });

  return (
    <Layout>
      <div id="container" className="p-6 px-10 w-full">
        <h1 className="text-center text-2xl font-normal text-slate-500 hover:font-semibold">
          Collection at {userAddress}
        </h1>
        {!nfts || nfts.length === 0 ?
          <div className="large-text">No NFTs To Show</div>
        :
          <div id="container" className="flex w-full flex-wrap justify-center">
            {nfts}
          </div>
        }
      </div>
    </Layout>
  );
};

export default CollectionPage;
