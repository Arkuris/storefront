import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartAndUpdateInventory, incrementQuantity, decrementQuantity } from '../../store/cart/index.js';

const SimpleCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.map((item) => (
        <div key={item._id}>
          <h3>{item.name} (Quantity: {item.quantity})</h3>
          <button onClick={() => dispatch(incrementQuantity(item._id))}>+</button>
          <button onClick={() => dispatch(decrementQuantity(item._id))}>-</button>
          <button onClick={() => dispatch(removeFromCartAndUpdateInventory(item._id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default SimpleCart;
