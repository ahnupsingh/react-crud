import axios from "./index";
import { BASE_URL } from "../config/constants";
class AuthApi {
  static login = async (params) => {
    return await axios.get(`/user/`, params);
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
    //, page = 1, limit = 10
    return axios.get(`${BASE_URL}/blog`, blog); //?_page=${1}&_limit=${3}
  };
  static cartBlog = async (blog) => {
    try {
      return axios({
        method: "post",
        url: `${BASE_URL}/blog`,
        data: blog,
      });
    } catch (e) {
      console.log("error", e);
      return false;
    }
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
