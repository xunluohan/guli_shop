import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import 'swiper/css/swiper.css'
import * as API from '@/api'
import '@/plugins/elements'
import '@/plugins/validate'



// import VueLazyload from 'vue-lazyload'
// import loading from '@/assets/images/loading.gif'
// // 在图片界面没有进入到可视范围前不加载, 在没有得到图片前先显示loading图片
// Vue.use(VueLazyload, { // 内部自定义了一个指令lazy
//   loading,  // 指定未加载得到图片之前的loading图片
// })


Vue.config.productionTip = false

// 测试请求函数
import '@/api'

// 引入mock,在项目开启时,mock模拟接口开始运行
import '@/mock'

// 全局组件注册
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name,TypeNav)
Vue.component('SliderLoop',SliderLoop)
Vue.component('Pagination',Pagination)

new Vue({
  beforeCreate(){
    // 安装事件总线
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
  
  router,store
}).$mount('#app')
