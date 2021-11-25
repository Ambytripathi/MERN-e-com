import { combineReducers } from 'redux';

import auth from './auth';
import cart from './cart'
import products from './product'
export const reducers = combineReducers({ auth, cart, products });

