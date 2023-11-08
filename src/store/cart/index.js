const initialState = {
  cart: [],
};

// Action Types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
const UPDATE_INVENTORY = 'UPDATE_INVENTORY';

function addOrUpdateCartItem(cart, product) {
  const existingItemIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingItemIndex > -1) {
    const updatedCart = [...cart];
    updatedCart[existingItemIndex].quantity += 1;
    return updatedCart;
  } else {
    return [...cart, { ...product, quantity: 1 }];
  }
}

// Actions
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const incrementQuantity = (productId) => ({
  type: INCREMENT_QUANTITY,
  payload: productId,
});

export const decrementQuantity = (productId) => ({
  type: DECREMENT_QUANTITY,
  payload: productId,
});

export const updateInventory = (productId, quantity) => ({
  type: 'UPDATE_INVENTORY',
  payload: { productId, quantity },
});

export const removeFromCartAndUpdateInventory = (productId) => (dispatch, getState) => {
  const cartItem = getState().cart.cart.find(item => item.id === productId);
  if (cartItem) {
    dispatch(updateInventory(productId, cartItem.quantity));
    dispatch(removeFromCart(productId));
  }
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
  case ADD_TO_CART:
    return {
      ...state,
      cart: addOrUpdateCartItem(state.cart, action.payload),
    };
  case REMOVE_FROM_CART:
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload),
    };
  case INCREMENT_QUANTITY:
    return {
      ...state,
      cart: state.cart.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    };
  case DECREMENT_QUANTITY:
    return {
      ...state,
      cart: state.cart.map(item =>
        item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item,
      ),
    };
  default:
    return state;
  }
}