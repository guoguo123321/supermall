<template>
  <div>
    <div class="data">
      {{currentIndex}}
      {{tabType}}
    </div>
    <GoodsList :goods='goodList[tabType].list'/>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList.vue'

import {getHomeGoods} from 'network/home.js'
export default {
  name: 'CategoryListRight',
  props:{
    currentIndex:{
      type:Number,
      default(){
        return Number;
      }
    }
  },
  data(){
    return{
      goodList:{
        'pop' : {page:0, list:[]},
        'new' : {page:0, list:[]},
        'sell': {page:0, list:[]},
      },
      tabType:'pop',
    }
  },
  components:{
    GoodsList,
  },
  created(){
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  updated(){
    switch(this.currentIndex){
      case 0:
        this.tabType = 'pop';
        break;
      case 1:
        this.tabType = 'new';
        break;
      case 2:
        this.tabType = 'sell';
        break;
    }
  },
  methods:{
    getHomeGoods(type){
      // console.log(this.goodList[type].page + 1)
      const page = this.goodList[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goodList[type].list.push(...res.data.data.list);
        // console.log(this.goods[type].list)
        // console.log(res.data.data.list)
        this.goodList[type].page += 1;
        // 上拉加载多次刷新
        // this.$refs.scroll.finishPullUp()
      })
    }
  },
}
</script>

<style scoped>
  .data{
    display: none;
  }
</style>
