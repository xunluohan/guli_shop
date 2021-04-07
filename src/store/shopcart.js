import { reqAddOrUpdateShopCart, reqChangeCheckedOne, reqCheckedAll, reqDeleteCheckedAll, reqDeleteOne, reqShopCartList } from "@/api"



const state = {
  shopCartList: []
}

const mutations = {
  RECEIVE_SHOPCARTLIST(state,val){
    state.shopCartList = val
  }
}

const actions = {
  // 添加或修改购物城商品数量
  async addOrUpdateShopCart({commit},{skuId,skuNum}){
    const result = await reqAddOrUpdateShopCart(skuId,skuNum)
    if(result.code === 200 ){
      return 'ok'
    }else{
      return Promise.reject(new Error('添加或修改购物车商品数量失败'))
    }
  },
  // 获取购物车商品列表
  async getShopCartList({commit}){
    const result = await reqShopCartList()
    if(result.code === 200){
      commit('RECEIVE_SHOPCARTLIST',result.data)
    }
  },
  // 修改商品选中状态
  async changeCheckedOne({commit},{skuId,isChecked}){
    const result = await reqChangeCheckedOne(skuId,isChecked)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('修改商品选中状态'))
    }
  },
  // 批量修改商品选中状态
  async checkedAll({commit},isChecked){
    const result = await reqCheckedAll(isChecked)
    if(result.code === 200){
      return 'ok'

    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  // 删除单个商品
  async deleteOne({commit},skuId){
    const result = await reqDeleteOne(skuId)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject(new Error('failed'))
    }
  },
  // 批量删除商品
  async deleteCheckedAll({commit},skuIds){
    const result = await reqDeleteCheckedAll(skuIds)
    if(result.code === 200){
      return 'ok'
    }else{
      return Promise.reject('failed')
    }
  }
}

const getters = {}

export default {
  state,mutations,actions,getters
}