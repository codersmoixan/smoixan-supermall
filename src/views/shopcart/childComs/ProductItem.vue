<template>
  <div class="product-item">
    <product-button class="pro-btn"></product-button>
    <div class="left">
      <img :src="product.img" alt="">
    </div>
    <div class="right">
      <p class="title">{{product.title}}</p>
      <p class="desc">{{product.desc}}</p>
      <div>
        <div class="price">{{product.lowNowPrice}}</div>
        <div class="num">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton'

  export default {
    name: "ProductItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      ProductButton
    }
  }
</script>

<style scoped>
  .product-item {
    display: flex;
    padding: 10px;
    height: 130px;
    border-bottom: 1px solid #eee;
  }
  .product-item .pro-btn {
    position: relative;
    top: 50%;
    margin-right: 5px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-high-text);
  }
  .product-item .left {
    width: 30%;
    overflow: hidden;
    border-radius: 10px;
  }

  .product-item .left img {
    width: 100%;
  }

  .product-item .right {
    padding: 5px 10px;
    width: 60%;
  }

  .product-item .right p {
    margin-bottom: 20px;
  }

  .product-item .right .title, .desc {
    overflow: hidden;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #000;
  }

  .product-item .right p.desc {
    font-size: 13px;
    color: var(--color-text);
  }

  .product-item .right > div {
    padding-top: 15px;
  }

  .product-item .right .price {
    float: left;
    color: var(--color-high-text);
  }

  .product-item .right .num {
    float: right;
  }
</style>