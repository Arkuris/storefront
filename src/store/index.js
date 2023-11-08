import productsReducer from './products/index.js';
import cartReducer from './cart/index.js';
import categoriesReducer from './categories/index.js';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
