const ADD_TO_CART = 'ADD_TO_CART';
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const UPDATE_INVENTORY = 'UPDATE_INVENTORY';

const initialState = {
  products: [
    { id: '1', name: 'Tazer', category: 'electronics', description: 'It will shock you when powered on', price: 99.99, inventoryCount: 10 },
    { id: '2', name: 'Harry Potter', category: 'books', description: 'Multiple Book Series', price: 19.99, inventoryCount: 5 },
    { id: '3', name: 'Black T-Shirt', category: 'clothing', description: 'Cozy cotton t-shirt', price: 15.99, inventoryCount: 25 },
    { id: '4', name: 'G502', category: 'electronics', description: 'Ergonomic wireless mouse', price: 29.99, inventoryCount: 30 },
    { id: '5', name: 'Gordon Ramsey, the F-Word', category: 'books', description: 'Inspirational cookbook', price: 35.99, inventoryCount: 8 },
  ],
};

function updateProductInventory(products, productId, adjustBy) {
  return products.map(product => {
    if (product.id === productId) {
      return { ...product, inventoryCount: product.inventoryCount + adjustBy };
    }
    return product;
  });
}

export const updateInventory = (productId, amount) => ({
  type: UPDATE_INVENTORY,
  payload: { productId, amount },
});

// Products reducer
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
  case 'UPDATE_INVENTORY': {
    const { productId, quantity } = action.payload;
    return {
      ...state,
      products: state.products.map(product =>
        product.id === productId ? { ...product, inventoryCount: product.inventoryCount + quantity } : product,
      ),
    };
  }
  case ADD_TO_CART:
    // Decrease the inventoryCount by 1
    return {
      ...state,
      products: updateProductInventory(state.products, action.payload.id, -1),
    };
  case INCREMENT_QUANTITY:
    // Decrease the inventoryCount by 1
    return {
      ...state,
      products: updateProductInventory(state.products, action.payload, -1),
    };
  case DECREMENT_QUANTITY:
    // Increase the inventoryCount by 1
    return {
      ...state,
      products: updateProductInventory(state.products, action.payload, 1),
    };
  case REMOVE_FROM_CART:
    // Find the product and increment its inventoryCount by the removed item's quantity
    const removedItem = state.products.find(p => p.id === action.payload);
    const removedQuantity = removedItem ? removedItem.quantity : 0;
    return {
      ...state,
      products: updateProductInventory(state.products, action.payload, removedQuantity),
    };
  default:
    return state;
  }
}
