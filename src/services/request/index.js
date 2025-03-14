import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

// 创建 axios 实例
const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 例如添加 token
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    if (error.response) {
      // 处理不同的错误状态码
      switch (error.response.status) {
        case 401:
          // 未授权，可能需要重新登录
          console.log('未授权，请重新登录');
          break;
        case 404:
          console.log('请求的资源不存在');
          break;
        case 500:
          console.log('服务器错误');
          break;
        default:
          console.log(`其他错误: ${error.message}`);
      }
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.log('网络错误，请检查您的网络连接');
    } else {
      // 设置请求时发生的错误
      console.log('请求错误', error.message);
    }
    return Promise.reject(error);
  }
);



export default request;