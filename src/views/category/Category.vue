<template>
  <div class="category">
    <nav-bar class="category-nav">
      <div slot="nav-center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "Category",
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>