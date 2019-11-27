import {request} from './request'

// 1. 轮播图数据
export function getMuliData() {
  return request({
    url: '/home/multidata'
  })
}

// 2. 商品数据
export function getHomeGoods(type, page) {
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}