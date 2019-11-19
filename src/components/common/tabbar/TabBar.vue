<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab_bar {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0 1px -1px rgba(100, 100, 100, .2);
  }
</style>