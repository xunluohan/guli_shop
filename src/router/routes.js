
// import Home from '@/pages/Home'
const Home = () => import('@/pages/Home')
// import Login from '@/pages/Login'
const Login = ()=> import('@/pages/Login')
// import Register from '@/pages/Register'
const Register = ()=> import('@/pages/Register')
// import Search from '@/pages/Search'
const Search = ()=> import('@/pages/Search')

// import Detail from '@/pages/Detail'
const Detail = ()=> import('@/pages/Detail')

// import AddCartSuccess from '@/pages/AddCartSuccess'
const AddCartSuccess = ()=> import('@/pages/AddCartSuccess')

// import ShopCart from '@/pages/ShopCart'
const ShopCart = ()=> import('@/pages/ShopCart')

// import Trade from '@/pages/Trade'
const Trade = ()=> import('@/pages/Trade')
// import Pay from '@/pages/Pay'
const Pay = ()=> import('@/pages/Pay')
// import PaySuccess from '@/pages/PaySuccess'
const PaySuccess = ()=> import('@/pages/PaySuccess')
// import Center from '@/pages/Center'
const Center = ()=> import('@/pages/Center')
// import Mycenter from '@/pages/Center/Mycenter'
const Mycenter = ()=> import('@/pages/Center/Mycenter')
// import GroupCenter from '@/pages/Center/GroupCenter'
const GroupCenter = () => import('@/pages/Center/GroupCenter')
// 组件通信高级
// const Communication = () => import('@/pages/Communication')
// import Communication from '@/pages/Communication'


export default [
  {
    path: '/communication',
    component: () => import('@/pages/Communication/Communication'),
    children: [
      {
        path: 'event',
        component: () => import('@/pages/Communication/EventTest/EventTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'model',
        component: () => import('@/pages/Communication/ModelTest/ModelTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'sync',
        component: () => import('@/pages/Communication/SyncTest/SyncTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'attrs-listeners',
        component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'children-parent',
        component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'scope-slot',
        component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
        meta: {
          isHideFooter: true
        },
      }
    ],
  },
  {
    path:'/center',
    component:Center,
    children:[
      {
        path:'mycenter',
        component:Mycenter
      },
      {
        path:'groupcenter',
        component:GroupCenter
      },
      {
        path:'',
        redirect:'mycenter'
      }
    ]
  },
  {
    path:'/paysuccess',
    component:PaySuccess,
    beforeEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      if(from.path !== '/pay'){
        next(false)
      }else{
        next()
      }
    },
  },
  {
    path:'/pay',
    component:Pay,
    beforeEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      if(from.path !== '/trade'){
        next(false)
      }else{
        next()
      }
    },
  },
  {
    path:'/trade',
    component:Trade,
    beforeEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      if(from.path === '/shopcart'){
        console.log(1111111111)
        next()
      }else{
        console.log()
        next(false)
      }
    },
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/addcartsuccess', 
    component:AddCartSuccess,
    beforeEnter: (to, from, next) => {
      // ...
      let skuNum = to.query.skuNum
      let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
      if(skuNum && skuInfo){
        next()
      }else{
        next('/login')
      }
    }
  },
  {
    path:'/detail/:goodsId',
    component:Detail
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/login',
    component:Login,
    meta:{
      isHide:true
    }
  },
  {
    path:'/register',
    component:Register,
    meta:{
      isHide:true
    }
  },
  {
    name:'search',
    path:'/search/:keyword?',
    component:Search
  },
  {
    path:'/',
    redirect:'/home'
  },
]