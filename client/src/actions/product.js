


import { FETCH_PRODUCTS_BY_CAT, FETCH_ALL_PRODUCTS, FETCH_PRODUCT_BY_ID } from '../constants/actionTypes';
import * as api from '../api';

export const getAllProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllProducts()

        dispatch({ type: FETCH_ALL_PRODUCTS, payload: { data } })

    } catch (error) {
        console.log(error)

    }
}

export const getProductsbyCat = (cat) => async (dispatch) => {
    try {
        const { data } = await api.fetchProductsByCategory(cat)


        dispatch({ type: FETCH_PRODUCTS_BY_CAT, payload: { data } });
    } catch (error) {
        console.log(error);
    }
};



export const getProductbyId = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchProductbyId(id)


        dispatch({ type: FETCH_PRODUCT_BY_ID, payload: { data } });
    } catch (error) {
        console.log(error);
    }
};