<template>
  <div class="profile-balance">
    <div class="balance">
      <p>
        <span class="price">0.00</span>
        <span>元</span>
      </p>
      <p>我的余额</p>
    </div>
    <div class="discount">
      <p>
        <span class="price">0</span>
        <span>个</span>
      </p>
      <p>我的优惠</p>
    </div>
    <div class="integral">
      <p>
        <span class="price">0</span>
        <span>分</span>
      </p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBalance',
}
</script>

<style scoped>
  .profile-balance {
    display: flex;
    justify-items: center;

    border-bottom: 15px solid rgba(216, 216, 216, .5);
  }
  .balance,
  .discount,
  .integral{
    padding: 20px 30px;
    border-right: 1px solid rgb(216, 216, 216);
  }
  .balance .price,
  .discount .price,
  .integral .price{
    font-size: 24px;
    color: var(--color-high-text);
  }
  .balance p,
  .discount p,
  .integral p{
    padding-bottom: 8px;
    text-align: center;
  }
  .integral{
    border-right:0px;
  }
</style>
