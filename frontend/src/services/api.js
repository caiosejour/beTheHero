import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fast-sea-29760.herokuapp.com'
});

export default api;