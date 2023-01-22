import axios from "axios";
import { BASE_URL } from "../consts";

interface INFT {
  name: string;
  price: string;
  highest: string;
  imgUrl: string;
  artistId: number;
}
export const createNFT = (nft: INFT) => {
  return axios.post(`${BASE_URL}/nfts`, nft);
};
