<template>
  <div id="profile">
    <ProfileNavBar/>
    <ProfileLogin/>
    <ProfileBalance/>
    <ProfileMessage/>
  </div>
</template>

<script>
import ProfileNavBar from './childComps/ProfileNavBar'
import ProfileLogin from './childComps/ProfileLogin.vue'
import ProfileBalance from './childComps/ProfileBalance.vue'
import ProfileMessage from './childComps/ProfileMessage.vue'
export default {
  name: 'Profile',
  components:{
    ProfileNavBar,
    ProfileLogin,
    ProfileBalance,
    ProfileMessage,
  }
}
</script>

<style scoped>

</style>
