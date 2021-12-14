<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home' activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/home/home.png" alt="">
        <img slot="item-active" src="~assets/img/tabbar/home/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/category/category.png" alt="">
        <img slot="item-active" src="~assets/img/tabbar/category/category_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/cart/cart.png" alt="">
        <img slot="item-active" src="~assets/img/tabbar/cart/cart_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor="red">
        <img slot="item-icon" src="~assets/img/tabbar/profile/profile.png" alt="">
        <img slot="item-active" src="~assets/img/tabbar/profile/profile_active.png" alt="">
        <div slot="item-text">用户</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'App',
  components:{
    'tab-bar':TabBar,
    'tab-bar-item':TabBarItem
  }
}
</script>

<style>
@import url('~assets/css/base.css');
</style>
