<template>
  <div class="detail-param" v-if="Object.keys(goodsParam).length !== 0">
    <div class="sizes">
      <table>
        <tr v-for="item in goodsParam.sizes[0]" class="size-item">
          <td v-for="iitem in item" class="td-item"><span>{{iitem}}</span></td>
        </tr>
      </table>
    </div>
    <div class="infos">
      <table>
        <tr v-for="item in goodsParam.infos">
          <td class="td-item"><span>{{item.key}}</span></td>
          <td class="td-item item-alone"><span>{{item.value}}</span></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParam",
    props: {
      goodsParam: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        size: {}
      }
    },
    created() {
      console.log(this.goodsParam)
    }
  }
</script>

<style scoped>
  .sizes,.infos {
    padding: 5%;
  }
  .sizes .size-item {

  }
  .detail-param .td-item {
    width: 24%;
    padding: 10px;
    height: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .item-alone {
    color: var(--color-high-text);
  }
</style>