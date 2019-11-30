const actions =  {
  addCartList(context, payload) {
    let oldProduct = context.state.carList.find(item => item.id === payload.id)

    if(oldProduct) {
      context.commit('addCount', oldProduct)
    }else {
      context.commit('addProduct', payload)
    }
    // state.carList.push(layLoad)
  }
}

export default actions