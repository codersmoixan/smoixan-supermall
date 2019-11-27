<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        bscroll: null
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      },100)
    },
    methods: {
      _initScroll() {
        // 1. 创建 BSscroll
        this.bscroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        })

        // 2. 事件滚动
        if(this.probeType === 2 || this.probeType === 3) {
          this.bscroll.on('scroll', position => {
            // 将即时捕获到的坐标发送出去
            this.$emit('scrollPosition', position)
          })
        }

        // 3. 上拉加载
        if(this.pullUpLoad) {
          this.bscroll.on('pullingUp', () => {
            this.$emit('pullingUp')
          })
        }
      },
      _scrollTo(x, y, time = 500) {
        this.bscroll && this.bscroll.scrollTo(x, y, time)
      },
      _finishedPullUp() { // 重复加载数据
        this.bscroll && this.bscroll.finishPullUp()
      },
      _refresh() {
        // 重新加载计算滚动的高度
        this.bscroll && this.bscroll.refresh()
      },
      _getScrollY() {
        return this.bscroll.y ? this.bscroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>