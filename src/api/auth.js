import axios from "./index";
import { BASE_URL } from "../config/constants";
class AuthApi {
  static login = async (params) => {
    return axios.get(`/user/`, params);
  };

  static signup = async (params) => {
    try {
      return await axios.post(`/user/`, params);
    } catch (e) {
      console.log("error", e);
      return false;
    }
  };

  static getBlog = (blog) => {
    return axios.get(`${BASE_URL}/blog`, blog);
  };

  static signin = (data) => {
    return axios.post(`${base}/auth/signin`, data);
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
