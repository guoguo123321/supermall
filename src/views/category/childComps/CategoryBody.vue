<template>
  <div class="category-body">
    <!-- 左边 -->
    <scroll class="contentLeft" :pullUp="true" :probeType="3">
      <CategoryListLeft @currentIndex='currentIndex'/>
    </scroll>
    <!-- 右边 -->
    <scroll class="contentRight" :pullUp="true" :probeType="3" ref="scroll">
      <CategoryListRight :currentIndex='currentIndexRight'/>
    </scroll>
  </div>
</template>

<script>
import CategoryListLeft from './CategoryListLeft.vue'
import CategoryListRight from './CategoryListRight.vue'
import scroll from 'components/common/scroll/Scroll.vue'

// import {debounce} from 'common/util/util'
import {Mixin} from 'common/util/mixin.js'
export default {
  name: 'CategoryBody',
  data(){
    return{
      currentIndexRight:0
    }
  },
  mixins:[Mixin],
  components:{
    CategoryListLeft,
    CategoryListRight,
    scroll,
  },
  methods:{
    currentIndex(index){
      this.currentIndexRight = index;
    },
  }
}
</script>

<style scoped>
  .category-body {
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  /* scroll */
  .contentLeft {
    position: absolute;
    top: 2px;
    bottom: 0px;
    overflow: hidden;
  }
  .contentRight {
    width: 70vw;
    position: absolute;
    left: 30vw;
    top: 2px;
    bottom: 0px;
    overflow: hidden;
  }
</style>
