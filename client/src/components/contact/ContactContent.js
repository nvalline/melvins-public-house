// dependencies
import React from 'react';
// components
import SocialIcons from '../social/SocialIcons';

const ContactContent = () => {
	return (
		<>
			<div className='trim'></div>
			<div className='yellow-down-tab'>
				<h3 className='section-title ft-blk'>contact</h3>
			</div>
			<article className='contact-block'>
				<div className='hours'>
					<h4 className='contact-title'>hours</h4>
					<p className='contact-detail'>Monday-Friday: NOON to MIDNIGHT</p>
					<p className='contact-detail'>
						Saturday & Sunday: 11:00AM to MIDNIGHT
					</p>
				</div>
				<div className='address'>
					<h4 className='contact-title'>address</h4>
					<p className='contact-detail'>139 North Main Street</p>
					<p className='contact-detail'>Heber City, UT</p>
					<p className='contact-detail'>84032</p>
				</div>
				<div className='phone'>
					<h4 className='contact-title'>phone</h4>
					<p className='contact-detail'>(435) 654-9464</p>
				</div>
				<div className='social'>
					<h4 className='contact-title'>social</h4>
					<SocialIcons />
				</div>
			</article>
		</>
	);
};

export default ContactContent;
