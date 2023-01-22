import axios from "axios";
import { BASE_URL } from "../consts";

export const getArtists = () => {
  return axios.get(`${BASE_URL}/artists`);
};
