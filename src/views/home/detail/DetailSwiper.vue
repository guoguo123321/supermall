<template>
  <Swiper class="swiper-swiper">
    <SwiperItem v-for="item in swiperImage">
      <img :src="item" alt="" @load='swiperLoad'>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index.js';

  export default {
    name: 'DetailSwiper',
    props:{
      swiperImage:{
        type:Array,
        default:Array,
      }
    },
    data(){
      return{
        isSwiper:false
      }
    },
    components:{
      Swiper,
      SwiperItem,
    },
    methods:{
      swiperLoad(){
        if(!this.isSwiper){
          // console.log('swiper加载完成')
          this.$emit('swiperLoad')
          this.isSwiper = true
        }
      }
    }
  }
</script>

<style scoped>
  .swiper-swiper{
    height: 300px;
    /* overflow: hidden; */
  }
</style>
