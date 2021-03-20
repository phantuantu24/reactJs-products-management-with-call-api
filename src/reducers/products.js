import * as Types from '../constants/ActionTypes'

const initialState = []

const products = (state = initialState, action) => {
  var index = -1
  const { id } = action
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      state = action.products
      return [...state]
    case Types.DELETE_PRODUCTS:
      index = findIndexById(state, id)
      if (index !== -1) {
        state.splice(index, 1)
      }
      return [...state]
    default:
      return [...state]
  }
}

const findIndexById = (products, id) => {
  var result = -1
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index
    }
  });
  return result
}

export default products