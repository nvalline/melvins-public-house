// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// components
import { SocialLinks } from '../../Links';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className='yellow-up-tab'></div>
			<div className='trim'></div>
			<div className='footer-content-block'>
				{/* enter dynamic copyright year */}
				<p className='footer-content'>copyright 2021 | Melvins Public House</p>
				<div className='social-links'>
					{SocialLinks.map((link, index) => {
						return (
							<Link to={link.url} key={index}>
								<i className={link.className}></i>
							</Link>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
