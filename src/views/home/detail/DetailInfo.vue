<template>
  <div class="detail-detail" v-if="Object.keys(detailInfo).length !== 0">
    <div class="detail-left">
      <div class="detail-dot"></div>
      <span class="detail-line"></span>
    </div>

    <!-- <div class="detail-image">新款</div> -->
    <div class="detail-desc">{{detailInfo.desc}}</div>

    <div class="detail-right">
      <div class="detail-dot dot"></div>
      <span class="detail-line"></span>
    </div>

    <div class="detail-image-key">{{detailInfo.detailImage[0].key}}</div>
    <div v-for="item in detailInfo.detailImage[0].list" class="detail-image-image">
      <img :src="item" alt="" @load="detailInfoImage">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailInfo',
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
      }
    },
    methods:{
      detailInfoImage(){
        this.$emit('detailInfoImage')
      }
    }
  }
</script>

<style scoped>
  .detail-detail{
    position: relative;
  }
  .detail-left{
    padding-top: 15px;
    padding-left: 10px;
  }
  .detail-dot{
    width: 8px;
    height: 8px;
    background-color: rgba(24, 24, 24, .8);
  }
  .detail-line{
    display: block;
    width: 100px;
    height: 10px;
    border-top: 2px solid rgba(24, 24, 24, .8);
  }
  .detail-right{
    position: absolute;
    right: 10px;
  }
  .dot {
    position: absolute;
    top:-6px;
    right: 0;
  }
  /* detail-image */
  .detail-image{
    padding: 10px 0 10px 15px;
  }
  .detail-image-key {
    font-size: 16px;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 15px;
  }
  .detail-image-image{
    display: flex;
    justify-content: center;
  }
  .detail-image-image img {
    width: 100vw;
  }
  .detail-desc {
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    line-height: 30px;
  }
</style>
