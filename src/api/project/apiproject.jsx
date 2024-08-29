import axios from "axios";
import { ApiUrl } from "../baseUrl";

const storedData = localStorage.getItem("authTokens");
const token = storedData ? JSON.parse(storedData).accessToken : null;
export const getProjectUser = async (id) => {
  const response = await axios.get(`${ApiUrl}/projects/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};

export const getProject = async () => {
  const response = await axios.get(`${ApiUrl}/projects`);
  return response.data.data;
};

export const createProject = async (formData) => {
  const response = await axios.post(`${ApiUrl}/projects`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await axios.get(`${ApiUrl}/projects/${id}`);
  return response.data.data;
};

export const editPendanaan = async (id, formData) => {
  const response = await axios.put(`${ApiUrl}/projects/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data.data;
};

export const deletePendanaan = async (id) => {
  const response = await axios.delete(`${ApiUrl}/projects/${id}`);
  return response.data.data;
};
