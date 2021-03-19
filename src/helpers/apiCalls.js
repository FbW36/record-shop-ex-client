import axios from 'axios';
const serverUrl = `http://localhost:5000`;

export const fetchRecords = async () => {
  const res = await axios.get(`${serverUrl}/records`);
  return res;
};

export const loginUser = async (data) => {
  const res = await axios.post(`${serverUrl}/users/login`, data);
  return res;
};

export const signUpUser = async (data) => {
  const res = await axios.post(`${serverUrl}/users`, data);
  return res;
};

export const updateUser = async (data, id) => {
  const res = await axios.put(`${serverUrl}/users/${id}`, data);
  return res;
};
