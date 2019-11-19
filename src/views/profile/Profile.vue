<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="nav-center">个人信息</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "Profile",
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>