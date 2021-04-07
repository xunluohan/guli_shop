import ajax from './ajax'
import mockAjax from './mockAjax'

// 请求三级分类函数
export const reqCategoryList = () => {
  return ajax({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}

// 请求 banner轮播 函数
export const reqBannerList = () => {
  return mockAjax({
    method: 'get',
    url: '/banner'
  })
}
// 请求 floor 轮播 函数
export const reqFloorList = () => {
  return mockAjax({
    method: 'get',
    url: '/floor'
  })
}

// 请求 search 组件 数据
export const reqGoodsInfo = (obj) => {
  return ajax({
    url: '/list',
    method: 'post',
    data: obj
  })
}

// 请求商品详情函数
// /api/item/{ skuId }
// get
export const reqGoodsDetailInfo = (skuId) => {
  return ajax({
    url: `/item/${skuId}`,
    method: 'get'
  })
}

// 请求添加购物车 更新购物车
// /api/cart/addToCart/{ skuId }/{ skuNum }
// post
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
  })
}

// 获取购物车列表
// /api/cart/cartList
// get
export const reqShopCartList = () => {
  return ajax({
    url: '/cart/cartList',
    method: 'get'
  })
}

// 修改单个商品选中状态
// /api/cart/checkCart/{skuID}/{isChecked}
// get
export const reqChangeCheckedOne = (skuId, isChecked) => {
  return ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get',
  })
}

// 批量修改购物车商品选中状态
// /api/cart/batchCheckCart/{isChecked}
// get
export const reqCheckedAll = ({isChecked,skuId}) => {
  return ajax({
    url: `/cart/batchCheckCart/${isChecked}`,
    method: 'post',
    data:skuId
  })
}

// 删除单个商品
// /api/cart/deleteCart/{skuId}
// delete
export const reqDeleteOne = (skuId) => {
  return ajax({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
  })
}

// 批量删除购物车
// /api/cart/batchDeleteCart
// delete
export const reqDeleteCheckedAll = (skuIds) => {
  return ajax({
    url: '/cart/batchDeleteCart',
    method: 'delete',
    data: skuIds
  })
}

// 获取验证码
// /api/user/passport/sendCode/{phone}
// get
export const reqGetCode = (phone) => {
  return ajax({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
  })
}

// 注册用户
// /api/user/passport/register
// post
export const reqUserRegister = (userInfo) => {
  return ajax({
    url: '/user/passport/register',
    method: 'post',
    data: userInfo
  })
}

// 用户登录
// /api/user/passport/login
// post
export const reqUserLogin = (userInfo) => {
  return ajax({
    url: '/user/passport/login',
    method: 'post',
    data: userInfo
  })
}

// token 校验 ,获取用户信息
// ttp://182.92.128.115/api/user/passport/auth/getUserInfo
// get
export const reqGetUserInfo = () => {
  return ajax({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
  })
}

// 退出登录
// /api/user/passport/logout
// get
export const reqUserLogout = () => {
  return ajax({
    url: '/user/passport/logout',
    method: 'get'
  })
}

// 获取交易也信息
// /api/order/auth/trade
// get
export const reqTradeInfo = () => {
  return ajax({
    url: '/order/auth/trade',
    method: 'get'
  })
}

// 获取用户地址信息
// /api/user/userAddress/auth/findUserAddressList
// get
export const reqAddressInfoList = () => {
  return ajax({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get'
  })
}

// 提交订单
// /api/order/auth/submitOrder?tradeNo={tradeNo}
// post
export const reqSubmitOrder = (tradeNo, orderInfo) => {
  return ajax({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'post',
    data: orderInfo
  })
}

// 获取订单交易页面信息
// /api/payment/weixin/createNative/{orderId}
// get
export const reqPayInfo = (orderId) => {
  return ajax({
    url: `payment/weixin/createNative/${orderId}`,
    method: 'get'
  })
}

// 获取支付状态
// /api/payment/weixin/queryPayStatus/{orderId}
// get
export const reqPayStatus = (orderId) => {
  return ajax({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get'
  })
}

// 获取订单信息
// /api/order/auth/{page}/{limit}
      // get
export const reqCenterInfo = (page,limit)=>{
    return ajax({
      url:`/order/auth/${page}/${limit}`,
      method:'get'
    })
}