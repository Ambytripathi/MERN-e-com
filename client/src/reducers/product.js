import * as actionType from '../constants/actionTypes';

const productReducer = (state = { products: [], product: [] }, action) => {
    switch (action.type) {
        case actionType.FETCH_ALL_PRODUCTS:
            return { ...state, products: action.payload.data };

        case actionType.FETCH_PRODUCTS_BY_CAT:

            return { ...state, products: action.payload.data };
        case actionType.FETCH_PRODUCT_BY_ID:

            return { ...state, product: action.payload.data }

        default:
            return state;
    }
};

export default productReducer;