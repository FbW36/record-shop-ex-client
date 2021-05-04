import axios from 'axios';
axios.defaults.baseURL = `http://localhost:5000`;
axios.defaults.withCredentials = true;

const extractApiError = (errAxios) => {
  return errAxios.response
    ? errAxios.response.data
    : { error: { message: 'API not reachable' } };
};

export const fetchRecords = async () => {
  const res = await axios.get(`/records`);
  return res;
};

export const loginUser = async (data) => {
  const res = await axios.post(`/users/login`, data);
  return res;
};

export const signUpUser = async (data) => {
  const res = await axios.post(`/users`, data);
  return res;
};

export const updateUser = async (data, id) => {
  const res = await axios.put(`/users/${id}`, data);
  return res;
};

export const getOrders = async (id) => {
  const res = await axios.get(`/users/${id}/orders`);
  return res.data;
};

export const authenticateUser = async () => {
  try {
    const response = await axios.post(`/users/me/auth`);
    return response.data;
  } catch (err) {
    let error = extractApiError(err);
    console.log(error);
    return error;
  }
};
