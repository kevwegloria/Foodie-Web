import React from 'react';
import { useCart } from '../components/CardContext';
import { Link } from 'react-router-dom';

import Section5 from '../components/Section5';
import Section6 from '../components/Section6';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleReduceQuantity = (item) => {
    if (item.quantity > 1) {
      removeFromCart(item);
    }
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item, true); // Set the "removeAll" parameter to true
  };

  return (
    <div>
      <h1 className='cart-h1'>Your Cart</h1>

      <div className='cart-list-container'>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your cart is empty.  <Link to="/">Go Home</Link></p>
          </div>
        ) : (
          <>
            <ul className='cart-ul'>
              {cartItems.map((item) => (
                <li key={item.id} className='item-listing'>
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className='item-middle'>
                    <div className='item-name1'>
                      {item.name}
                    </div>
                    <div>
                      <div className='item-price1'>
                        ${item.price}
                      </div>
                      <div>
                        <button onClick={() => handleReduceQuantity(item)} className='item-button'>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addToCart(item)} className='item-button'>+</button>
                        <br />
                        <p onClick={() => handleRemoveItem(item)} className='remove-button'>REMOVE</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.121)', width: '20em' }} className='cart-total'>
              <h4 style={{ fontFamily: 'Londrina Solid', marginBottom: 20, paddingTop: 10, paddingLeft: 20, paddingBottom: 10, border: 'none', backgroundColor: 'rgba(128, 128, 128, 0.300)' }}>CART TOTAL</h4>
              <div style={{ paddingLeft: 20, paddingRight: 20 }} className='cart-subtotal'>
                <div style={{ fontFamily: 'Montserrat', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <p>SUBTOTAL</p>
                  <p> ${totalPrice.toFixed(2)}</p>
                </div>
                <div style={{ fontFamily: 'Montserrat', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <p>TOTAL</p>
                  <p style={{ fontWeight: '1000', fontSize: '25px' }}> ${totalPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Cart;
