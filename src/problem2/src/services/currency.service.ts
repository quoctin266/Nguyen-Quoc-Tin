import axios from "../config/axios.custom";

export const getCurrencies = () => {
  return axios.get<unknown, ICurrency[]>(`prices.json`);
};
