<template>
  <div class="category-list">
    <span v-for="(item, index) in list"
     :class="{activeList: currentIndex==index}"
      @click="listClick(index)"
      >{{item}}</span>
  </div>
</template>

<script>

export default {
  name: 'CategoryListLeft',
  data(){
    return {
      list:['正在流行','新款','热销','裙子','内衣','女鞋','男友','包包','运动','配饰','美妆','个护','家属','女装','男装','美甲','时尚','冬季'],
      currentIndex:0,
    }
  },
  components:{
  },
  methods:{
    listClick(index){
      this.currentIndex = index;
      this.$emit('currentIndex',index);
    }
  }
}
</script>

<style scoped>
  .category-list {
    width: 30vw;
    display: flex;
    flex-direction: column;
  }
  span {
    background-color: rgba(233, 233, 233, 0.5);
    text-align: center;
    padding: 15px 0;
    font-weight: 600;
  }
  /* active */
  .activeList {
    color: var(--color-hight-text);
    background-color: var(--color-background);
    border-left: 5px solid rgb(255, 129, 152);
    /* box-sizing: border-box; */
  }
</style>
