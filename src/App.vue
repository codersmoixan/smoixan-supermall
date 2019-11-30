<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view class="view"></router-view></keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/tabbar/MainTabItem'
  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
@import "assets/css/base.css";

</style>
