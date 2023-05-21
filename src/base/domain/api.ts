import axios, {AxiosRequestConfig} from 'axios';

const apiServerUrl = 'https://api.klearnit.online/';
const getAxiosInstance = async () => {
  const axiosInstance = axios.create({
    baseURL: apiServerUrl,
  });

  return axiosInstance;
};

const api = async (
  url: string,
  data?: any,
  options: AxiosRequestConfig = {},
) => {
  try {
    const API = await getAxiosInstance();
    return API({url, data, method: 'POST', ...options});
  } catch (error) {
    return Promise.reject(error);
  }
};

export default api;
