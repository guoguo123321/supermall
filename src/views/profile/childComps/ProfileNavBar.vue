<template>
  <div>
    <NavBar class="Profile-Nav-Bar"><div slot="center">我的档案</div></NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'ProfileNavBar',
  components:{
    NavBar,
  }
}
</script>

<style scoped>
  .Profile-Nav-Bar {
    background-color: var(--color-tint);
    color: var(--color-background);
    font-size: 18px;
  }
</style>
