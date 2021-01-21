import axios, {} from 'axios'

const instance = axios.create({
    baseURL: '',
    withCredentials: true
})

instance.interceptors.request.use((resquest) => {
    return resquest;
}, (error) => {
    return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error)
})

export default instance;