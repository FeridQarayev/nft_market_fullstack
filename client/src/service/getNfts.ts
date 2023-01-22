import axios from "axios";
import { BASE_URL } from "../consts";

export const getNfts = () => {
  return axios.get(`${BASE_URL}/nfts`);
};
