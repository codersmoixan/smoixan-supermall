<template>
  <div class="pro-bt-nav">
    <product-button class="btn"></product-button>
    <span>全选</span>
    <span class="total-price">合计: ¥</span>
    <div class="buy-product">去计算()</div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton'
  export default {
    name: "ProductBottomNav",
    components: {
      ProductButton
    }
  }
</script>

<style scoped>
  .pro-bt-nav {
    padding-left: 20px;
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: #eee;
    box-shadow: 0 -0.53333vw 0.8vw rgba(0, 0, 0, .2);;
  }
  .btn {
    position: relative;
    top: 50%;
    margin-right: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-high-text);
  }
  .total-price {
    margin-left: 20px;
  }
  .buy-product {
    position: absolute;
    right: 0;
    width: 25%;
    text-align: center;
    background-color: orangered;
    color: #fff;
  }
</style>