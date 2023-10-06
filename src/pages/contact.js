import React from "react";
import overlay from '../components/images/overlay.jpg';
import { Link } from "react-router-dom";
import { ChevronRight } from "react-bootstrap-icons";
import MyForm from "../components/Form";
import { Twitter } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";
import Section5 from "../components/Section5";
import { Globe } from "react-bootstrap-icons";
import Section6 from "../components/Section6";


const Contact = () => {
    return (
       <div>
        
        <div className="contact-maincontainer">
       <div className="overlaycontainer">
       <img 
		src={overlay}
		className='overlay'
		alt='overlay'/>
        <div className="chevroncontainer">
            <h3 className="contact-h3">CONTACT</h3>
            <div className="link-container">
            <Link to="/Home" className="home-link">Home</Link>
            <ChevronRight color="white" fontSize={15}/>
            <p className="contact-p">Contact</p>
            </div>
        </div>
       </div>
      
       
       
      
       <div className="contact-formcontain">
      
       <MyForm />
       <div>
        <div className="address-container">
         <h3 className="address-h3">Address</h3>
         <p className="address-p">14 Johnson Street, Ikeja, Nigeria 112342</p>
        </div>
        <div className="address-container">
         <h3 className="address-h3">Phone</h3>
         <p className="address-p">+2348012345678</p>
        </div>
        <div className="address-container">
         <h3 className="address-h3">Email</h3>
         <p className="address-p">support@foodie.com</p>
        </div>
        <div className="address-container">
         <h3 className="address-h3">Opening Time</h3>
         <p className="address-p">support@foodie.com</p>
        </div>
        <div className="address-container">
         <h3 className="address-h3">Follow Us On</h3>
         <div className="contacticoncontainer">
            <Twitter className="contact-icon"/>
            <Instagram className="contact-icon"/>
            <Facebook className="contact-icon" />
            <Globe className="contact-icon" />
         </div>
        </div>
       </div>
       
       </div>
      
       </div>
       <div>
        <Section5 />
       </div>
       <div>
        <Section6 />
       </div>
       </div>
    )
}

export default Contact
