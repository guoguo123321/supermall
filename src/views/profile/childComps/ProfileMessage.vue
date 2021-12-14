<template>
  <div class="profile-message">
    <div class="message">
      <img src="~assets/img/profile/envelope.png" alt="">
      <div>我的消息</div>
    </div>
    <div class="message">
      <img src="~assets/img/profile/integral.png" alt="">
      <div>积分商城</div>
    </div>
    <div class="message vip">
      <img src="~assets/img/profile/vip.png" alt="">
      <div>会员卡</div>
    </div>
    <div class="message">
      <img src="~assets/img/profile/cart.png" alt="">
      <div>我的购物车</div>
    </div>
    <div class="message">
      <img src="~assets/img/profile/app.png" alt="">
      <div>下载购物APP</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfileMessage',
  components:{
  }
}
</script>

<style scoped>
  .message{
    display: flex;
    align-items: center;
  }
  .message img{
    padding-right: 15px;
    padding: 10px 10px 10px 15px;
  }
  .message div{
    flex: 1;
    padding-top: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(216, 216, 216, .5);
  }
  .vip {
    border-bottom: 15px solid rgba(216, 216, 216, .5);
  }
</style>
