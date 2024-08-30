import axios from "axios";
import { ApiUrl } from "../baseUrl";


export const getDataTransaksi = async (id) => {
  const response = await axios.get(`${ApiUrl}/trans/user/${id}`);
  return response.data.data;
};


export const getTotalTransaksi = async (id) => {
  const response = await axios.get(`${ApiUrl}/totalInvestasi/${id}`);
  return response.data.data;
};
