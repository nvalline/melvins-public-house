// dependencies
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
// components
import { NavLinks } from '../../Links';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const RightNav = () => {
	const { showLinks } = useGlobalContext();

	let ulRef = useRef(null);
	const durationTime = 0.5;

	const navMenuActive = () => {
		gsap.to(ulRef, {
			transform: 'translateX(0)',
			opacity: 1,
			duration: durationTime
		});
	};

	const navMenuInactive = () => {
		gsap.to(ulRef, {
			transform: 'translateX(100%)',
			duration: durationTime
		});
		gsap.to(ulRef, { opacity: 0, delay: durationTime });
	};

	useEffect(() => {
		if (showLinks) {
			navMenuActive();
		} else {
			navMenuInactive();
		}
	}, [showLinks]);

	return (
		<ul className='links' ref={(el) => (ulRef = el)}>
			{NavLinks.map((link, index) => {
				return (
					<li key={index}>
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
