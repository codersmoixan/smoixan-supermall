<template>
  <div class="zj-home-swiper">
    <swiper>
      <swiper-item>
        <a href="javascript:;">
          <img src="~assets/images/swiper/zj-1.webp" alt="">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="javascript:;">
          <img src="~assets/images/swiper/zj-2.webp" alt="">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="javascript:;">
          <img src="~assets/images/swiper/zj-3.webp" alt="">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="javascript:;">
          <img src="~assets/images/swiper/zj-4.webp" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    data() {
      return {
        swiperImg: [
          {
            title: 'zj-1',
            path: 'assets/images/swiper/zj-1.webp'
          },
          {
            title: 'zj-2',
            path: 'assets/images/swiper/zj-2.webp'
          },
          {
            title: 'zj-3',
            path: 'assets/images/swiper/zj-3.webp'
          },
          {
            title: 'zj-4',
            path: 'assets/images/swiper/zj-4.webp'
          }
        ]
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
.zj-home-swiper {
  margin-top: 44px;
}
</style>