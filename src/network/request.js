import axios from 'axios'

// ES6 Promis 封装
export function request(config) {
  // 创建 axios 实例
  return new Promise((resolve, reject) => {
    // 1. 创建 axios 的实例对象
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000/api/vip', // 备用接口
      // baseURL: 'http://106.54.54.237:8000/api/v1',
      timeout: 10000
    })

    //过滤器（拦截器）
    instance.interceptors.response.use(res => {
      return res.data
    })

    // 通过实例发送网络请求
    instance(config).then(res => {
      resolve(res) // 请求成功 外部执行 then 获取数据
    }).catch(err => {
      reject(err) // 请求失败 返回错误信息
    })
  })
}