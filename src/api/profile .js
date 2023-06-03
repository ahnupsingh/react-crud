import axios from "./index";

class ProfileApi {

    static edit = (id, body) => {
        return axios.put(`/user/${id}`, body)
    }
}

export default ProfileApi;