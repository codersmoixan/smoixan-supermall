<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="" :title="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    padding-bottom: 5px;
    border-bottom: 5px solid #eee;
  }
  .recommend-item {
    margin: 5px 5px;
    width: 23%;
  }
  .recommend-item img {
    width: 100%;
  }
  .recommend-item p {
    padding: 5px 0;
    font-size: 13px;
    text-align: center;
  }
</style>