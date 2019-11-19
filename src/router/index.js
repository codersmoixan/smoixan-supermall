import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入组件
const Home = () => import('views/home/Home')
const CateGory = () => import('views/category/Category')
const ShopCart = () => import('views/shopcart/ShopCart')
const Profile = () => import('views/profile/Profile')


Vue.use(VueRouter)

const router =new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: CateGory
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode:'history'
})

export default router