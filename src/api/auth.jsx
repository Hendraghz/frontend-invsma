import axios from "axios";
import { ApiUrl } from "./baseUrl";

export const login = async (email, password) => {
  const response = await axios.post(`${ApiUrl}/login`, {
    email,
    password,
  });
  return response.data;
};

export const gerUsers = async (userData) => {
  const response = await axios.get(`${ApiUrl}/users`, userData);
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${ApiUrl}/users`, userData);
  return response.data;
};

export const logout = async () => {
  const response = await axios.get(`${ApiUrl}/logout`);
  return response.data;
};
