import React from "react";
import'../styles.css';
import combo from '../components/images/combo.jpg';
import pizza from '../components/images/pizza.jpg';
import chicken from '../components/images/chicken-bucket.jpg'
import icecream from '../components/images/icecream.jpg'



export default function Section2 () {
    return (
        <div>
            <div style={{paddingLeft:40, paddingTop: 40, paddingBottom: 30}}>
            <h5 style={{fontFamily: 'Montserrat', fontSize: 16, color: '#ffa914', fontWeight: 500}}>FAVORITE FOODS</h5>
            <h3 style={{fontFamily: 'Londrina Solid', fontSize: 30}}>FRESH AND DELICIOUS</h3>
            </div>
            <div className="sec2container">
                <div className="sec2a">
               <a href="#link">
               <img 
		         src={combo}
		         className='combo'
		         alt='combo'/>
               </a>
                 <p className="hot">Hot</p>
                <div className="sec2atext" style={{fontFamily:'Londrina Solid', fontSize:20, paddingLeft: 20, lineHeight: '10px'}}>
                <p style={{color:'#ffa914'}}>$100.00</p>
                <a href="#link" style={{textDecoration: 'none', color: 'black', }}>Combo Meal</a>
                </div>


                </div>
                <div className="sec2b">
               <a href="#link">
               <img 
		         src={pizza}
		         className='pizza'
		         alt='pizza'/>
               </a>
                <p className="hot">Hot</p>
                <div className="sec2btext" style={{fontFamily:'Londrina Solid',paddingLeft: 20, fontSize:20, lineHeight: '10px'}}>
                <p  style={{color:'#ffa914'}}>$150.00</p>
                <a href="#link" style={{textDecoration: 'none', color: 'black', }}>Cheezy Pizza</a>
                 
                </div>


                </div>
                <div className="sec2c">
                <a href="#link">
                <img 
		         src={chicken}
		         className='chicken'
		         alt='chicken'/>
                </a>
                 <p className="hot">Hot</p>
                <div className="sec2ctext" style={{fontFamily:'Londrina Solid',paddingLeft: 20, fontSize:20, lineHeight: '10px'}}>
                <p  style={{color:'#ffa914'}}>$120.00</p>
                <a href="#link" style={{textDecoration: 'none', color: 'black', }}>Chicken Bucket</a>
                </div>
                </div>

                <div className="sec2d">
               <a href="#link">
               <img 
		         src={icecream}
		         className='icecream'
		         alt='icecream'/>
               </a>
                 <p className="hot">Hot</p>
                 <p className="discount">-33%</p>
                <div className="sec2dtext" style={{fontFamily:'Londrina Solid',paddingLeft: 20, fontSize:20, lineHeight: '10px'}} >
                <p  style={{color:'#ffa914'}}>$50.00</p>
                <a href="#link" style={{textDecoration: 'none', color: 'black', }}>Nutty Ice-Cream</a>
                </div>
                </div>
         

            </div>
        </div>

    
    )
}
