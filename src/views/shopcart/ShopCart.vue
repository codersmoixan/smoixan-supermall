<template>
  <div class="shopcart">
    <nav-bar class="shopcart-nav">
      <div slot="nav-center">购物车({{ shopNum }})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "ShopCart",
    data() {
      return{
        shopNum: 0
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>