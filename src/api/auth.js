import axios from "./index";
import { BASE_URL } from "../config/constants";
class AuthApi {

    static login = (params) => {
        return axios.get(`/user/`, params)
    }

    static signup = (params) => {
        return axios.post(`/user/`, params)
    }

    static createBlog = (blog) => {
        return axios({
            method: 'post',
            url: `${BASE_URL}/blog`,
            data: blog
        })
    }

    static getBlog = (blog) => {
        return axios.get(`${BASE_URL}/blog`, blog)

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
