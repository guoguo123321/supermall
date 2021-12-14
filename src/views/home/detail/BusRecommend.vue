<template>
  <div>
    <div class="business-recommend" ref='recommendsRef'><span>---- 商家推荐 ----</span></div>
  </div>
</template>

<script>
  export default {
    name: 'BusRecommend',
    props:{
    }
  }
</script>

<style scoped>
    .business-recommend{
    display: flex;
    border-bottom: 2px solid rgba(99, 99, 99, 0.4);
  }
  .business-recommend span{
    flex: 1;
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    padding: 15px 0;
  }
</style>
