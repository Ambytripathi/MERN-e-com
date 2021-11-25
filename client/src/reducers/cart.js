import * as actionType from '../constants/actionTypes';

const cartReducer = (state = { products: [], quantity: 0, total: 0, }, action) => {
    switch (action.type) {


        case actionType.ADD_TO_CART:

            return { ...state, products: [...state.products, action.data], quantity: state.quantity + 1, total: state.total + action.data.price * action.data.quantity };
        case actionType.INCREASE_QUANTITY:
            return { ...state, quantity: state.quantity + action.payload }
        default:
            return state;
    }
};

export default cartReducer;