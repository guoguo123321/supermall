<template>
  <div class="good-list">
    <GoodsListItem v-for="item in goods" :good="item"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem.vue'
  export default {
    name: 'GoodsList',
    components:{
      GoodsListItem,
    },
    props:{
      goods:Array,
      default(){
        return []
      }
    }
  }
</script>

<style>
  .good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: var(--color-background);

    padding: 2px;
  }
</style>
