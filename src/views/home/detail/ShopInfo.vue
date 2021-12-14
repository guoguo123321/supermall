<template>
  <div v-if='Object.keys(shopInfo).length !== 0'>
    <div class="shop-logo">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-info">
      <div class="shop-left">
        <div>
          <p>{{shopInfo.cSells | getSell}}</p>
          <p>总销量</p>
        </div>
        <div class="shop-left-last">
          <p>{{shopInfo.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <!-- <div class="shop-right" v-for="item in shopInfo.score"> -->
        <!-- <p>{{item.name}}</p>
        <div>{{item.score}}</div>
        <div>{{item.isBetter}}</div> -->
      <div class="shop-right">
        <div class="shop-right-inner">
          <div v-for="item in shopInfo.score" class="shop-right-info">
            <span>{{item.name}}</span>
            <span>{{item.score}}</span>
            <span class="shop-right-last" v-if="item.isBetter===false">低</span>
            <span class="shop-right-lastTwo" v-else>高</span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShopInfo',
    props:{
      shopInfo:{
        type:Object,
        default:{},
      }
    },
    filters:{
      getSell(num){
        if(num > 1000 && num < 10000){
         return Number(num/1000).toFixed(1) + '千'
        }else if(num > 10000){
          return Number(num/10000).toFixed(1) + '万'
        }
      }
    },
    data(){
      return{
        isSwiper:false
      }
    }
  }
</script>

<style scoped>
  .shop-logo {
    display: flex;
    align-items: center;
    padding: 25px 0 20px 10px;
  }
  .shop-logo img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 1px solid rgb(163, 163, 163);
    margin-right: 10px;
  }
  .shop-info {
    display: flex;
    justify-content: center;
  }
  .shop-left {
    flex: 1;
  }
  .shop-right {
    flex: 1;
  }
  .shop-left {
    display: flex;
  }
  .shop-left > div {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .shop-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: -10px; */
    font-size: 16px;
    text-align: center;
  }
  .shop-right .shop-right-inner{
    width: 80%;
  }
  .shop-right .shop-right-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    /* box-sizing: border-box;
    padding-left: 20px; */
  }
  .shop-left p:first-child{
    font-weight: 600;
    font-size: 22px;
  }
  .shop-left-last p{
    border-right: 1px solid rgb(151, 151, 151);
    padding-right: 14px;
  }
  .shop-left P{
    padding-top: 10px;
    font-size: 16px;
  }
  .shop-right-last,
  .shop-right-lastTwo {
    width: 20px;
    height: 20px;
    line-height: 21px;
    display: block;
    color: #fff;
  }
  .shop-right-last{
    background-color: rgb(34, 156, 71);
  }
  .shop-right-lastTwo{
    background-color: rgb(156, 34, 91);
    font-size: 16px;
  }
  /* btn */
  .btn {
    display: flex;
    justify-content: center;
    padding: 20px 0 30px 0;
    border-bottom: 4px solid rgba(202, 202, 202, .4);
  }
  .btn button{
    padding: 10px 25px;
    border: 0;
    background-color: rgb(204, 228, 252);
    border-radius: 10px;
    color: rgb(109, 109, 109);
  }
</style>
