<template>
  <div class="good-list-item" @click="itemClick">
      <img :src="showItem.show.img" alt="" @load="imgLoad">
      <div class="goods-info">
        <p class="title">{{showItem.title}}</p>
        <span class="price">{{showItem.price}}</span>
        <span class="cfav">{{showItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      showItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemImeLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.showItem.iid)
        // console.log(this.showItem)
      }
    }
  }
</script>

<style scoped>
  .good-list-item {
    padding: 5px;
    width: 50%;
    font-size: 12px;
    text-align: center;
  }
  .good-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .good-list-item .goods-info {
    position: relative;
  }
  .goods-info .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-info .price {
    color: var(--color-high-text);
  }
  .good-list-item .cfav:before {
    content: '';
    display: inline-block;
    margin-left: 10px;
    margin-right: 2px;
    width: 13px;
    height: 13px;
    line-height: 14px;
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  }
</style>