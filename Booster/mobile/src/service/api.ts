import axios from 'axios';

const api = axios.create({
    baseURL: '172.16.0.175:3333'
});

export default api; 