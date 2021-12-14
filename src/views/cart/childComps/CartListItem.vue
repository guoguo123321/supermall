<template>
  <div class="cart-list-item">
    <CartListItemCheck :checked="item.checked"  @click.native="CheckBoxClick"></CartListItemCheck>
    <!-- <div class="cart-list-treat">
      <div class="cart-list-treat-type" :class="{isCheckActive:item.checked}" @click="CheckBoxClick">
        <img src="~assets/img/cart/treat.png" alt="">
      </div>
    </div> -->
    <div class="cart-item-img">
      <img :src="item.image" alt="">
    </div>
    <div class="cart-item-span">
      <p>{{item.title}}</p>
      <p>{{item.desc}}</p>
      <div class="cart-item-info">
        <span>￥{{item.price}}</span>
        <span>x{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartListItemCheck from './CartListItemCheck.vue'
export default {
  name: 'CartListItem',
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    CheckBoxClick(){
      this.item.checked = !this.item.checked
    }
  },
  updated(){
    // console.log(typeof(this.item.checked))
    // console.log(this.item)
  },
  components:{
    CartListItemCheck,
  }
}
</script>

<style scoped>
    /* treat   CheckBox */
    /* .cart-list-treat{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .cart-list-treat-type {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid rgb(68, 68, 68);
    margin-right: 6px;
    display: flex;
    align-content: center;
  }
  .isCheckActive{
    background-color: #f00;
  } */
  /*  */
  .cart-list-item{
    padding: 15px 10px 15px 5px;
    display: flex;
    width: 100vw;
    border-bottom: 1px solid rgb(116, 116, 116);
  }
  .cart-item-img img{
    width: 100px;
    height: 120px;
    border-radius: 5px;
  }
/*  */
  .cart-item-span {
    padding: 10px 15px 0 10px;
  }
  .cart-item-span p{
    width: 58vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 15px;
  }
  .cart-item-span p:first-child{
    font-size: 22px;
    font-weight: 700;
  }
  .cart-item-span p:last-of-type{
    font-size: 14px;
    color: rgb(116, 116, 116);
  }
  /* 价格 */
  .cart-item-info {
    padding: 15px 0 0 0;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
  .cart-item-info span:first-child {
    color: var(--color-high-text);
    font-size: 20px;
  }
</style>
