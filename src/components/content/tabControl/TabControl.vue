<template>
  <div class="control">
    <div class="control-item"
         v-for="(item, index) in controlItem"
         @click="itemClick(index)"
         :class="{active: currentIndex === index}">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      controlItem: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index) // 将当前点击的 index 值发送到外面
      }
    }
  }
</script>

<style scoped>
  .control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
  }
  .control .control-item {
    width: 33%;
  }
  .control .control-item span {
    padding: 3px;
  }
  .active {
    color: var(--color-high-text)
  }
  .control-item.active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>