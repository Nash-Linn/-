/**
 *  1.下载axios
 *
 *  2.引入
 */
import axios from "axios";

//创建实例
const api = axios.create({
  //请求地址的公共部分
  baseUrl: "",
  //请求的超时时间
  timeout: 3000,
});

//axios 拦截器
api.interceptors.request.use(
  (config) => {
    //config 请求的信息
    return config;
  },
  (err) => {
    //抛出错误
    Promise.reject(err);
  }
);

api.interceptors.response.use(
  (res) => {
    console.log(res);
    return Promise.resolve(res);
  },
  (err) => {
    //抛出错误
    Promise.reject(err);
  }
);

export default api;
