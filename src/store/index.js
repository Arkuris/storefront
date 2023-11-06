import productsReducer from './product.js';
import categoriesReducer from './categories/index.js';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  // ...any other reducers
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
