import React, { useState } from "react";
import '../styles.css';
import combo from '../components/images/combo.jpg';
import pizza from '../components/images/pizza.jpg';
import chicken from '../components/images/chicken-bucket.jpg';
import icecream from '../components/images/icecream.jpg';
import { useCart } from './CardContext';
import { Link } from "react-router-dom"; // Import Link from 'react-router-dom' to create a link



export default function Section2() {
    const { addToCart } = useCart();
    const [comboQuantity, setComboQuantity] = useState(1);
    const [pizzaQuantity, setPizzaQuantity] = useState(1);
    const [chickenQuantity, setChickenQuantity] = useState(1);
    const [icecreamQuantity, setIcecreamQuantity] = useState(1);

   

    const handleComboQuantityChange = (amount) => {
        setComboQuantity(Math.max(1, comboQuantity + amount));
    };

    const handlePizzaQuantityChange = (amount) => {
        setPizzaQuantity(Math.max(1, pizzaQuantity + amount));
    };


    const handleChickenQuantityChange = (amount) => {
        setChickenQuantity(Math.max(1, chickenQuantity + amount));
    };

    const handleIcecreamQuantityChange = (amount) => {
        setIcecreamQuantity(Math.max(1, icecreamQuantity + amount));
    };

    const handleAddToCart = (itemName, quantity) => {
        addToCart({
            name: itemName,
            price: 100, // You may need to adjust the price based on the item.
            image: combo,
        }, quantity);
     
    };

    return (
        <div>
            <div className="see-container">
                <div >
                    <h5 style={{ fontFamily: 'Montserrat', fontSize: 16, color: '#ffa914', fontWeight: 500 }}>FAVORITE FOODS</h5>
                    <h3 style={{ fontFamily: 'Londrina Solid', fontSize: 30 }}>FRESH AND DELICIOUS</h3>
                </div>
                <Link to="/shop" className="see-link">See More</Link>
            </div>
            <div className="sec2container">
                <div className="sec2a">
                    <a href="#link">
                        <img src={combo} className="combo" alt="combo" />
                    </a>
                    <p className="hot">Hot</p>
                    <div className="sec2atext" >

                        <p style={{ color: '#ffa914', fontFamily: "Londrina Solid", fontSize: 20 }}>$100.00</p>
                        <p style={{ fontFamily: "Montserrat", fontSize: 17, width: "14em", fontWeight: 'bold' }} >Burger and Fries Combo</p>
                        <div className="home-b-container">
                            <button onClick={() => handleComboQuantityChange(-1)} className="home-minus-button">-</button>
                            <span>{comboQuantity}</span>
                            <button onClick={() => handleComboQuantityChange(1)} className="home-minus-button">+</button>
                        </div>
                        <button
                            onClick={() => handleAddToCart("Combo Meal", comboQuantity)}
                            className="addcart-home-button"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>


                <div className="sec2b">
                    <a href="#link">
                        <img src={pizza} className="pizza" alt="pizza" />
                    </a>
                    <p className="hot">Hot</p>
                    <div className="sec2btext" >
                        <p style={{ color: '#ffa914', fontFamily: "Londrina Solid", fontSize: 20 }}>$150.00</p>
                        <p style={{ fontFamily: "Montserrat", fontSize: 17, fontWeight: 'bold' }}>Mushroom Pizza with Basil</p>
                        <div className="home-b-container">
                            <button onClick={() => handlePizzaQuantityChange(-1)} className="home-minus-button">-</button>
                            <span>{pizzaQuantity}</span>
                            <button onClick={() => handlePizzaQuantityChange(1)} className="home-minus-button">+</button>
                        </div>
                        <button
                            onClick={() => handleAddToCart("Cheezy Pizza", pizzaQuantity)}
                            className="addcart-home-button"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>


                <div className="sec2c">
                    <a href="#link">
                        <img src={chicken} className="chicken" alt="chicken" />
                    </a>
                    <p className="hot">Hot</p>
                    <div className="sec2ctext" >
                        <p style={{ color: '#ffa914', fontFamily: "Londrina Solid", fontSize: 20 }}>$120.00</p>
                        <p style={{ fontFamily: "Montserrat", fontSize: 17, width: "14em", fontWeight: 'bold' }} >Chicken Bucket</p>
                        <div className="home-b-container">
                            <button onClick={() => handleChickenQuantityChange(-1)} className="home-minus-button">-</button>
                            <span>{chickenQuantity}</span>
                            <button onClick={() => handleChickenQuantityChange(1)} className="home-minus-button">+</button>
                        </div>
                        <button
                            onClick={() => handleAddToCart("Chicken Bucket", chickenQuantity)}
                            className="addcart-home-button"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="sec2d">
                    <a href="#link">
                        <img src={icecream} className="icecream" alt="icecream" />
                    </a>
                    <p className="hot">Hot</p>
                    <p className="discount">-33%</p>
                    <div className="sec2dtext"  >
                        <p style={{ color: '#ffa914', fontFamily: "Londrina Solid", fontSize: 20 }}>$50.00</p>
                        <p style={{ fontFamily: "Montserrat", fontSize: 17, width: "14em", fontWeight: 'bold' }} >Nutty Ice Cream</p>
                        <div className="home-b-container">
                            <button onClick={() => handleIcecreamQuantityChange(-1)} className="home-minus-button">-</button>
                            <span>{icecreamQuantity}</span>
                            <button onClick={() => handleIcecreamQuantityChange(1)} className="home-minus-button">+</button>
                        </div>
                        <button
                            onClick={() => handleAddToCart("Nutty Ice-Cream", icecreamQuantity)}
                            className="addcart-home-button"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
