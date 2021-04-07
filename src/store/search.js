import { reqGoodsInfo} from '@/api'
const state = {
  goodsInfo:{}
}

const mutations = {
  INIT_GOODSINFO(state,val){
    state.goodsInfo = val
  }
}

const actions = {
  async getGoodsInfo({commit},obj){
    const result = await reqGoodsInfo(obj)
    if(result.code === 200){
      commit("INIT_GOODSINFO",result.data)
    }
  }
}

const getters = {
  attrsList(state){
    return state.goodsInfo.attrsList || []
  },
  goodsList(state){
    return state.goodsInfo.goodsList || []
  },
  trademarkList(state){
    return state.goodsInfo.trademarkList || []
  }
}

export default {
  state,mutations,actions,getters
}