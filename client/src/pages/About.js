// dependencies
import React from 'react';
// components
import AboutContent from '../components/about/AboutContent';
// images
import ownersImg from '../img/owners.jpg';

const About = () => {
	return (
		<section className='about-container'>
			<div className='about-img-block'>
				<img src={ownersImg} alt='owners' className='about-img' />
			</div>
			<AboutContent />
		</section>
	);
};

export default About;
