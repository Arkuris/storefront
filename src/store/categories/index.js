const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Gadgets and gizmos' },
    { name: 'books', displayName: 'Books', description: 'Readable Material' },
    { name: 'clothing', displayName: 'Clothing', description: 'Cloth created for humans to wear' },
    // More categories here
  ],
  activeCategory: null,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
  case 'ACTIVATE_CATEGORY':
    return {
      ...state,
      activeCategory: action.payload,
    };
  default:
    return state;
  }
}

export const activateCategory = (category) => {
  return {
    type: 'ACTIVATE_CATEGORY',
    payload: category,
  };
};
