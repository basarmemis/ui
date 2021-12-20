import axios from 'axios';
import adapter from "axios/lib/adapters/http";

axios.defaults.adapter = adapter;

export class TodosAPI {

    constructor(url) {
        if (url === undefined || url === "") {
            url = process.env.REACT_APP_API_BASE_URL;
        }
        if (url.endsWith("/")) {
            url = url.substr(0, url.length - 1);
        }

        this.url = url;
    }


    getAll = async () => {
        const endpoitUrl = this.url + "/todos"
        const response = await axios.get(endpoitUrl,
            {
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            });
        return await response.data;
    }

    addTodo = async (name) => {
        const endpoitUrl = this.url + "/todos";
        const response = await axios.post(
            endpoitUrl,
            { name: name },
            {
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            });
        return await response.data;
    }
}

export default new TodosAPI(process.env.REACT_APP_API_BASE_URL);