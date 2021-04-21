// dependencies
import React from 'react';
// components
import ContactContent from '../components/contact/ContactContent';
// images
import melvinsImg from '../img/front-day.jpg';

const Contact = () => {
	return (
		<section className='contact-container'>
			<div className='contact-img-block'>
				<img src={melvinsImg} alt='melvins' className='contact-img' />
			</div>
			<ContactContent />
		</section>
	);
};

export default Contact;
