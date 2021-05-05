// dependencies
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// components
import { NavLinks } from '../../Links';
// utils
import { useGlobalContext } from '../../utils/AppContext';
import {
	navLinkHoverActive,
	navLinkHoverInactive
} from '../../utils/Animations';

const RightNav = () => {
	const { isHover, handleHover } = useGlobalContext();

	let linkRef1 = useRef(null);
	let linkRef2 = useRef(null);
	let linkRef3 = useRef(null);

	useEffect(() => {
		// if (isHover) {
		// 	console.log('effect');
		// }
	}, [isHover]);

	return (
		<ul className='links'>
			{NavLinks.map((link, index) => {
				return (
					<li
						key={index}
						ref={(el) => (link.ref = el)}
						onMouseOver={() => handleHover()}
					>
						<Link to={link.url} className={link.className}>
							{link.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default RightNav;
