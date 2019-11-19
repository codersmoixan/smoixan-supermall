<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">购物街</div>
    </nav-bar>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import HomeSwiper from './HomeSwiper'
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper
    }
  }
</script>

<style scoped>

</style>