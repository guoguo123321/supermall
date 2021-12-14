<template>
  <div class="profile-login">
    <div class="p-content">
      <div class="p-left">
        <div class="p-login">
          <div class="login">
            <img src="~assets/img/profile/login.png" alt="">
          </div>
        </div>
        <div class="register">
          <p>登录/注册</p>
          <div class="register-phone">
            <img src="~assets/img/profile/phone.png" alt="">
            <span>暂无绑定手机号</span>
          </div>
        </div>
      </div>
      <div class="profile-right"><img src="~assets/img/profile/right.png" alt=""></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfileLogin',
}
</script>

<style scoped>
  .profile-login {
    width: 100vw;
    height: 200px;
    background-color: var(--color-tint);
  }
  .p-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 15px 0 15px;
  }
  /* login图标 */
  .login {
    width: 70px;
    height: 70px;
    background-color: var(--color-background);
    border-radius: 50%;
    text-align: center;
    line-height: 105px;
  }
  .login img {
    width: 50px;
    height: 50px;
  }
  /* register */
  .register {
    color: var(--color-background);
    padding-left: 20px;
    line-height: 30px;
  }
  .register p:first-child{
    font-size: 24px;
  }
  .register-phone {
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  /* profile-right */
  .profile-right {
    color: var(--color-background);
  }
  .p-left{
    display: flex;
    align-items: center;
  }
</style>
