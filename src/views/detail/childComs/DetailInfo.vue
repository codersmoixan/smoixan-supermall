<template>
  <div class="detail-param">
    <div class="param-desc clear-fix">
      <div class="first"></div>
      <div class="desc"><span>{{detailInfo.desc}}</span></div>
      <div class="last"></div>
    </div>
    <div class="param-effect" v-if="Object.keys(detailInfo).length !== 0">
      <div class="text">
        <span>{{detailInfo.detailImage[0].key}}</span>
      </div>
      <div class="effect-img">
        <img :src="item" alt="" v-for="item in detailInfo.detailImage[0].list">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParam",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-param {
    margin-bottom: 50px;
  }
  .param-desc .first,.last {
    width: 100px;
    height: 1px;
    border-bottom: 1px solid #a3a3a5;
  }
  .param-desc .first {
    margin-top: 20px;
    transform: translateX(20%);
  }
  .param-desc .desc {
    padding: 10px 20px 20px 20px;
    font-size: 13px;
  }
  .param-desc .last {
    margin-left: 100%;
    transform: translateX(-120%);
  }
  .param-desc .first:before,.last:after {
    content: '';
    position: relative;
    display: block;
    width: 5px;
    height: 5px;
    background-color: #000;
  }
  .param-desc .first:before {
    top: -4px;
  }
  .param-desc .last:after {
    top: -4px;
    left: 100%;
    transform: translateX(-100%);
  }
  .param-effect .text {
    padding: 20px;
    color: #000;
  }
  .param-effect .effect-img img {
    width: 100%;
  }
</style>