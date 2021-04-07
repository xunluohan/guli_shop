import { reqAddressInfoList, reqTradeInfo } from "@/api"

const state = {
  tradeInfo:{},
  addressInfoList:[]
}

const mutations = {
  RECEIVE_TRADEINFO(state,val){
    state.tradeInfo = val
  },
  RECEIVE_ADDRESSINFOLIST(state,val){
    state.addressInfoList = val
  }
}

const actions = {
  async getTradeInfo({commit}){
    const result = await reqTradeInfo()
    if(result.code === 200){
      commit('RECEIVE_TRADEINFO',result.data)
    }
  },
  // 获取用户地址
  async getAddressInfoList({commit}){
    const result = await reqAddressInfoList()
    if(result.code === 200){
      commit('RECEIVE_ADDRESSINFOLIST',result.data)
    }
  }
}

const getters = {
  detailArrayList(state){
    return state.tradeInfo.detailArrayList || []
  }
}

export default {
  state,mutations,actions,getters
}