// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// components
import { SocialLinks } from '../../Links';

const SocialIcons = () => {
	return (
		<div className='social-links'>
			{SocialLinks.map((link, index) => {
				return (
					<Link to={link.url} key={index} target={link.target}>
						<i className={link.className}></i>
					</Link>
				);
			})}
		</div>
	);
};

export default SocialIcons;
