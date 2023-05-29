import axios from "./index";
import { BASE_URL } from "../config/constants";

class AuthApi {
  static login = (params) => {
    return axios.get(`/user/`, params);
  };
  static signup = (params) => {
    return axios.post(`/user/`, params);
  };
  static signin = (data) => {
    return axios.post(`${base}/auth/signin`, data);
  };
  static createBlog = (data) => {
    return axios({
      method: "post",
      url: `${BASE_URL}/blog`,
      data: data,
    });
  };

  static getBlog = (data) => {
    return axios.get(`${BASE_URL}/blog`, data);
  };

  static Register = (data) => {
    return axios.post(`${base}/register`, data);
  };

  static Logout = (data) => {
    return axios.post(`${base}/logout`, data, {
      headers: { Authorization: `${data.token}` },
    });
  };
}

let base = "users";

export default AuthApi;
