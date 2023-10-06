import React from "react";
import'../styles.css';
import card from '../components/images/cards.png'

export default function Section6 () {
    return (
        <div className="sec6container">
            <div><p>Copyright &copy; 2023 Foodie. Designed by Kevwe</p></div>
            <div>
                <img
                  src={card}
                  className='card'
                  alt='card'
        
            />
            </div>
        </div>

    )
}
