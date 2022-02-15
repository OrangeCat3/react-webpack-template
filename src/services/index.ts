// service统一出口
import myRequest from './request';
import { BASE_URL, TIMEOUT } from './request/config';
import localCache from '@utils/cache';

console.log(BASE_URL);

const Request = new myRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        let headers = config.headers;
        if(headers) { headers.Authorization = `Bearer ${token}`};
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default Request