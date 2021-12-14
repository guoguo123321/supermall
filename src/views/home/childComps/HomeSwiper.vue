<template>
  <div>
    <Swiper>
        <SwiperItem v-for="item in banners">
          <a :href="item.link">
            <img :src="item.image" alt="" @load='swiperLoad'>
          </a>
        </SwiperItem>
      </a>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

  export default {
    name: 'HomeSwiper',
    data(){
      return{
        isSwiper:false
      }
    },
    components:{
      Swiper,
      SwiperItem,
    },
    props:{
      banners:Array,
      default(){
        return [];
      }
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

<style>
</style>
