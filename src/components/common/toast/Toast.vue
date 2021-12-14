<template>
  <div class="toast" v-show="isShowToast">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return{
      isShowToast:false,
      message:''
    }
  },
  methods:{
    show(message='默认文字', duration=2000){
      this.isShowToast = true;
      this.message = message;
      setTimeout(() => {
        this.isShowToast = false;
        this.message = '';
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: rgba(0, 0, 0, .8);
    color: var(--color-background);
    padding: 5px 10px;
    font-size: 20px;
    border-radius: 5px;
    z-index: 999;
  }
</style>
