import axios from "axios";
import { ApiUrl } from "../baseUrl";

export const getVerifikasiDetails = async () => {
  const response = await axios.get(`${ApiUrl}/verifikasi`);
  return response.data.data;
};

export const verifikasiData = async (id_user) => {
  const response = await axios.post(`${ApiUrl}/verifikasi/complete`, { id_user });
  return response.data;
};
