import React, { useState } from 'react';
import { ChevronRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import overlay from '../components/images/overlay.jpg';
import pizza3a from '../components/images/pizza3a.png';
import donut1a from '../components/images/donut1a.png';
import icecream from '../components/images/icecream.jpg';
import combo from '../components/images/combo.jpg';
import burger from '../components/images/burger.jpg';
import pizza6a from '../components/images/pizza6a.png';
import donut7 from '../components/images/donut7.jpg';
import fries from '../components/images/fries1.jpg';
import bucket from '../components/images/chicken-bucket.jpg';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import { useCart } from '../components/CardContext.js';

const SortingDropdown = ({ items, onSort }) => {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSort(value);
  };

  return (
    <div className="sorting-container">
      <label htmlFor="sort-select">Sort By:</label>
      <select
        id="sort-select"
        value={selectedOption}
        onChange={handleSortChange}
        className="item-dropdown"
      >
        <option value="default">Default</option>
        <option value="alphabet_asc">Alphabet (A-Z)</option>
        <option value="alphabet_desc">Alphabet (Z-A)</option>
        <option value="price_low_to_high">Price (Low to High)</option>
        <option value="price_high_to_low">Price (High to Low)</option>
      </select>
    </div>
  );
};

const ItemList = ({ items }) => {
  const [sortedItems, setSortedItems] = useState(items);

  const { addToCart } = useCart();

  const sortItems = (option) => {
    let sortedItemsCopy = [...items];

    switch (option) {
      case 'alphabet_asc':
        sortedItemsCopy.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alphabet_desc':
        sortedItemsCopy.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price_low_to_high':
        sortedItemsCopy.sort((a, b) => a.price - b.price);
        break;
      case 'price_high_to_low':
        sortedItemsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        // Default sorting (no change to the order)
        break;
    }

    setSortedItems(sortedItemsCopy);
  };

  const handleQuantityChange = (item, newQuantity) => {
    const updatedItems = sortedItems.map((i) => {
      if (i.id === item.id) {
        i.quantity = newQuantity;
      }
      return i;
    });

    setSortedItems(updatedItems);
  };

  return (
    <div className="item-list-container">
      <SortingDropdown items={items} onSort={sortItems} />
      <div className="item-grid">
        {sortedItems.map((item) => (
          <div key={item.id} className="item-container">
            <img src={item.image} alt={item.name} className="item-image" />
            <p className="item-tag">{item.tag}</p>
            <div className="item-details">
              <p className="item-price">${item.price}</p>
              <h3 className="item-h3">{item.name}</h3>
              <div className="quantity-control">
                <button
                  className="quantity-button"
                  onClick={() =>
                    handleQuantityChange(item, item.quantity > 1 ? item.quantity - 1 : 1)
                  }
                >
                  -
                </button>
                <span className="quantity">{item.quantity || 1}</span>
                <button
                  className="quantity-button"
                  onClick={() =>
                    handleQuantityChange(item, item.quantity ? item.quantity + 1 : 2)
                  }
                >
                  +
                </button>
              </div>
              <button onClick={() => addToCart(item, item.quantity || 1)} className="item-add">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const items = [
  { id: 1, name: 'Mozarella Pizza', price: 54.99, image: pizza3a, tag: 'Hot' },
  { id: 2, name: 'Box of 4 Mixed Donuts', price: 40.99, image: donut1a, tag: 'Hot' },
  { id: 3, name: 'Nutty Ice Cream', price: 30.35, image: icecream, tag: 'Hot' },
  { id: 4, name: 'Burger, Fries and Chips Combo', price: 80.55, image: combo, tag: 'Hot' },
  { id: 5, name: 'King Size Burger', price: 40.35, image: burger, tag: 'Hot' },
  { id: 6, name: 'Pizza With Meat Stuffing and Tomato Slices', price: 55.65, image: pizza6a, tag: 'Hot' },
  { id: 7, name: 'Box of 9 Chocolate Donuts', price: 120.45, image: donut7, tag: 'Hot' },
  { id: 8, name: 'Fries and Ketchup', price: 20.22, image: fries, tag: 'Hot' },
  { id: 9, name: 'Chicken Bucket', price: 56.55, image: bucket, tag: 'Hot' },
];

const Shop = () => {
  return (
    <div>
      <div className="overlaycontainer">
        <img src={overlay} className="overlay" alt="overlay" />
        <div className="chevroncontainer" style={{ marginLeft: 30 }}>
          <h3 className="contact-h3">SHOP</h3>
          <div className="link-container">
            <Link to="/" className="home-link">Home</Link>
            <ChevronRight color="white" fontSize={15} />
            <p className="contact-p">Shop</p>
          </div>
        </div>
      </div>
      <ItemList items={items} />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default Shop;
