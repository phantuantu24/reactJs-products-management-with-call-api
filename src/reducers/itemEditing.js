import * as Types from '../constants/ActionTypes'

const initialState = {}

const itemEditing = (state = initialState, action) => {
    const { product } = action
    switch (action.type) {
        case Types.EDIT_PRODUCTS:
            state = product
            console.log(product)
            return state;
        default:
            return state;
    }
}

export default itemEditing