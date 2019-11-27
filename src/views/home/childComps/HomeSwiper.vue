<template>
  <div class="zj-home-swiper">
    <swiper>
      <swiper-item v-for="item in banner">
        <a href="javascript:;">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props: {
      banner: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isImgLoad: true
      }
    },
    methods: {
      imgLoad() {
        if(this.isImgLoad) {
          this.$emit('swiperImageLoad')
          this.isImgLoad = false
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>