<template>
  <div id="Cart">
    <CartNavBar></CartNavBar>
    <scroll class="content" :pullUp="true" ref="scroll">
      <CartList :cartList='cartList'></CartList>
    </scroll>
    <CartCounts :cartList='cartList'/>
  </div>
</template>

<script>
import CartNavBar from './childComps/CartNavBar'
import scroll from 'components/common/scroll/Scroll'
import CartList from './childComps/CartList'
import CartCounts from './childComps/CartCounts'

import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components:{
    CartNavBar,
    scroll,
    CartList,
    CartCounts,
  },
  computed:{
    ...mapGetters(['cartList']),
  //   total(){
  //     if(this.cartList.length===0) return '￥0.00'
  //     return '￥' + this.cartList.filter(item => item.checked).reduce((preValue, item) =>{
  //       return preValue + item.price * item.count;
  //     },0).toFixed(2)
  //   },
  //   goCount(){
  //     return this.cartList.filter( item => item.checked).length;
  //   },
  //   isSelectAll(){
  //     return !this.cartList.filter( item => !item.checked).length;
  //   }
  // },
  // // mounted(){
  // //   this.$refs.scroll.refresh()
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  #Cart{
    height: 100vh;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 93px;
    overflow: hidden;
  }
</style>
