<template>
  <div class="detail-bottom-nav">
    <div class="nav-left">
      <div class="icon-customer">
        <i class="icon-one"></i>
        <span>客服</span>
      </div>
      <div class="icon-shop">
        <i class="icon-two"></i>
        <span>店铺</span>
      </div>
      <div class="icon-collect">
        <i class="icon-three"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="nav-right">
      <div class="cart" @click="addCart"><span>加入购物车</span></div>
      <div class="buy"><span>购买</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BottomNav",
    methods: {
      addCart() {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-nav {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    height: 49px;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0 -1px 0 rgba(100, 100, 100, .2);;
  }
  .detail-bottom-nav > div {
    width: 50%;
  }
  .nav-left {
    display: flex;
    padding-top: 5px;
  }
  .nav-left div {
    width: 33%;
    text-align: center;
    font-size: 14px;
  }
  .nav-left i {
    display: block;
    margin-left: 50%;
    margin-bottom: 3px;
    transform: translateX(-50%);
    width: 22px;
    height: 22px;
    background: url('~assets/images/detail/detail_bottom.png')0 0 / 100%;
  }
  .nav-left .icon-one {
    background-position-y: -52px;
  }
  .nav-left .icon-two {
    background-position-y: -97px;
  }
  .nav-left .icon-three {
    background-position-y: 2px;
  }

  .nav-right {
    display: flex;
  }
  .nav-right div {
    width: 50%;
    height: 100%;
    text-align: center;
  }
  .nav-right div::before{
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
  .nav-right .cart {
    background: #ffe817;
    color: #000;
  }
  .nav-right .buy {
    background: var(--color-high-text);
    color: #fff;
  }

</style>