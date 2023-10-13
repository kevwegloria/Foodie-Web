import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Custom hook to access the cart context
export function useCart() {
  return useContext(CartContext);
}

// Cart provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Load cart items and cart count from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const storedCartCount = parseInt(localStorage.getItem('cartCount')) || 0;

    setCartItems(storedCartItems);
    setCartCount(storedCartCount);
  }, []);

  // Update cart items and cart count in both state and local storage
  const updateCart = (newCartItems, newCartCount) => {
    setCartItems(newCartItems);
    setCartCount(newCartCount);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    localStorage.setItem('cartCount', newCartCount.toString());
  };

  const addToCart = (item, quantity = 1) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += quantity;
      updateCart(updatedCartItems, cartCount + quantity);
    } else {
      // If the item is not in the cart, add it
      updateCart([...cartItems, { ...item, quantity }], cartCount + quantity);
    }
  };

  const removeFromCart = (itemToRemove, removeAll = false) => {
    if (removeAll) {
      // If removeAll is true, remove all instances of the item from the cart
      const updatedCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);
      const removedQuantity = cartItems.find((item) => item.id === itemToRemove.id)?.quantity || 0;
      updateCart(updatedCartItems, cartCount - removedQuantity);
    } else {
      // Otherwise, check if there's more than one instance of the item
      const itemIndex = cartItems.findIndex((item) => item.id === itemToRemove.id);
  
      if (itemIndex !== -1) {
        const updatedCartItems = [...cartItems];
  
        if (updatedCartItems[itemIndex].quantity > 1) {
          // If there's more than one instance, reduce the quantity by 1
          updatedCartItems[itemIndex].quantity -= 1;
        } else {
          // If there's only one instance, remove the item immediately
          updatedCartItems.splice(itemIndex, 1);
        }
  
        updateCart(updatedCartItems, cartCount - 1);
      }
    }
  };
  const removeCardFromCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemToRemove.id);
    const removedQuantity = cartItems.find((item) => item.id === itemToRemove.id)?.quantity || 0;
    updateCart(updatedCartItems, cartCount - removedQuantity);
  };
  
  
  
  

  return (
    <CartContext.Provider
      value={{ cartCount, cartItems, addToCart, removeFromCart, removeCardFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
