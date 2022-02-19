import axios from 'axios';

const CommonApiService = {
    get: (url) => {
        return axios.get(url)
    }

}

export default CommonApiService;