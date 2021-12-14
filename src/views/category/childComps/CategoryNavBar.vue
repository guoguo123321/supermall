<template>
  <div>
    <NavBar class="Category-Nav-Bar"><div slot="center">商品分类</div></NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'CategoryNavBar',
  components:{
    NavBar,
  }
}
</script>

<style scoped>
  .Category-Nav-Bar {
    background-color: var(--color-tint);
    color: var(--color-background);
    font-size: 18px;
  }
</style>
