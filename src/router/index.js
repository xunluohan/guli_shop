import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location,resolved,rejected){
    if(!resolved && !resolved){
      return originPush.call(this,location).catch(()=>{})
    }else{
      return originPush.call(this,location,resolved,rejected)
    }
}

const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function(location,resolved,rejected){
    if(!resolved && !resolved){
      return originReplace.call(this,location).catch(()=>{})
    }else{
      return originReplace.call(this,location,resolved,rejected)
    }
}

const router =  new VueRouter({
  routes,
  // 设置路由跳转后,网页显示位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
router.beforeEach(async (to, from, next) => {
  // ...
  // 获取token 和 用户信息
  let token = store.state.user.token
  let userInfo = store.state.user.userInfo
  if(token){
    if(to.path === '/login'){
      next('/')
    }else{
      if(userInfo.name){
        next()
      }else{
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          alert(error.message)
          // 获取用户信息失败,清空token
          store.dispatch('resetToken')
          next('/login')
        }
      }
    }
  }else{
    // next()
    // 没有登录
    let path = to.path
    if(path.indexOf('/trade') === 0 || path.indexOf('/pay') === 0 || path.indexOf('/center') === 0){
      console.log(path)
      next('/login?to='+from.path)
    }else{
      next()
    }
  }
})


export default router