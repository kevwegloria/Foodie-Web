import React from "react";
import'../styles.css';
import big from '../components/images/burger-fries.jpg'

export default function Section3 () {
    return (
        <div>
        <div className="sec3continer">
           
        <img 
		src={big}
		className='big'
		alt='big'/>
        <div className="sec3a">
            <p className="sec3a-p" >Convenient & Economical</p>
            <h3 className="sec3a-h3" >HAMBURGER & FRIES</h3>
            <button className="shop1">SHOP NOW</button>
        </div>
        
        </div>
    </div>
    )
}
