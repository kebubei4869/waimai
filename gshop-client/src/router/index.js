/*路由器对象模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
//四个路由组件需要配置
import Msite from '../pages/Msite/Msite.vue'/*<!--首页组件 vue-->*/
import Order from '../pages/Order/Order.vue'/*<!--订单组件 vue-->*/
import Profile from '../pages/Profile/Profile.vue'/*<!--个人组件 vue-->*/
import Search from '../pages/Search/Search.vue'/* <!--搜索组件 vue-->*/
import Login from '../pages/Login/Login.vue'/* <!--登录组件 vue-->*/


/*声明使用插件*/
Vue.use(VueRouter)

export default new VueRouter({
  /*映射成路由*/
  routes:[
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login
    },


  ]
})

