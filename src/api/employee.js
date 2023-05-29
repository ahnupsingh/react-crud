import axios from "./index";
import { BASE_URL } from "../config/constants";
class EmployeeApi {
    
    static getAllEmployees = () => {
        return axios.get(`${BASE_URL}/employees`)
    }

    static createEmployee = (data) => {
        return axios({
            method: 'post',
            url: `${BASE_URL}/employees`,
            data: data
        })
    }

    static updateEmployee = (id) => {
        return axios({
            method: 'put',
            url: `${BASE_URL}/employees/${id}`
        })
    }

    static deleteEmployee = (id) => {
        return axios({
            method: 'delete',
            url: `${BASE_URL}/employees/${id}`
        })
    }
}

let base = "employees";

export default EmployeeApi;