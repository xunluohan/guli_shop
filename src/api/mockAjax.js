import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建实例对象 进行二次封装
const ajax = axios.create({
  baseURL: '/mock',
  timeout: 20000
})

// 请求拦截
ajax.interceptors.request.use(
  (config) => {
    // 开启进度条
    nprogress.start()

    return config
  }
)

// 响应拦截
ajax.interceptors.response.use(
  (response) => {
    // 关闭进度条
    nprogress.done()
    // 直接返回data数据
    return response.data
  },
  (err) => {
    // 关闭进度条
    nprogress.done()
    // 错误提示
    alert('发送请求失败' + err.message || '未知错误')

    // 中断promise链,后面不在处理错误
    return new Promise(()=>{})
  }
)

// 暴露实力对象ajax
export default ajax