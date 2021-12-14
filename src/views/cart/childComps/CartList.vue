<template>
  <div class="car-item">
    <CartListItem v-for="item in cartList" :item="item"></CartListItem>
  </div>
</template>

<script>
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  props:{
    cartList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    CartListItem,
  },
}
</script>

<style scoped>

</style>
