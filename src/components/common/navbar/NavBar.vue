<template>
  <div id="nav_bar">
    <div class="nav-left"><slot name="nav-left"></slot></div>
    <div class="nav-center"><slot name="nav-center"></slot></div>
    <div class="nav-right"><slot name="nav-right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  #nav_bar {
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #ff5777;
    color: #fff;
    font-size: 16px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .2)
  }
  .nav-left,
  .nav-right {
    width: 60px;
  }
  .nav-center {
    flex: 1;
  }
</style>