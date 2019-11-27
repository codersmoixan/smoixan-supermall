<template>
  <div class="shops-info">
    <div class="shops-name">
      <img :src="shops.logo" alt="">
      <span>{{shops.name}}</span>
    </div>
    <div class="shops-middle">
      <div class="middle-left">
        <div class="left">
          <span class="num">{{getNum}}万</span>
          <span class="text">总销量</span>
        </div>
        <div class="right">
          <span class="num">{{shops.goodsCount}}</span>
          <span clas="text">全部宝贝</span>
        </div>
      </div>
      <div class="middle-right">
        <table>
          <tr v-for="item in shops.score">
            <td><span>{{item.name}}</span></td>
            <td><span :class="{'isBetterColor': item.isBetter}">{{item.score}}</span></td>
            <td><span class="better" :class="{'isBetter': item.isBetter}">{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shops-go">
      <div><span>进店逛逛</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopsInfo",
    props: {
      shops: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        isBetter: true
      }
    },
    computed: {
      getNum() {
        return parseInt(this.shops.sells / 1000) / 10
      }
    }
  }
</script>

<style scoped>
  .shops-info {
    padding-bottom: 10px;
    border-bottom: 3px solid #f2f5f8;
  }
  .shops-name {
    padding: 10px;
  }
  .shops-name img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .shops-name span {
    padding-left: 15px;
  }
  .shops-middle {
    padding: 10px;
    width: 100%;
    display: flex;
    font-size: 12px;
    text-align: center;
    color: #000;
  }
  .shops-middle > div{
    flex: 1;
  }
  .shops-middle .middle-left > div {
    padding: 10px;
  }
  .shops-middle .middle-left .right {
    border-right: 1px solid #ccc;
  }
  .shops-middle div span {
    display: block;
    margin: 5px
  }
  .shops-middle div span.num {
    font-size: 20px;
  }
  .middle-right table{
    padding-left: 30px;
  }
  .shops-go {
    margin-left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #f2f5f8;
    font-size: 13px;
    border-radius: 10px;
  }
  .better {
    width: 13px;
    height: 13px;
    color: #fff;
    background-color: #5ea732;
  }
  .middle-right span.isBetter {
    background-color: #f13e3a;
  }
  .middle-right span.isBetterColor {
    color: #f13e3a;
  }
</style>