<template>
  <div class="cart-counts">
    <div class="cart-all" @click="SelectAll">
      <CartListItemCheck class="CheckButton" :checked="isSelectAll"/>
      <span>全选</span>
    </div>
    <div class="allTotal">合计：{{total}}</div>
    <div class="counts" @click='calcTotal'>去结算（{{goCount}}）</div>
  </div>
</template>

<script>
import CartListItemCheck from './CartListItemCheck'
export default {
  name: 'CartCounts',
  props:{
    cartList:{
      type:Array,
      default(){
        return []
      }
    },
  },
  components:{
    CartListItemCheck,
  },
  methods:{
    checkAll(){
      console.log(11)
    },
    SelectAll(){
      if(this.isSelectAll){
        this.cartList.forEach( item => {
          return item.checked = false;
        })
      }else{
        this.cartList.forEach( item => {
          return item.checked = true;
        })
      }
    },
    calcTotal(){
      if(!this.isSelectAll){
        this.$toast.show('请先选择商品', 2000)
      }
    }
  },
  computed:{
    total(){
      if(this.cartList.length===0) return '￥0.00'
      return '￥' + this.cartList.filter(item => item.checked).reduce((preValue, item) =>{
        return preValue + item.price * item.count;
      },0).toFixed(2)
    },
    goCount(){
      return this.cartList.filter( item => item.checked).length;
    },
    // 监听全选状态，如果有一个不选中，全选按钮就不选中
    isSelectAll(){
      if(this.cartList.length === 0) return false;
      return !this.cartList.filter( item => !item.checked).length;
    }
  },
}
</script>

<style scoped>
  .cart-counts{
    display: flex;
    background-color: rgb(224, 224, 224);
    height: 44px;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    line-height: 44px
  }
  .cart-all{
    display: flex;
  }
  .CheckButton{
    padding-left: 15px;
  }
  .allTotal{
    padding-left: 30px;
  }
  .counts{
    padding: 0 20px;
    background-color: var(--color-high-text);
    color: var(--color-background);
    position: absolute;
    right: 0;
  }
</style>
