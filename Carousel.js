import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from './images/carousel1.jpg';
import carousel2 from './images/carousel2.jpg';
import carousel3 from './images/carousel3.jpg';
import food from './images/food.png';
import gif from './images/gif.png';
import label from './images/label.png'
import '../styles.css'

export default function MyCarousel() {
return (
	<div className='myCarousel'>
	
	<Carousel>
		<Carousel.Item interval={30000}>
		<img
			className="d-block w-100 car"
            src={carousel1}
			alt="One"
			
		/>
		<img
		className="animated bounceInLeft food" 	
		src={food}
		alt='food'/>
		<img 
		src={gif}
		className='gif'
		alt='gif'/>

		<Carousel.Caption className="animated slideInLeft caption">
			<img
			src={label}
			className='label'
			alt='label'/>
			<p className='save'>SAVE UP TO 20%</p>
			<h3 className='captionh3'>15 DELICIOUS AND <span className='cap-span'>HEALTHY</span> FAST FOOD MEALS!</h3>
			
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={30000}>
		<img
			className="d-block w-100 car"
			src={carousel2}
			alt="Two"
		/>
		<img
		className="animated bounceInLeft food" 	
		src={food}
		alt='food'/>
		<img 
		src={gif}
		className='gif'
		alt='gif'/>
		<Carousel.Caption className="animated slideInLeft caption">
		<img
			src={label}
			className='label'
			alt='label'/>
			<p className='save1'>POPULAR FAST FOOD</p>
			<h3 className='captionh3a'> BURGERS, <span className='cap1-span'>FRIED CHICKEN</span> AND ONION RINGS</h3>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={30000}>
		<img
			className="d-block w-100 car"
			src={carousel3}
			alt="Three"
		/>
		<img
		className="animated bounceInLeft food" 	
		src={food}
		alt='food'/>
		<img 
		src={gif}
		className='gif'
		alt='gif'/>
		<Carousel.Caption className="animated slideInLeft caption">
		<img
			src={label}
			className='label'
			alt='label'/>
			<p className='save2'>FAST DELIVERY</p>
			<h3 className='captionh3b'>DELICIOUS, FLUFFY <span className='cap-span'>DOUGHNUTS</span> WITH TOPPINGS</h3>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}
