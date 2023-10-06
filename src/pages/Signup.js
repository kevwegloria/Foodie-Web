import React, { useState } from 'react';
import onboard from '../components/images/onboard1.jpg';
import Section6 from '../components/Section6';
import { ChevronRight } from 'react-bootstrap-icons';
import overlay from '../components/images/overlay.jpg';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(formData));

    // You can also redirect to another page or perform other actions here

    console.log('User registered successfully');
  };

  return (
    <div>
      <div className="signup-overlaycontainer">
        <img src={overlay} className="overlay" alt="overlay" />
        <div className="signup-chevroncontainer">
          <h3 className="contact-h3">SIGNUP</h3>
          <div className="link-container">
            <Link to="/Home" className="home-link">
              Home
            </Link>
            <ChevronRight color="white" fontSize={15} />
            <p className="contact-p">Sign up</p>
          </div>
        </div>
      </div>
      <div className="signup-contain">
        <div>
          <img src={onboard} alt={onboard} className="onboard1" />
        </div>
        <div className="signup-form">
          <h2 className="signup-h3">Sign Up </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="firstN"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="lastN"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="emailN"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="passN"
              />
            </div>

            <button type="submit" className="signupbutton">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
      <Section6 />
    </div>
  );
}

export default Signup;
