<template>
  <div>
    <CategoryNavBar/>
    <CategoryBody/>
  </div>
</template>

<script>
import CategoryNavBar from './childComps/CategoryNavBar.vue'
import CategoryBody from './childComps/CategoryBody.vue'
export default {
  name: 'Category',
  components:{
    CategoryNavBar,
    CategoryBody,
  }
}
</script>

<style>

</style>
