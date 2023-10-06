import React from "react";
import'../styles.css';
import salad from './images/eggsalad.jpg';
import burger from './images/burgerbox.png';
import fries from './images/fries.jpg'


export default function Section1 () {
    return (
        <div className="sec1container" >
          <div className="sec1a">
          <img  className="salad" src={salad} alt={salad} /> 
          <div className="sec1atext">
           <h3 className="sec1a-h3-a" style={{}}>FAST FOOD</h3>
           <h3 className="sec1a-h3-b" style={{}}>QUICK PROCESSING, DELICIOUS TASTE</h3>
           <h3 className="sec1a-h3-c" >CALL US</h3>
           <h3 className="sec1a-h3-d" >08123456789</h3>
          </div>
          </div>
          
          <div className="sec1b"> <img  className="fries" src={fries} alt={fries} /> 
          <div className="sec1btext">
            <h3 style={{color: 'white', fontFamily: 'Satisfy', fontSize: 23}} >Ready-made food</h3>
            <h3 style={{color: 'white', fontFamily: 'Londrina Solid', fontSize: 28}}>FRENCH FRIES</h3>
          </div>
          </div>
          <div className="sec1c"> <img  className="burger" src={burger} alt={burger} />
          <div className="sec1ctext">
            <h3 style={{color: 'white', fontSize: 16, fontFamily: 'Montserrat'}}>UP TO 40% OFF</h3>
            <h3 style={{color: 'white', fontFamily: 'Londrina Solid', fontSize: 30}}>HAMBURGER</h3>
            <a href="#link" className="sec1cbutton">SHOP NOW</a>
            </div> </div>
        </div>
    )
}
