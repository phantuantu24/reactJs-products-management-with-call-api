import * as Types from '../constants/ActionTypes'

const initialState = [
  {
    id: 1,
    name: 'Iphone X',
    price: 5000,
    status: true
  },
  {
    id: 2,
    name: 'Samsung Galaxy s8',
    price: 2500,
    status: false
  },
  {
    id: 3,
    name: 'Oppo F1s',
    price: 500,
    status: true
  },
]

const products = (state = initialState, action) => {
  switch (action.tpee) {
    default:
      return [...state]
  }
}

export default products