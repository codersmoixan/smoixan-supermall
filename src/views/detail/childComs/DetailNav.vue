<template>
  <nav-bar class="detail-nav">
    <div slot="nav-left" class="nav-back" @click="clickBack">
      <img src="~assets/images/common/back.svg" alt="">
    </div>
    <div slot="nav-center" class="nav-box">
      <div v-for="(item, index) in detailData" class="nav-item" @click="itemClick(index)" :class="{active: index === currentIndex}">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "NetailNv",
    data() {
      return {
        detailData: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      clickBack() {
        this.$router.back()
      },
      itemClick(index) {
        this.currentIndex = index
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-box {
    display: flex;
    background-color: #fff;
    font-size: 13px;
  }
  .nav-back {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .nav-back img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .nav-item {
    flex: 1;
    color: var(--color-text);
  }
  .active {
    color: var(--color-high-text);
  }
</style>