import axios from "axios";
import { ApiUrl } from "../baseUrl";

export const Verifikasi = async (formData) => {
  const response = await axios.post(`${ApiUrl}/verifikasi`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
