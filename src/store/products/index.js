import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ADD_TO_CART = 'ADD_TO_CART';
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_INVENTORY = 'UPDATE_INVENTORY';

export const loadProducts = createAsyncThunk('products/load', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://api-js401.herokuapp.com/api/v1/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    [ADD_TO_CART]: (state, action) => {
      state.products = state.products.map(product =>
        product.id === action.payload.id ? { ...product, inventoryCount: product.inventoryCount - 1 } : product,
      );
    },
    [INCREMENT_QUANTITY]: (state, action) => {
      state.products = state.products.map(product =>
        product.id === action.payload ? { ...product, inventoryCount: product.inventoryCount - 1 } : product,
      );
    },
    [DECREMENT_QUANTITY]: (state, action) => {
      state.products = state.products.map(product =>
        product.id === action.payload ? { ...product, inventoryCount: product.inventoryCount + 1 } : product,
      );
    },
    [REMOVE_FROM_CART]: (state, action) => {
      const removedItem = state.products.find(p => p.id === action.payload);
      const removedQuantity = removedItem ? removedItem.quantity : 0;
      state.products = state.products.map(product =>
        product.id === action.payload ? { ...product, inventoryCount: product.inventoryCount + removedQuantity } : product,
      );
    },
    [UPDATE_INVENTORY]: (state, action) => {
      const { productId, amount } = action.payload;
      state.products = state.products.map(product =>
        product.id === productId ? { ...product, inventoryCount: product.inventoryCount + amount } : product,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, updateInventory } = productsSlice.actions;
export default productsSlice.reducer;
