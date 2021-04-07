import { reqGetCode, reqUserLogin, reqUserRegister,reqGetUserInfo,reqUserLogout } from '@/api'
import {getUserTempId} from '@/utils/userabout'
const state = {
  userTempId:getUserTempId(),
  code:'',
  token:localStorage.getItem('TOKEN_KEY'),
  userInfo:{}
}

const mutations = {
  RECEIVE_CODE(state,val){
    state.code = val
  },
  RECEIVE_TOKEN(state,val){
    state.token = val
  },
  RECEIVE_USERINFO(state,val){
    state.userInfo = val
  },
  RESET_TOKEN(state){
    state.token = ''
  },
  // 清空用户信息
  RESET_USERINFO(state){
    state.userInfo = {},
    state.token = ''
  }
}

const actions = {
  // 获取验证码
  async getCode({commit},phone){
    const result = await reqGetCode(phone)
    if(result.code === 200){
      commit('RECEIVE_CODE',result.data)
      return result.data
    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  // 注册用户
  async userRegister({commit},userInfo){
    const result = await reqUserRegister(userInfo)
    if(result.code === 200 ){
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  // 用户登录 获取token
  async getToken({commit},userInfo){
    const result = await reqUserLogin(userInfo)
    if(result.code === 200){
      commit('RECEIVE_TOKEN',result.data.token)
      localStorage.setItem('TOKEN_KEY',result.data.token)
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  // token校验获取用户信息
  async getUserInfo({commit}){
    const result = await reqGetUserInfo()
    if(result.code === 200 ){
      commit('RECEIVE_USERINFO',result.data)
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  // 清空token
  async resetToken({commit}){
    commit('RESET_TOKEN')
    // 清除本地保存的token
    localStorage.removeItem('TOKEN_KEY')
  },
  // 退出登录
  async userLogout({commit}){
    const result = await reqUserLogout()
    if(result.code === 200){
      commit('RESET_USERINFO')
      localStorage.removeItem('TOKEN_KEY')
    }
  }
}

const getters = {}

export default {
  state,mutations,actions,getters
}