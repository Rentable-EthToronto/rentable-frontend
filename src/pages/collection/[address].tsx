import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import { OwnedNft, OwnedNftsResponse, getNftsForOwner } from '@alch/alchemy-sdk';
import NftCard from '../../components/NftCard';
import { alchemy } from '../../config/alchemy';
import { useRouter } from 'next/router';
import NFTInfo from '../../components/NFTInfo';
import { useAddress } from '@thirdweb-dev/react';
import Layout from '@/src/components/layout';
// import { AnkrRepository, AnkrNftResponse, AnkrNft } from '@/src/infrastructure/repositories/AnkrRepository';

export async function getServerSideProps(context: NextPageContext) {
  const address: string | string[] | undefined = context.query.address;
  const data = await getNftsForOwner(alchemy, address?.toString() ?? '');
  return { props: { data: JSON.stringify(data) } };
  // const ankrRepository = new AnkrRepository();
  // const ankrData = await ankrRepository.getOwnNFTs(address?.toString() || '');
  // return { props: { data: JSON.stringify(ankrData) } };
}

const CollectionPage: NextPage<{ data: string; address: string }> = ({ data, address }) => {
  const router = useRouter();
  const userAddress = useAddress();
  const viewingOwnCollection = userAddress === address;

  const fetchedData: OwnedNftsResponse = JSON.parse(data);
  // const fetchedData: AnkrNftResponse = JSON.parse(data);

  const nfts = fetchedData?.ownedNfts?.map((ownedNft: OwnedNft) => {
    // const nfts = fetchedData.result.assets.map((ownedNft: AnkrNft) => {
    const address = ownedNft.contract.address;
    const description = ownedNft.description;
    const image = ownedNft.media[0]?.gateway;
    const title = ownedNft.title;
    // const address = ownedNft.contractAddress;
    // const description = '';
    // const image = ownedNft.imageUrl;
    // const title = ownedNft.name;

    return (
      <NftCard image={image} key={ownedNft.tokenId}>
        <div id='container w-full'>
          <NFTInfo id={ownedNft.tokenId} description={description} title={title} address={address} />
          {viewingOwnCollection && (
            <div
              id='list-button'
              onClick={() => {
                router.push(`/create-listing/${address}?tokenId=${ownedNft.tokenId}`);
              }}
              className='primary-button mt-2'
            >
              Lend NFT
            </div>
          )}
        </div>
      </NftCard>
    );
  });

  if (!nfts || nfts.length === 0) {
    return <div className='large-text'>No NFTs To Show</div>;
  }
  return (
    <Layout>
      <div id='container' className='p-6 px-10'>
        <h1 className='text-center text-2xl font-normal text-slate-500 hover:font-semibold'>
          Collection at {userAddress}
        </h1>
        <div id='container' className='flex w-full flex-wrap justify-center'>
          {nfts}
        </div>
      </div>
    </Layout>
  );
};

export default CollectionPage;
