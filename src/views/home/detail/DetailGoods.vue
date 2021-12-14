<template>
  <div v-if="Object.keys(goods).length !== 0">
    <!-- {{goods}} -->
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if='goods.discount !== ""' class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-columns">
      <span>{{goods.columns[0]}}</span>
      <span class="columns-center">{{goods.columns[1]}}</span>
      <span class="columns-right">{{goods.services[this.goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <div v-for="(item, index) in goods.services" class="info-services-item">
        <img v-if="item.icon !== ''" :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoods',
    props:{
      goods:{
        type:Object,
        default:{},
      }
    },
  }
</script>

<style scoped>
  .info-title {
    padding: 15px 10px 15px 10px;
    font-weight: 600;
    font-size: 24px;
  }
  .info-price span {
    margin-left: 10px;
  }
  .n-price {
    font-size: 32px;
    color: var(--color-hight-text);
  }
  .o-price {
    font-size: 14px;
    text-decoration: line-through;
    color: rgba(165, 165, 165, 0.8);
  }
  .discount {
    font-size: 14px;
    background-color: var(--color-hight-text);
    color: #fff;
    border-radius: 15px;
    padding: 5px;
    text-align: center;
    position: relative;
    top: -12px;
    left: 5px;
  }
  /* columns */
  .info-columns {
    display: flex;
    color: rgba(141, 141, 141, 0.9);
    justify-content: space-evenly;
    padding: 20px 10px 0px 10px;
  }
  .info-columns span{
    flex: 1;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(202, 202, 202, .6);
    font-size: 12px;
  }
  .columns-center {
    text-align: center;
  }
  .columns-right {
    text-align: right;
  }
  /* services */
  .info-services img{
    width: 12px;
    height: 12px;
  }
  .info-services span {
    font-size: 12px;
  }
  .info-services {
    display: flex;
    justify-content: space-between;
    padding: 17px 10px 15px 10px;
    border-bottom: 4px solid rgba(202, 202, 202, .4);
  }
  .info-services-item {
    text-align: center;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
</style>
