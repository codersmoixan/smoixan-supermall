<template>
  <div class="zj-swiper">
    <div class="swiper-box" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="swiper-list">
      <h1>{{  }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    data() {
      return {
        slideCount: 0, // 元素个数
        totalWidth: 0, // swiper 宽度
        currentIndex: 1, // 当前的index
        scrolling: false // 是否在滚动
      }
    },
    mounted() {
      setTimeout(function() {

      },100)
    },
    methods: {
      touchStart() {
        // console.log('touchStart')
      },
      touchMove() {
        // console.log('touchMove')
      },
      touchEnd() {
        // console.log('touchEnd')
      },
      // swiperImgLength() {
      //   // 获取轮播图数量
      //   let swiperEl = document.querySelector('.swiper-box')
      //   let swiperImg = swiperEl.getElementsByClassName('zj-slide')
      //   this.slideCount = swiperImg.length
      //   console.log(swiperEl)
      // }
    }
  }
</script>

<style scoped>
  .zj-swiper {
    width: 100%;
    overflow: hidden;
  }
  .swiper-box {
    width: 400%;
  }
</style>