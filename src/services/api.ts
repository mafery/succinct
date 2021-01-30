import axios, { AxiosRequestConfig } from 'axios'

const options: AxiosRequestConfig = {
    baseURL: '',
    withCredentials: true,
    timeout: 20000,
    // headers: {}
}

const instance = axios.create(options);

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

export function axiosGet(url: string, params: any = {}): Promise<any> {
    return instance.get(url, params);
}

export function axiosPost(url: string, params: any = {}, options: AxiosRequestConfig = {}): Promise<any> {
    return instance.post(url, params, options);
}