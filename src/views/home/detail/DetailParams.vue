<template>
  <div v-if="Object.keys(itemParams).length !== 0">
    <div class="params-info">
      <div v-for="item3 in itemParams.rule.tables" class="params-item">
        <div v-for="item2 in item3" class="params-last">
          <span v-for="item in item2">{{item}}</span>
        </div>
      </div>
    </div>
    <div v-if="itemParams.info.images" class="params-image">
      <img :src="itemParams.info.images[0]" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParams',
    props:{
      itemParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .params-info {
    padding: 15px 10px 20px 20px;
    border-top: 4px solid rgb(219, 219, 219);
  }
  .params-item {
    display: flex;
    flex-direction: column;
  }
  .params-last {
    display: flex;
  }
  .params-last span {
    flex: 1;
    padding: 15px 0px;
    border-bottom: 1px solid rgba(180, 180, 180, .4);
  }
  .params-image {
    display: flex;
    padding: 0 15px;
    justify-content: center;
  }
  .params-image img{
    width: 92vw;
  }
</style>
