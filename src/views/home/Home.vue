<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="nav-center">购物街</div>
    </nav-bar>
    <tab-control :control-item="['流行', '新款', '精选']"
                 class="home-control-one"
                 @tabClick="tabClick"
                 v-show="isControlShow" ref="tabControlOne"></tab-control>
    <scroll class="content"
            :probe-type="3"
            @scrollPosition="scrollPosition"
            ref="scroll"
            @pullingUp="loadMore"
            :pullUpLoad="true">
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommeds"></recommend-view>
      <feature-view></feature-view>
      <tab-control :control-item="['流行', '新款', '精选']"
                   class="home-control-two"
                   @tabClick="tabClick"
                   ref="tabControlTwo"></tab-control>
      <goods-list :goods-list="showGoodList"></goods-list>
    </scroll>
    <back-top v-show="isShow" @click.native="clickBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'

  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'


  import {getMuliData, getHomeGoods} from "network/home"; // 首页的网络请求

  export default {
    name: "Home",
    data() {
      return {
        banner: [], // 存放轮播图数据
        recommeds:[],
        goods: {
          'pop': { page: 1, list: [] },
          'new': { page: 1, list: [] },
          'sell': { page: 1, list: []}
        },
        currentType: 'pop',
        isShow: false,
        isControlShow: false,
        tabOffsetTop: 0,
        currentY: 0
      }
    },
    created() {
      // 1. 请求轮播图数据
      this._getMuliData()

      // 2. 请求商品数据
      this._getHomeGoods('pop')
      this._getHomeGoods('new')
      this._getHomeGoods('sell')
    },
    mounted() {
      // 1. 图片加载完毕之后重新计算滚动高度
      this.$bus.$on('itemImgLoad', () => {
        this.$refs.scroll._refresh()
      })
    },
    activated() {
      // 2. 重新获得热点的时候页面和失去热点时候的页面位置一致
      this.$refs.scroll._scrollTo(0, this.currentY, 0)
      this.$refs.scroll._refresh()
      // console.log(this.currentY)
    },
    deactivated() {
      // 1. 失去热点的时候保存当前滚动的位置
      this.currentY = this.$refs.scroll._getScrollY()
      // console.log(this.currentY)
    },
    methods: {

      /**
       * 事件监听
       * */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }

        // 使两个导航所选中的为相同按钮
        this.$refs.tabControlOne.currentIndex = index
        this.$refs.tabControlTwo.currentIndex = index
      },
      scrollPosition(position) {
        // 1. 当滚动到特定位置 显示元素
        this.isShow = (-position.y) > 1000

        // 2. 当滚动到特定位置 显示导航
        this.isControlShow = (-position.y) > this.tabOffsetTop
      },
      clickBackTop() {
        this.$refs.scroll._scrollTo(0, 0)
      },
      loadMore() {
        this._getHomeGoods(this.currentType) // 上拉之后加载新的数据
      },
      swiperImageLoad() {
        // 获取 tabControl 的当前坐标值
        this.tabOffsetTop = this.$refs.tabControlTwo.$el.offsetTop
      },

      /**
       * 请求数据的方法
       * */
      _getMuliData() {
        getMuliData().then(res => {
          this.banner = res.data.banner.list
          this.recommeds = res.data.recommend.list
        })
      },
      _getHomeGoods(type) {
        // 1. 获取页码
        const page = this.goods[type].page
        getHomeGoods(type, page).then(res => {
          // 2. 获取到的数据保存在数组中
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // 加载更多数据
          this.$refs.scroll._finishedPullUp()
        })
      }
    },
    computed: {
      showGoodList() {
        return this.goods[this.currentType].list
      }
    },
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      HomeSwiper,
      RecommendView,
      FeatureView,
      BackTop
    }
  }
</script>

<style scoped>
  .home {
    position: relative;
    height: 100vh;
  }
  .home .home-nav {
    background-color: var(--color-high-text);
  }
  .home .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .home .home-control-one {
    position: relative;
    z-index: 9;
  }
</style>