import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'

const state = {
  categoryList:[],
  bannerList:[],
  floorList:[]
}

const mutations = {
  INIT_CATEGORYLIST(state,val){
    state.categoryList = val
  },
  INIT_BANNERLIST(state,val){
    state.bannerList = val
  },
  INIT_FLOORLIST(state,val){
    state.floorList = val
  },
}

const actions = {
  async getCategoryList({commit}){
    const result = await reqCategoryList()
    if(result.code ===200){
      commit('INIT_CATEGORYLIST',result.data)
    }
  },
  async getBannerList({commit}){
    const result = await reqBannerList()
    if(result.code ===200){
      commit('INIT_BANNERLIST',result.data)
    }
  },
  async getFloorList({commit}){
    const result = await reqFloorList()
    if(result.code ===200){
      commit('INIT_FLOORLIST',result.data)
    }
  }
}

const getters = {

}


export default {
  state,mutations,actions,getters
}