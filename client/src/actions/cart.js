// addProduct: (state, action) => {
//     state.quantity += 1;
//     state.products.push(action.payload);
//     state.total += action.payload.price * action.payload.quantity;
//   },


import { ADD_TO_CART, UPDATE_CART } from '../constants/actionTypes';


export const addProductCart = (data) => async (dispatch) => {
    try {


        dispatch({ type: ADD_TO_CART, payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const UpdateCart = (data) => async (dispatch) => {

    try {
        dispatch({ type: UPDATE_CART, payload: data })

    } catch (error) {
        console.log(error)

    }

}
export function DeleteCart(payload) {
    return {
        type: 'DELETE_CART',
        payload
    }
}

export function IncreaseQuantity(payload) {
    return {
        type: 'INCREASE_QUANTITY',
        payload
    }
}
export function DecreaseQuantity(payload) {
    return {
        type: 'DECREASE_QUANTITY',
        payload
    }
}