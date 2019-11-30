<template>
  <div class="shopcart">
    <nav-bar class="shopcart-nav">
      <div slot="nav-center">购物车({{ shopNum }})</div>
    </nav-bar>
    <scroll class="content">
      <product-item v-for="item in cartList" :product="item" class="product-item"></product-item>
    </scroll>
    <product-bottom-nav class="bt-bar"></product-bottom-nav>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import ProductItem from './childComs/ProductItem'
  import ProductBottomNav from './childComs/ProductBottomNav'

  import {mapGetters} from 'vuex'

  export default {
    name: "ShopCart",
    data() {
      return{
        shopNum: 0
      }
    },
    computed: {
      ...mapGetters({
        cartList: 'cartList',
        cartListLength: 'cartListLength'
      })
    },
    components: {
      NavBar,
      ProductItem,
      ProductBottomNav,
      Scroll
    }
  }
</script>

<style scoped>
  .shopcart {
    position: relative;
    height: 100vh;
  }
  .shopcart-nav {
    background-color: var(--color-high-text);
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 93px;
    left: 0;
    right: 0;
  }
  .product-item {

  }
  .shopcart .bt-bar {
    position: fixed;
    bottom: 49px;
  }
</style>