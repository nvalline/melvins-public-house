// dependencies
import React from 'react';
// components
import SocialIcons from '../social/SocialIcons';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className='yellow-up-tab'></div>
			<div className='trim'></div>
			<div className='footer-content-block'>
				{/* enter dynamic copyright year */}
				<p className='footer-content'>copyright 2021 | Melvins Public House</p>
				<SocialIcons />
			</div>
		</footer>
	);
};

export default Footer;
