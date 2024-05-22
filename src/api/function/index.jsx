import axios from 'axios';
const baseUrl = import.meta.env.VITE_REACT_API_URL
const api = axios.create({
  baseURL:baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const makeApiRequest = async (method, url, data = null, params = null, additionalHeaders = {}) => {
  try {
    const response = await api.request({
      method,
      url,
      data,
      params,
      headers: {
        ...api.defaults.headers,
        ...additionalHeaders,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
