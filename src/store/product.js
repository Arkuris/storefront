const initialState = {
  products: [
    { id: '1', name: 'Product 1', category: 'electronics', description: 'It will shock you when powered on', price: 99.99, inventoryCount: 10 },
    { id: '2', name: 'Product 2', category: 'books', description: 'Multiple Book Series', price: 19.99, inventoryCount: 5 },
    { id: '3', name: 'Product 3', category: 'clothing', description: 'Cozy cotton t-shirt', price: 15.99, inventoryCount: 25 },
    { id: '4', name: 'Product 4', category: 'electronics', description: 'Ergonomic wireless mouse', price: 29.99, inventoryCount: 30 },
    { id: '5', name: 'Product 5', category: 'books', description: 'Inspirational cookbook', price: 35.99, inventoryCount: 8 },
  ],
};


// Reducer for handling actions related to products
export default function productsReducer(state = initialState, action) {
  // No case for 'ACTIVATE_CATEGORY' needed here since the filtering will be done in the component
  switch (action.type) {
  default:
    return state;
  }
}