import axios from "./index";
import { BASE_URL } from "../config/constants";

class AddressApi {
    static getStates = (state) => {
        return axios.get(`${BASE_URL}/states`)
    }

    static getCities = (state) => {
        return axios.get(`${BASE_URL}/cities`)
    }

    static getPostalCodes = (city) => {
        return axios.get(`${BASE_URL}/postalCodes`)
    }
}

export default AddressApi;