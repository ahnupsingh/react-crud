import Axios from "axios";
import { BASE_URL } from "../config/constants";

const getHeaders = () => {
  const headers = {}
  const token = localStorage.getItem("access_token")
  if(token){
      headers["Authorization"] = `Bearer ${token}`
  }
  return headers;
}


const axios = Axios.create({
  baseURL: `${BASE_URL}`,
  headers: { "Content-Type": "application/json" },
});

axios.interceptors.request.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.headers = getHeaders();

export default axios;
