<template>
  <div class="bottom-bar">
    <div class="customer" @click="clickCustomer">
      <img v-if="!isCustomer" src="~assets/img/detail/customer.png" alt="客服">
      <img v-else src="~assets/img/detail/customer_active.png" alt="客服">
      <p>客服</p>
    </div>
    <div class="shop" @click="clickShop">
      <img v-if="!isShop" src="~assets/img/detail/shop.png" alt="店铺">
      <img v-else src="~assets/img/detail/shop_active.png" alt="店铺">
      <p>店铺</p>
    </div>
    <div class="collect" @click="clickCollect">
      <img v-if="!isCollect" src="~assets/img/detail/collect.png" alt="收藏">
      <img v-else src="~assets/img/detail/collect_active.png" alt="收藏">
      <p>收藏</p>
    </div>
    <div class="cart" @click="addCar">
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    data(){
      return{
        isCustomer:false,
        isShop:false,
        isCollect:false,
      }
    },
    methods:{
      clickCustomer(){
        return this.isCustomer = !this.isCustomer
      },
      clickShop(){
        return this.isShop = !this.isShop
      },
      clickCollect(){
        return this.isCollect = !this.isCollect
      },
      // 加入购物车
      addCar(){
        this.$emit('addCart');
      }
    },
    props:{
    }
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 14px;

    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(255, 255, 255);
  }
  .customer,
  .shop,
  .collect{
    flex-grow: 5;
    margin-top: 2px;
  }
  .customer img,
  .shop img,
  .collect img{
    width: 25px;
    height: 25px;
  }
  .cart{
    flex-grow: 1;
    font-size: 18px;
    line-height: 49px;

    background-color: rgb(236, 213, 0);
  }
  .buy {
    flex-grow: 10;
    font-size: 18px;
    line-height: 49px;

    background-color: rgb(250, 92, 134);
    color: rgb(255, 255, 255);
  }
</style>
