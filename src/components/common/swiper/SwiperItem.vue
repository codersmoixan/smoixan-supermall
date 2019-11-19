<template>
  <div class="zj-slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "SwiperItem"
  }
</script>

<style scoped>
  .zj-slide {
    float: left;
    width: 25%;
    flex-shrink: 0;
  }
  .zj-slide img {
    width: 100%;
  }
</style>