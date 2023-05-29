import axios from "./index";

class AuthApi {
  static login = (params) => {
    return axios.get(`/user/`, params);
  };

  static signin = (data) => {
    return axios.post(`${base}/auth/signin`, data);
  };
  static signup = (params) => {
    return axios.post(`/user/`, params);
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
