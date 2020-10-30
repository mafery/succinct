

import axios from 'axios';

// 为 axios创建实例
const apiInterceptor = axios.create();

// Tools like Cloud9 rely on this.
// const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
// const HOST = process.env.HOST || '0.0.0.0';

apiInterceptor.defaults.baseURL = '';
apiInterceptor.defaults.timeout = 30000;

// 拦截请求
apiInterceptor.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 拦截响应
apiInterceptor.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})

export default apiInterceptor;