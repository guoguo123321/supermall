<template>
  <div id="detail">
    <DetailNavBar @navBarIndex='navBarIndex' ref="navBar"/>
    <Scroll class="content" :probeType='3' :pullUp='true' ref='scroll' @scrollPosition='scrollPosition'
     @commentImage='commentImage'>
     <!-- <ul v-for="item in $store.state.cartList">
      <li>{{item}}</li>
    </ul> -->
      <DetailSwiper
       :swiperImage='swiperImage'
        @swiperLoad='swiperLoad'/>
      <DetailGoods :goods='goods'/>
      <ShopInfo :shopInfo='shopInfo'/>
      <DetailInfo :detailInfo='detailInfo' @detailInfoImage='detailInfoImage'/>
      <DetailParams :itemParams='itemParams' ref='paramsRef'/>
      <Comment :comment='comment' ref='commentRef'/>
      <BusRecommend ref='recommendsRef'/>
      <GoodsList :goods='recommends'/>
    </Scroll>
    <BackTop @click.native='backTop' v-show="isShow"></BackTop>
    <DetailBottomBar @addCart='addCart'/>
    <!-- <Toast :message='message' :isShowToast='isShowToast'/> -->
  </div>
</template>

<script>
  import DetailNavBar from './DetailNavBar.vue';
  import DetailSwiper from './DetailSwiper.vue';
  import DetailGoods from './DetailGoods.vue';
  import Scroll from 'components/common/scroll/Scroll.vue'
  import ShopInfo from './ShopInfo.vue'
  import DetailInfo from './DetailInfo.vue'
  import BackTop from 'components/content/backtop/BackTop.vue'
  import Comment from './Comment.vue'
  import DetailParams from './DetailParams.vue'
  import BusRecommend from './BusRecommend.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import DetailBottomBar from './DetailBottomBar.vue'
  // import Toast from 'components/common/toast/Toast.vue'

  import {getDetail, Goods, ShopInfoGoods, getRecommend} from 'network/detail.js'
  import {debounce} from 'common/util/util.js'
  import {Mixin} from 'common/util/mixin.js'
  export default {
    name: 'Detail',
    data(){
      return{
        iid:null,
        swiperImage:[],
        goods:{},
        shopInfo:{},
        detailInfo:{},
        comment:{},
        itemParams:{},
        recommends:[],

        // itemImageListener:null,
        isShow: false,
        ThemeTopYs:[],
        currentIndex:0,

        // toast
        // message:'',
        // isShowToast:false,
      }
    },
    mixins:[Mixin],
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailGoods,
      Scroll,
      ShopInfo,
      DetailInfo,
      BackTop,
      Comment,
      DetailParams,
      BusRecommend,
      GoodsList,
      DetailBottomBar,
      // Toast,
    },
    methods:{
      swiperLoad(){
        this.$refs.scroll.refresh()
      },
      detailInfoImage(){
        let func = this.$refs.scroll.refresh;
        let refresh = debounce(func, 50);
        refresh();

        // 1、联动--顶部距离
        this.ThemeTopYs=[];
        this.ThemeTopYs.push(0);
        // console.log(this.$refs.params.$el.offsetTop)
        this.ThemeTopYs.push(this.$refs.paramsRef.$el.offsetTop);
        this.ThemeTopYs.push(this.$refs.commentRef.$el.offsetTop);
        this.ThemeTopYs.push(this.$refs.recommendsRef.$el.offsetTop);
        // 首先先增加一个最大值
        this.ThemeTopYs.push(Number.MAX_VALUE);
        // this.$refs.navBar.currentIndex = this.currentIndex;
        // console.log(this.currentIndex)
      },
      // 按钮返回顶部
      // backTop(){
      //   this.$refs.scroll.scrollTo(0,0);
      // },
      // 滚动获取位置
      scrollPosition(position){
        this.isShow = -(position.y) > 1000;
        // console.log(position)

        // 鼠标点击移动进行的联动
        // console.log(this.ThemeTopYs)
        let py = -(position.y);
        let len = this.ThemeTopYs
        // console.log(len.length)
        // [0, 7938, 9120, 9452, Number.MAX_VALUE]
        for(let i = 0; i < len.length; i++){
          // 不等的情况下才会执行
          if((this.currentIndex !== i) && (py >= len[i] && py <= len[i+1])){
            // console.log(len.length )
            this.currentIndex = i;
            this.$refs.navBar.currentIndex = this.currentIndex;
            // console.log('侧边', this.currentIndex)
          }
        }
      },
      // 评论图片加载完成
      commentImage(){
        this.$refs.scroll.refresh()
      },
      // 点击navBar页面联动
      navBarIndex(index){
        // console.log(index)
        // 2、联动---滚动到相应位置
        this.$refs.scroll.scrollTo(0, -this.ThemeTopYs[index], 300)
        // this.$refs.navBar.currentIndex = this.currentIndex;
        // console.log(this.$refs.navBar.currentIndex)
      },
      // 加入购物车
      addCart(){
        // let cartList=[]
        const product = {};
        product.image = this.swiperImage[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        // cartList.push(product)
        // this.$store.commit('addCart', product);
        this.$store.dispatch('addCart', product).then((res) => {
          this.$toast.show(res, 2000)
          // console.log(this.$toast, res)
          // this.message = res,
          // this.isShowToast = true,
          // setTimeout(()=>{
          //   this.message = '',
          //   this.isShowToast = false
          // },2000)
        })
        // for(let key of cartList){
        //   console.log(key)
        // }
        // console.log(product)
      }
    },
    created(){
      this.iid = this.$route.params.iid,
      // 轮播图
      getDetail(this.iid).then((res) => {
        console.log(res);
        let data = res.data.result;
        // console.log(res.data.result.itemInfo.topImages)
        // 轮播图
        this.swiperImage = data.itemInfo.topImages;

        // 商品goods
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 商家信息
        this.shopInfo = new ShopInfoGoods(data.shopInfo)

        // 衣服展示
        this.detailInfo = data.detailInfo;

        // 衣服尺寸参数
        this.itemParams = data.itemParams;
        // console.log(this.itemParams)
        // 评论信息
        this.comment = data.rate;
      })
      // 推荐商品
      getRecommend().then((res) => {
        // this.recommends = new Recommend(res.data.data.list);
        this.recommends = res.data.data.list;

        // console.log(res.data.data);
        // console.log(this.recommends)
      })
    },
    mounted(){
      // // 事件总线--接收
      // let func = this.$refs.scroll.refresh;
      // let refresh = debounce(func, 50);
      // // console.log(refresh)
      // this.itemImageListener = () => {
      //   refresh();
      // }
      // this.$bus.$on('itemImageLoad', this.itemImageListener)
    },
    destroyed(){
      this.$bus.$off('itemImageLoad' ,this.itemImageListener)
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    background-color: #fff;
    overflow: hidden;
    /* z-index: 8; */
    /* height: calc(100% - 44px);
    background-color: #fff;
    overflow: hidden; */
  }
</style>
