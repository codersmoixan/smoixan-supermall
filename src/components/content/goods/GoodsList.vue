<template>
  <div class="goods-item">
    <goods-list-item
      v-for="item in goodsList"
      :show-item="item" class="show-item">
    </goods-list-item>
  </div>
</template>

<script>

  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemImgLoad() {
        console.log('------');
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods-item {
    display: flex;
    padding: 5px;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
  }
</style>