import axios from 'axios';

export type AnkrNftResponse = {
  jsonrpc: string;
  id: number;
  result: {
    owner: string;
    assets: AnkrNft[];
    nextPageToken: string;
  };
};

export type AnkrNft = {
  blockchain: string;
  name: string;
  tokenId: string;
  tokenUrl: string;
  imageUrl: string;
  collectionName: string;
  symbol: string;
  contractType: string;
  contractAddress: string;
};

export class AnkrRepository {
  constructor() {}

  public async getOwnNFTs(address: string): Promise<AnkrNftResponse> {
    const respose = await axios.post('https://rpc.ankr.com/multichain', {
      jsonrpc: '2.0',
      method: 'ankr_getNFTsByOwner',
      params: {
        blockchain: 'eth',
        walletAddress: address,
        pageSize: 1,
        pageToken: '',
      },
      id: 1,
    });

    return respose.data;
  }
}
