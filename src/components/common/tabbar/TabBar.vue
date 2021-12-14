<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
}
</script>

<style>
  .tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* z-index: 9; */

    height: 49px;
    box-shadow: 0 1px 2px rgb(153, 153, 153);
    background-color: #f6f6f6;
    display: flex;
  }
</style>
