<template>
  <div id="home">
    <nav-bar class="home-cart"><div slot="center">购物街</div></nav-bar>
    <TabControl
        :titles="['流行','新款','精选']"
        @tabClick='tabClick'
        class='tab-control'
        ref='tabControl2'
        v-show='isShowTabControl'/>

    <scroll class="content" ref="scroll"
    :probeType="3"
    @scrollPosition='scrollPosit'
    :pullUp='true'
    @pullingUpLoad='loadMore'>
      <HomeSwiper :banners='banners' @swiperLoad='swiperLoad'></HomeSwiper>
      <RecommendView :recommends='recommends'></RecommendView>

      <FeatrueView></FeatrueView>
      <TabControl
        ref='tabControl1'
        :titles="['流行','新款','精选']"
        @tabClick='tabClick'/>
      <GoodsList :goods='goods[tabType].list'></GoodsList>
    </scroll>
    <BackTop @click.native='backTop' v-show="isShow"></BackTop>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from './childComps/HomeSwiper.vue';
  import RecommendView from './childComps/RecommendView.vue';
  import TabControl from './childComps/TabControl.vue';
  import GoodsList from 'components/content/goods/GoodsList.vue';
  import Scroll from 'components/common/scroll/Scroll.vue'
  import BackTop from 'components/content/backtop/BackTop.vue'

  import FeatrueView from './childComps/FeatrueView.vue'
  import {debounce} from 'common/util/util.js'

  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import {Mixin} from 'common/util/mixin.js'
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,

      FeatrueView,
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods: {
          'pop' : {page:0, list:[]},
          'new' : {page:0, list:[]},
          'sell': {page:0, list:[]},
        },
        tabType:'pop',
        isShow:false,
        tabControlOffsetTop:0,
        isShowTabControl:false,
        // 记录状态
        scrollY:0,
        // itemImageListener:null,
      }
    },
    mixins:[Mixin],
    created(){
      /**
       * 事件相关相关的代码
      */


      /**
       * 网络请求相关的代码
      */
      // 将created方法抽取到methods里面抽取到methods里面--获取banner和recommend数据
      this.getHomeMultidata();
      // 商品流行、新款、精选
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    mounted(){
      // // 事件总线--接收
      // let func = this.$refs.scroll.refresh;
      // let refresh = debounce(func, 50);
      // // console.log(refresh)
      // this.itemImageListener = () => {
      //   refresh();
      // }
      // this.$bus.$on("itemImageLoad", this.itemImageListener)
    },
    activated(){
      // this.$refs.scroll.scroll.y = this.scrollY;
      // let func = this.$refs.scroll.refresh;
      // let refresh = debounce(func, 50);
      // // console.log(refresh)
      // this.itemImageListener = () => {
      //   refresh();
      // }
      // this.$bus.$on("itemImageLoad", this.itemImageListener)
      // console.log('活跃', this.scrollY)
      this.$refs.scroll.scroll.y = this.scrollY;
      this.$refs.scroll.refresh()
    },
    deactivated(){
      // console.log(this.$refs.scroll.scroll.y)
      this.scrollY = this.$refs.scroll.scroll.y
      // console.log(this.scrollY)
      // 离开的时候取消事件发射
      this.$bus.$off('itemImageLoad' ,this.itemImageListener)
    },
    methods: {
       /**
       * 事件相关相关的代码
      */
      // 获取tabControl的offsetTop的距离
      swiperLoad(){
        // console.log('swiper加载')
        // console.log(this.$refs.tabControl1.$el.offsetTop);
        this.tabControlOffsetTop = this.$refs.tabControl1.$el.offsetTop;
      },
      // backTop(){
      //   this.$refs.scroll.scrollTo(0,0)
      // },
      scrollPosit(position){
      // 置顶按钮的显示与隐藏
       this.isShow = -(position.y) > 1000;

      //tabControl的显隐
      this.isShowTabControl = -(position.y) > this.tabControlOffsetTop
      },
      // 上拉加载
      loadMore(){
        // console.log('加载',this.tabType)
        this.getHomeGoods(this.tabType)
      },
      tabClick(index){
        // console.log(this.tabType)
        switch(index){
          case 0:
            this.tabType = 'pop';
            // console.log(this.tabType)
          break;
          case 1:
            this.tabType = 'new';
            // console.log(this.tabType)
          break;
          case 2:
            this.tabType = 'sell';
            // console.log(this.tabType)
          break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },

      /**
       * 网络请求相关的代码
      */
    //  --获取goods数据
      getHomeGoods(type){
        // 一进来，page + 1
        const page = this.goods[type].page + 1;
        // console.log(page)
        getHomeGoods(type, page).then(res => {
          // console.log(res.data.data.list)
          this.goods[type].list.push(...res.data.data.list);
          // 执行完 + 1
          this.goods[type].page += 1;

          // 上拉加载多次刷新
          this.$refs.scroll.finishPullUp()
        })
      },
      // 将created方法抽取到methods里面--获取banner和recommend数据
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      }
    }
  }
</script>

<style scoped>
  @import url('~assets/css/base.css');
  #home {
    /* padding-top: 44px; */
    height: 100vh;
  }
  .home-cart {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .content {
    /* height: 300px; */
    /* overflow: hidden; */
    /* height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px; */
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  .tab-control {
    position: relative;
    margin-top: 44px;
  }
</style>
