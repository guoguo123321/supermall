<template>
  <div class="DetailNavBar">
    <NavBar>
      <div slot="left" class="leftDir" @click='back'>
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="middle">
        <div class="item" v-for='(item, index) in titles'
        @click.stop='titleItemClick(index)'>

        <span
          class="item-span"
          :class="{activeSpan:currentIndex==index}">{{item}}
        </span>
      </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    name: 'DetailNavBar',
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0,
      }
    },
    methods:{
      titleItemClick(index){
        this.currentIndex = index;
        // console.log('顶部',this.currentIndex)
        // 发送事件出去联动页面
        this.$emit('navBarIndex', index)
      },
      back(){
        this.$router.back()
      }
    },
    components:{
      NavBar,
    },
  }
</script>

<style scoped>
  .DetailNavBar {
    height: 44px;
    background-color: #fff;
    position: relative;
    z-index: 9;
  }
  .middle{
    display: flex;
  }
  .item {
    flex: 1;
  }
  .leftDir{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .leftDir img{
    line-height: 44px;
  }
  .item span{
    padding: 0 2px 5px;
  }
  .activeSpan {
    color: var(--color-high-text);
    /* border-bottom: 2px solid #f00; */
  }
</style>
