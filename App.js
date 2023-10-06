import React from 'react';
import './App.css';
import Navbar from '../src/components/NavbarElements';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from '../src/pages/Home';
import Contact from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Shop from './pages/Shop';
import Signup from './pages/Signup'
import Login from './pages/Login';
import Cart from './pages/Cart';



function App() {
	return (
		<Router>
			<Navbar />
   
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='contact' element={<Contact />} />
				<Route exact path='shop' element={<Shop />} />
				<Route exact path='signup' element={<Signup />} />
				<Route exact path='login' element={<Login />} />
				
				<Route exact path='cart' element={<Cart />} />
				
			</Routes>
		</Router>
	);
}

export default App;

