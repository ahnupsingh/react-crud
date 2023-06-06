import axios from "./index";
import { BASE_URL } from "../config/constants";
class AuthApi {

    static login = (params) => {
        return axios.get(`/user/`, params)
    }

    static signup = (data) => {
        return axios({
            method: 'post',
            url: `${BASE_URL}/user`,
            data: data
        })
    }

    static createBlog = (blog) => {
        return axios({
            method: 'post',
            url: `${BASE_URL}/blog`,
            data: blog
        })
    }

    static getBlog = (params) => {
        return axios({
            method: 'get',
            url: `${BASE_URL}/blog`,
            params: params
        })
    }

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