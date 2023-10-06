import React from "react";
import'../styles.css';
import insta1 from '../components/images/insta1.jpg';
import insta2 from '../components/images/insta2.jpg';
import insta3 from '../components/images/insta3.jpg';
import insta4 from '../components/images/insta4.jpg';
import insta5 from '../components/images/insta5.jpg';
import insta6 from '../components/images/insta6.jpg';
import insta from '../components/images/instagram.png'


export default function Section4 () {
    return (
        <div>
            <div className="follow">
                <h3>FOLLOW US ON INSTAGRAM</h3>
            </div>
            <div className="sec4container">
            
            <div className="sec4">
            <img 
             src={insta2}
		     className='insta1'
		     alt='insta1'/>
              <div>
                    <div className="middle"><a href="#link">
                    <img 
		src={insta}
		className='insta'
		alt='insta'/>  
                   </a></div>
                </div>
             <div>
               
             </div>
            </div>


            <div className="sec4">
            <img 
             src={insta3}
		     className='insta1'
		     alt='insta1'/>
              <div>
                    <div className="middle"><a href="#link">
                    <img 
		src={insta}
		className='insta'
		alt='insta'/>  
                   </a></div>
                </div>
             <div>
               
             </div>
            </div>


            <div className="sec4">
            <img 
             src={insta4}
		     className='insta1'
		     alt='insta1'/>
              <div>
                    <div className="middle"><a href="#link">
                    <img 
		src={insta}
		className='insta'
		alt='insta'/>  
                   </a></div>
                </div>
             <div>
               
             </div>
            </div>


            <div className="sec4">
            <img 
             src={insta5}
		     className='insta1'
		     alt='insta1'/>
              <div>
                    <div className="middle"><a href="#link">
                    <img 
		src={insta}
		className='insta'
		alt='insta'/>  
                   </a></div>
                </div>
             <div>
               
             </div>
            </div>

            
            <div className="sec4">
            <img 
             src={insta6}
		     className='insta1'
		     alt='insta1'/>

<div>
                    <div className="middle"><a href="#link">
                    <img 
		src={insta}
		className='insta'
		alt='insta'/>  
                   </a></div>
                </div>
             <div>
               
             </div>
            </div>


            <div className="sec4">
            <img 
             src={insta1}
		     className='insta1'
		     alt='insta1'/>
             <div>
                    <div className="middle"><a href="#link">
                    <img 
		src={insta}
		className='insta'
		alt='insta'/>  
                   </a></div>
                </div>
             <div>
                
             </div>
            </div>
        </div>
        </div>
    )
}