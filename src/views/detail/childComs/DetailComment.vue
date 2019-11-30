<template>
  <div class="detail-comment" v-if="Object.keys(goodsComments).length !== 0">
    <div class="comment-top">
      <span class="left">用户评价</span>
      <span class="right">更多</span>
    </div>
    <div class="comment-content">
      <div class="user-name">
        <img :src="goodsComments.list[0].user.avatar" alt="">
        <span>{{goodsComments.list[0].user.uname}}</span>
      </div>
      <div class="user-content">
        <div class="text">
          <span>{{goodsComments.list[0].content}}</span>
        </div>
        <div class="date">
          <span>{{goodsComments.list[0].created | showDate(goodsComments.list[0].created)}}</span>
          <span>{{goodsComments.list[0].style}}</span>
        </div>
        <div class="comment-img" v-if="goodsComments.list[0].images">
          <img :src="item" alt="" v-for="item in goodsComments.list[0].images">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'

  export default {
    name: "DetailComment",
    props: {
      goodsComments: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        let date = new Date(value * 1000)
        return formatDate(date, 'yyyy-MM-ddd hh:mm')
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 20px;
    border-bottom: 4px solid #f4f6f9;
  }
  .detail-comment .comment-top {
    border-bottom: 1px solid #f4f6f9;
  }
  .comment-top {
    height: 40px;
    color: #000;
  }
  .comment-content {
    padding-top: 10px;
  }
  .user-content .text {
    font-size: 13px;
  }
  .comment-content .user-name img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .comment-content .user-name span {
    margin-left: 10px;
  }
  .user-content {
    padding-top: 10px;
  }
  .user-content .date {
    padding-top: 10px;
  }
  .user-content .date span {
    margin-right: 10px;
    font-size: 13px;
  }
  .comment-img {
    padding-top: 10px;
  }
  .comment-img img {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
</style>