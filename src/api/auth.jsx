import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/v1/sessions`, {
    email,
    password,
  });
  return response.data.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/v1/users`, userData);
  return response.data;
};

export const logout = async () => {
  const response = await axios.get(`${API_URL}/logout`);
  return response.data;
};
