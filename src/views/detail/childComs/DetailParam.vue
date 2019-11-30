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
          <td class="td-item td-one"><span>{{item.key}}</span></td>
          <td class="td-item td-two item-alone"><span>{{item.value}}</span></td>
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
      // console.log(this.goodsParam)
    }
  }
</script>

<style scoped>
  .detail-param {
    padding-bottom: 20px;
    border-bottom: 4px solid #f4f6f9;
  }
  .sizes,.infos {
    padding: 5%;
  }
  .sizes table {
    /*display: flex;*/
    width: 100%;
  }
  .sizes .size-item .td-item {
    width: 24%;
  }
  .detail-param .infos table {
    width: 100%;
  }
  .detail-param .td-item {
    padding: 10px;
    height: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    font-size: 13px;
  }
  .detail-param .td-item.td-one {
    width: 25%;
  }
  .item-alone {
    color: var(--color-high-text);
  }
</style>