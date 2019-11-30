<template>
  <div class="detail">
    <detail-nav @buttonClick="buttonClick" :current-index="currentIndex"></detail-nav>
    <scroll class="content" ref="scroll"
            @scrollPosition="scrollPosition"
            :probe-type="3">
      <detail-swiper :topImages="topImages" class="banner"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shops-info :shops="shops"></detail-shops-info>
      <detail-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-info>
      <detail-param :goodsParam="goodsParam" ref="param"></detail-param>
      <detail-comment :goodsComments="goodsComments" ref="comment"></detail-comment>
      <detail-recommend :goodsList="recommedsList" ref="recommend"></detail-recommend>
    </scroll>
    <detail-bottom-nav @addCart="addCart"></detail-bottom-nav>
    <back-top v-show="isShow" @click.native="clickTop"></back-top>
  </div>
</template>

<script>

  import DetailNav from 'views/detail/childComs/DetailNav'

  import Scroll from 'components/common/scroll/Scroll'
  import DetailRecommend from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import DetailSwiper from './childComs/DetailSwiper'
  import DetailBaseInfo from './childComs/DetailBaseInfo'
  import DetailShopsInfo from './childComs/DetailShopsInfo'
  import DetailInfo from './childComs/DetailInfo'
  import DetailParam from './childComs/DetailParam'
  import DetailComment from './childComs/DetailComment'
  import DetailBottomNav from './childComs/DetailBottomNav'

  import {getDetail, getRecommend, Goods, Shops, GoodsParam} from 'network/detail'

  export default {
    name: "Detail",
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        shops: {},
        detailInfo:{},
        goodsParam: {},
        goodsComments: {},
        recommedsList: [],
        isShow: false,
        themeTops: [],
        currentIndex: 0
      }
    },
    created() {
      // 1. 保存传进来的 id
      this.id = this.$route.params.iid

      // 2. 请求 id 请求详情数据
      this._getDetail(this.id)

      // 3. 请求详情页的推荐数据
      this._getRecommend()
    },
    methods: {
      imgLoad() {
        // 1. 每次加载完图片之后重新计算页面高度
        this.$refs.scroll._refresh()

        // 2. 获取焦点组件的坐标位置
        this.themeTops = []
        let paramTop = this.$refs.param.$el.offsetTop
        let commentTop = this.$refs.comment.$el.offsetTop
        let recommend = this.$refs.recommend.$el.offsetTop
        this.themeTops.push(0, paramTop, commentTop, recommend, Number.MAX_VALUE)

      },
      _getDetail(iid) {
        getDetail(iid).then(res => {
          const data = res.result
          console.log(data)
          // 1. 获取轮播图数据
          this.topImages = data.itemInfo.topImages

          // 2. 获取商品详情数据
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo)

          // 3. 获取店铺数据
          this.shops = new Shops(data.shopInfo)

          // 4. 保存商品的详细数据
          this.detailInfo = data.detailInfo;

          // 5. 获取衣服详细规格
          this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)

          // 6. 获取评论信息
          this.goodsComments = data.rate
        })
      },
      _getRecommend() {
        getRecommend().then(res => {
          this.recommedsList = res.data.list
        })
      },
      scrollPosition(position) {
        this.isShow = (-position.y) > 1000

        // 监听滚动到某个主题
        this.listenScrollTheme(-position.y)
      },
      clickTop() {
        this.$refs.scroll._scrollTo(0, 0)
      },
      buttonClick(index) {
        this.$refs.scroll._scrollTo(0, -this.themeTops[index])
      },
      listenScrollTheme(position) {
        let length = this.themeTops.length
        for(let i = 0; i < length -1; i++) {
          // 获取每个组件的坐标
          let iPosition = this.themeTops[i]

          if(position >= iPosition && position < this.themeTops[i + 1]) {
            if(this.currentIndex !== i) {
              this.currentIndex = i
            }
            break
          }
        }
      },
      addCart() {
        const productData = {}
        productData.id = this.id
        productData.img = this.topImages[0]
        productData.title = this.goods.title
        productData.lowNowPrice = this.goods.lowNowPrice
        productData.desc = this.goods.desc

        // console.log(productData)
        this.$store.dispatch('addCartList', productData)
      }
    },
    components: {
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopsInfo,
      DetailInfo,
      DetailParam,
      DetailComment,
      DetailRecommend,
      DetailBottomNav,
      Scroll,
      BackTop
    }
  }
</script>

<style scoped>
  #hy-swiper {
    height: 300px;
  }
  .detail {
    position: relative;
    padding-bottom: 49px;
    height: 100vh;
  }
  .detail .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>