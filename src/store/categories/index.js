import { createSlice } from '@reduxjs/toolkit';
import { loadProducts } from '../../store/products/index.js';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: null,
  },
  reducers: {
    activateCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: {
    [loadProducts.fulfilled]: (state, action) => {
      const categories = action.payload.results.reduce((acc, product) => {
        const categoryName = product.category;
        if (!acc.find((category) => category.name === categoryName)) {
          acc.push({
            name: categoryName,
            displayName: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
            description: `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products`,
          });
        }
        return acc;
      }, []);
      state.categories = categories;
    },
  },
});

export const { activateCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;