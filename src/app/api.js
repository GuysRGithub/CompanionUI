import axios from "axios";

const baseUrl = "http://localhost:5017/api/"

export default {
    dTask(url = baseUrl + "DTasks/") {
        return {
            fetchAll: () => axios.get(url),
            fetchById: (id) => axios.get(url + id),
            create: (payload) => axios.post(url, payload),
            update: (id, payload) => axios.put(url + id, payload),
            delete: (id) => axios.delete(url + id)
        }
    }
}