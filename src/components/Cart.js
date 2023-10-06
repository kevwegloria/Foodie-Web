// src/components/Cart.js
import React from 'react';

function Cart({ itemCount }) {
  return (
    <div className="cart">
      <span className="item-count">{itemCount}</span>
     <p>Cart</p>
    </div>
  );
}

export default Cart;
