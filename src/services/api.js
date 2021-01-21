import axios from 'axios';
import { config } from 'webpack';

const instance = axios.create({
    baseURL: ''
})

instance.interceptors.request.use((request) => {
    return request;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default instance;
