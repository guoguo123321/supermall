<template>
  <div>
    <NavBar class="car-nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'CartNavBar',
  components:{
    NavBar,
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
  .car-nav-bar {
    background-color: var(--color-hight-text);
    color: var(--color-background);
  }
</style>
