import Axios from "axios";

// 封装一个Axios
export function request(config){
    // 实列化axios
    const instance = Axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout:5000
    })
    // 请求拦截
    instance.interceptors.request.use(config => {
        return config;
    },err =>{
        console.log(err)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
        return res;
    },err =>{
        console.log(err)
    })
    // 发送真正的网络请求
    return instance(config)
}
// 封装二个Axios
export function request2(config){
  // 实列化axios
  const instance = Axios.create({
      baseURL: 'http://152.136.185.210:7878/api/hy66',
      timeout:5000
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
      return config;
  },err =>{
      console.log(err)
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
      return res;
  },err =>{
      console.log(err)
  })
  // 发送真正的网络请求
  return instance(config)
}
