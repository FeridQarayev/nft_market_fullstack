import axios from "axios";
import { BASE_URL } from "../consts";

interface IArtist {
  name: string;
  change: string;
  sold: string;
  volume: string;
  imgUrl: string;
  createTime: Date;
}
export const createArtist = (artist: IArtist) => {
  return axios.post(`${BASE_URL}/artists`, artist);
};
