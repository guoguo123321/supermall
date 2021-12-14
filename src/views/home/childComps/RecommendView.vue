<template>
  <div class="recommend-control">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props:{
      recommends:Array,
      default(){
        return [];
      }
    }
  }
</script>

<style>
  .recommend-control {
    display: flex;
    width: 100%;
  }
  .recommend-item {
    flex: 1;
    text-align: center;
    font-size: 12px;
    padding: 14px 10px;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
  }
  .recommend-item p {
    padding-top: 4px;
  }
</style>
