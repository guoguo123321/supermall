<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUp:{
        type:Boolean,
        default:false
      },
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType:this.probeType,
        pullUpLoad:this.pullUp
      })
      // 滚动
      this.scroll.on('scroll', (position) => {
        this.$emit('scrollPosition',position)
        // console.log(position)
      }),
      // 上拉加载，只执行一次，需要调用scroll.finishPullUp
      this.scroll.on('pullingUp', () => {
        // console.log('上拉加载')
        this.$emit('pullingUpLoad')
      })
    },
    // activated()
    methods:{
      // 回到顶部
      scrollTo(x, y, time=500){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      // 图片加载完成后，scroll刷新高度
      refresh(){
        // console.log('~~~~~')
        this.scroll && this.scroll.refresh()
      },
      finishPullUp(){
        // console.log(0)
        this.scroll && this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>
  /* .wrapper { */
    /* height: 100vh; */
  /* } */

</style>
