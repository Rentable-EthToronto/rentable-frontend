import { NextPage, NextPageContext } from "next";
import * as React from "react";
import { getNftMetadata, Nft, NftTokenType } from "@alch/alchemy-sdk";
import { MediaRenderer } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { alchemy } from "../../config/alchemy";
import Layout from "@/src/components/layout";

export async function getServerSideProps(context: NextPageContext) {
  const contractAddress: string | string[] | undefined =
    context.query.contractAddress;
  const tokenId: string | string[] | undefined = context.query.tokenId;

  const data = await getNftMetadata(alchemy, {
    tokenId: tokenId?.toString() ?? "",
    contract: { address: contractAddress?.toString() ?? "" },
    tokenType: NftTokenType.ERC721,
  });

  return { props: { data: JSON.stringify(data) } };
}

const CreateLendingPage: NextPage<{ data: string }> = ({ data }) => {
  const router = useRouter();
  const NFT: Nft = JSON.parse(data);
  const [price, setPrice] = React.useState<number>(0.05);

  const handlePriceChange = (event: { target: { value: number } }) => {
    setPrice(event.target.value);
  };

  if (!NFT) {
    return <div className="large-text">No Data To Show</div>;
  }

  return (
    <Layout>
      <div
        id="container"
        className="flex w-full flex-row justify-center p-6 px-10"
      >
        <div id="image" className="w-1/2 rounded-lg pr-10">
          <MediaRenderer
            src={NFT.media[0].gateway}
            style={{
              // Fit the image to the container
              width: "100%",
              height: "100%",
              borderRadius: 14,
            }}
          />
        </div>
        <div id="list-form" className="pt-6">
          <div className=" flex flex-col rounded-2xl border border-slate-200 p-10 text-xl">
            <div className="text-center font-semibold text-white">
              Lending NFT For:
            </div>
            <div className="text-white text-sm">
              {" lending duration: "}
              <input
                type="number"
                className="primary-input max-w-sm"
                value={price}
                onChange={handlePriceChange}
              />
              {" hr "}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateLendingPage;
