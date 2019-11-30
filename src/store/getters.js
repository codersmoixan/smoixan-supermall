const getters = {
  cartList(state) {
    return state.carList
  },
  cartListLength(state) {
    return state.carList.length
  }
}

export default getters