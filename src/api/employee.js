import axios from "axios";
import { BASE_URL } from "../config/constants";

const getHeaders = () => {
    const headers = {}
    const token = localStorage.getItem("access_token")
    if(token){
        headers["Authorization"] = `Bearer ${token}`
    }
    return headers;
}

export const getAllEmployees = () => {
    return axios.get(`${BASE_URL}/employees`)
}

export const createEmployee = (data) => {
    return axios({
        method: 'post',
        url: `${BASE_URL}/employees`,
        headers: getHeaders(),
        data: data
    })
}

export const updateEmployee = (id) => {
    return axios({
        method: 'put',
        url: `${BASE_URL}/employees/${id}`,
        headers: getHeaders(),
    })
}

export const deleteEmployee = (id) => {
    return axios({
        method: 'delete',
        url: `${BASE_URL}/employees/${id}`,
        headers: getHeaders(),
    })
}