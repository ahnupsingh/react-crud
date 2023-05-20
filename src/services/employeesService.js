import axios from "axios";
import { employeesData } from "../data";

const getHeaders = () => {
    const headers = {}
    const token = localStorage.getItem("access_token")
    if(token){
        headers["Authorization"] = `Bearer ${token}`
    }
    return headers;
}

export const getAllEmployees = () => {
    return axios.get('http://localhost:3001/employees')
}

export const createEmployee = (data) => {
    const headers = {}
    const token = localStorage.getItem("access_token")
    if(token){
        headers["Authorization"] = `Bearer ${token}`
    }
    return axios({
        method: 'post',
        url: 'http://localhost:3001/employees',
        headers: headers,
        data: data
    })
}

export const deleteEmployee = (id) => {
    return axios({
        method: 'delete',
        url: `http://localhost:3001/employees/${id}`,
        headers: getHeaders(),
    })
}