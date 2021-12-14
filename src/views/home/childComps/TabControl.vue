<template>
  <div  class="tab-view">
    <div v-for="(item, index) in titles" class="tab-item">
      <span :class="{active: currentIndex == index}"
      @click='itemClick(index)'>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props:{
      titles:Array,
      default(){
        return []
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        // 把值传给home
        this.$emit('tabClick', index);
      }
    }
  }
</script>

<style>
  .tab-view {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 44px;
    /* position: sticky;
    top: 44px; */
    background-color: var(--color-background);
    z-index: 9;
  }
  .tab-view .tab-item {
    flex: 1;
    text-align: center;
  }
  .tab-view span {
    padding: 0 3px 5px;
  }
  .active {
    border-bottom: 2px solid #f00;
    color: #F00;
  }
</style>
