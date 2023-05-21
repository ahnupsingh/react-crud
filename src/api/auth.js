import axios from "./index";

class AuthApi {

    static signin = (data) => {
        return axios.post(`${base}/auth/signin`,data)
    }

    static Register = (data) => {
        return axios.post(`${base}/register`, data);
    };

    static Logout = (data) => {
        return axios.post(`${base}/logout`, data, { headers: { Authorization: `${data.token}` } });
    };
}

let base = "users";

export default AuthApi;
