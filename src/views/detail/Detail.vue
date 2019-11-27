<template>
  <div class="detail">
    <detail-nav></detail-nav>
    <scroll class="content">
      <detail-swiper :topImages="topImages" class="banner"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shops-info :shops="shops"></detail-shops-info>
      <detail-info :detailInfo="detailInfo"></detail-info>
      <detail-param :goodsParam="goodsParam"></detail-param>
    </scroll>
  </div>
</template>

<script>

  import DetailNav from 'views/detail/childComs/DetailNav'
  import Scroll from 'components/common/scroll/Scroll'

  import DetailSwiper from './childComs/DetailSwiper'
  import DetailBaseInfo from './childComs/DetailBaseInfo'
  import DetailShopsInfo from './childComs/DetailShopsInfo'
  import DetailInfo from './childComs/DetailInfo'
  import DetailParam from './childComs/DetailParam'

  import {getDetail, Goods, Shops, GoodsParam} from 'network/detail'

  export default {
    name: "Detail",
    data() {
      return {
        id: null,
        topImages: [],
        goods: {},
        shops: {},
        detailInfo:{},
        goodsParam: {}
      }
    },
    created() {
      // 1. 保存传进来的 id
      this.id = this.$route.params.iid

      // 2. 请求 id 请求详情数据
      getDetail(this.id).then(res => {
        const data = res.result
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
      })
    },
    components: {
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopsInfo,
      DetailInfo,
      DetailParam,
      Scroll
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