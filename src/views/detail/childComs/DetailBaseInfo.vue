<template>
  <div class="goods-info" v-if="Object.keys(goods).length !== 0">
    <div class="title">
      <span>{{goods.title}}</span>
    </div>
    <div class="price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="activity">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <div v-for="index in goods.columns.length - 1">
        <span>{{goods.columns[index - 1]}}</span>
      </div>
      <div><span>{{goods.services[goods.services.length - 1].name}}</span></div>
    </div>
    <div class="services">
      <div v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="">
        <span>{{goods.services[index - 1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {

      }
    },
    created() {

    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 10px 0;
  }
  .goods-info .title {
    padding: 5px;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: var(--color-text-two);
  }
  .price {
    position: relative;
    padding: 5px;
  }
  .price > span {
    margin: 0 5px;
  }
  .price .new-price {
    color: var(--color-high-text);
    font-size: 24px;
  }
  .price .old-price {
    text-decoration: line-through;
    font-size: 13px;
  }
  .price .activity {
    position: absolute;
    top: 3px;
    padding: 3px 10px;
    color: #fff;
    background: #ff5777;
    border-radius: 10px;
    font-size: 10px;
  }
  .goods-info .columns {
    display: flex;
    padding: 20px 0 10px 0;
    margin: 0 10px;
    border-bottom: 1px solid #ccc;
  }
  .columns div {
    flex: 1;
    text-align: center;
    font-size: 13px;
  }
  .goods-info .services {
    display: flex;
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .goods-info .services div {
    flex: 1;
    text-align: center;
  }
  .services div img {
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  .services div span {
    font-size: 13px;
    line-height: 20px;
  }
</style>