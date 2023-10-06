import React, { useState } from 'react';
import onboard from '../components/images/onboard3.jpg';
import Section6 from '../components/Section6';
import overlay from '../components/images/overlay.jpg';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'react-bootstrap-icons';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
    
      const user = {
        email, password, firstName: ''
        // Add other user data here if needed
      };

      // Store user data in local storage
      localStorage.setItem('userData', JSON.stringify(user));

      console.log('User logged in successfully');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <div>
      <div className="login-overlaycontainer">
        <img src={overlay} className="overlay" alt="overlay" />
        <div className="login-chevroncontainer">
          <h3 className="contact-h3">LOGIN</h3>
          <div className="link-container">
            <Link to="/Home" className="home-link">
              Home
            </Link>
            <ChevronRight color="white" fontSize={15} />
            <p className="contact-p">Log In</p>
          </div>
        </div>
      </div>
      <div className="login-contain">
        <div>
          <img src={onboard} alt={onboard} className="onboard1" />
        </div>

        <div className="login-form">
          <h2 className="login-h3">Login</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="loginbutton">
              LOG IN
            </button>
          </form>
        </div>
      </div>
      <Section6 />
    </div>
  );
}

export default Login;
