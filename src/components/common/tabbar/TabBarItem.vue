<template>
  <div class="tab-bar-item" @click='itemClick'>
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div :style="isStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    // 点击时改变活跃
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // 点击时改变文字颜色
    isStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    // 点击时把路劲放上去
    itemClick(){
      return this.$router.replace(this.path);
    }
  }
}
</script>

<style>
  .tab-bar-item{
    text-align: center;
    font-size: 14px;
    flex: 1;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    align-items: center;
    margin-top: 2px;
  }
</style>
