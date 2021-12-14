import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const Home = () => import('views/home/Home.vue')
const HomeDetail = () => import('../views/home/detail/Detail.vue')

const Cart = () => import('views/cart/Cart.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')


export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    // 首页
    {
      path: '/home',
      component:Home,
    },
    {
      path: '/detail/:iid',
      component:HomeDetail
    },
    // 分类
    {
      path: '/category',
      component:Category,
    },
    {
      path: '/cart',
      component:Cart,
    },
    {
      path: '/profile',
      component:Profile
    },
  ],
  mode:'history'
})
