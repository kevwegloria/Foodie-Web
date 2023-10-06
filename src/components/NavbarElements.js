import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react'; // Import useState
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from './CardContext';
import { HouseHeart } from 'react-bootstrap-icons';
import { Shop } from 'react-bootstrap-icons';
import { Telephone } from 'react-bootstrap-icons';
import { Cart } from 'react-bootstrap-icons';

function Navigation() {
  const { cartCount } = useCart();
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('userData')); // Use useState to track authentication state

  const handleLogout = () => {
    // Handle logout logic here (e.g., clearing user data from local storage)
    localStorage.removeItem('userData'); // Remove user data from local storage
    setIsAuthenticated(null); // Set isAuthenticated to null
  };

  return (
    <Navbar expand="lg" className="bg-body-white mynav">
      <Container>
        <Navbar.Brand className='myLogo'>Food<span className='logoSpan'>ie</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='navlink'> <HouseHeart color="Black" fontSize={23}/></Nav.Link>
            <Nav.Link href="/shop" className='navlink'> <Shop color="Black" fontSize={20}/></Nav.Link>
            <Nav.Link href="/contact" className='navlink'> <Telephone color="Black" fontSize={20}/></Nav.Link>
          
            <Nav.Link href="/cart" className='navlink'>
              <div className="cart-icon">
                <span className="cart-count">{cartCount}</span>
                <Cart color="Black" fontSize={20}/>
              </div>
            </Nav.Link>
            {isAuthenticated ? (
              // Display personalized greeting and "Log Out" when the user is authenticated
              <>
                <Nav.Link href="/profile" className='navlink'>
                  Hello, {JSON.parse(isAuthenticated).firstName}
                </Nav.Link>
                <Nav.Link href="/login" className='navlink' onClick={handleLogout}>
                  Log Out
                </Nav.Link>
              </>
            ) : (
              // Display "Sign Up" and "Log In" when the user is not authenticated
              <>
                <Nav.Link href="/signup" className='navlink'>Sign Up</Nav.Link>
                <Nav.Link href="/login" className='navlink'>Log In</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
