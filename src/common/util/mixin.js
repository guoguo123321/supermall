import {debounce} from './util'
export const Mixin = {
  data(){
    return{
      itemImageListener:null,
    }
  },
  mounted(){
    // 页面刷新高度
     // 2.事件的防抖
     let func = this.$refs.scroll.refresh;
     let refresh = debounce(func, 50);
    //  console.log('~~')
     this.itemImageListener = () => {
      //  3.事件的刷新
       refresh();
     }
    //  1.事件总线的接受
     this.$bus.$on("itemImageLoad", this.itemImageListener)
  },
  methods:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0);
    },
  }
}
