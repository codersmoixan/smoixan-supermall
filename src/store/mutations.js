const mutations =  {
  // 已有商品数量加一
  addCount(state, payload) {
    payload.count ++
  },
  addProduct(state, payload) {
    payload.count = 1
    state.carList.push(payload)
  }
}

export default mutations