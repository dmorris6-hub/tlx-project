import { combineReducers } from 'redux';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';

import userReducer from './User/user.reducer';
//import productsReducer from './Products/products.reducer';
//import cartReducer from './Cart/cart.reducer';

export default combineReducers({
    user: userReducer
})
