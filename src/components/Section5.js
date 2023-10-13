import React from "react";
import SignUpForm from "./SignUpForm";

export default function Section5() {
    return (
        <div className="sec5container">
            <div style={{ textAlign: 'center', alignItems: 'center' }}>
                <h4 style={{ fontSize: 16, fontFamily: 'Montserrat', fontWeight: 700, paddingBottom: 13, textAlign: 'center'}}>OPENING HOURS</h4>
                <p className="sec5a-p">Mon - Thu: 10:00am - 01:00 am</p>
                <p className="sec5a-p">Saturday: 11:00am To Midnight</p>
                <p className="sec5a-p">Sunday: Kitchen Closed</p>
            </div>
            <div>
                <div style={{ alignItems: 'center', textAlign: 'center' }}>
                    <h3 style={{ fontFamily: 'Londrina Solid', fontSize: 25 }}>LET'S STAY IN TOUCH</h3>
                    <p style={{ fontFamily: 'Montserrat', fontSize: 16, color: '#a49ba9' }}>Join our e-club to get the latest news</p>
                </div>
                <div><SignUpForm /></div>

            </div>

            <div style={{textAlign: 'center'}}>
                <h4 style={{ fontSize: 16, fontFamily: 'Montserrat', fontWeight: 700, paddingBottom: 10 }}>MENU LINKS</h4>
                <a className="sec5c-a" href="#link">Family Bucket Meals</a> <br /> <br />
                <a className="sec5c-a" href="#link">Fried Chicken</a><br /><br />
                <a className="sec5c-a" href="#link">Spicy Chicken Burgers</a>

            </div>
        </div>
    )
}