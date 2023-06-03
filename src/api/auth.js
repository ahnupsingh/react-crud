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

    static getBlog = (blog, page=1, limit=10) => {
        return axios.get(`${BASE_URL}/blog?_page=${page}&_limit=${limit}`, blog)
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