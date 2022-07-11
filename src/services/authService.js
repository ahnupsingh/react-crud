
import axios from "axios"

export const signin = (data) => {
    return axios.post('http://localhost:3001/auth/signin',data)
}