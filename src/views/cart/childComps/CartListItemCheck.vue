<template>
  <div class="cart-list-item-check">
    <div class="cart-list-treat">
      <div class="cart-list-treat-type" :class="{isCheckActive:checked}">
        <img src="~assets/img/cart/treat.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItemCheck',
  props:{
    checked:{
      type:Boolean,
      default:false
    }
  },
}
</script>

<style scoped>
  /* treat   CheckBox */
  .cart-list-item-check{
    display: flex;
    align-items: center;
  }
  .cart-list-treat{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .cart-list-treat-type {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid rgb(68, 68, 68);
    margin-right: 7px;

    padding-left: 2px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .isCheckActive{
    background-color: #f00;
  }
</style>
