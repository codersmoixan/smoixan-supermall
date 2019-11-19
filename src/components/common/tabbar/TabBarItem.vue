<template>
  <div class="tab-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive"><slot name="item-icon"></slot></div>
    <div class="item-active-icon" v-else><slot name="item-active-icon"></slot></div>
    <div class="item-text" :style="itemFontColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>

  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      itemFontColor() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        if(this.path !== this.$route.path) {
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-item {
    flex: 1;
    text-align: center;
  }
  .tab-item img {
    margin: 3px 0;
    width: 24px;
    vertical-align: middle;
  }
</style>