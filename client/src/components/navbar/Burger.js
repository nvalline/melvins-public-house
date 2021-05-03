// dependencies
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// components
import RightNav from './RightNav';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const Burger = () => {
	const { showLinks, handleNavClick } = useGlobalContext();

	let line1Ref = useRef(null);
	let line2Ref = useRef(null);
	let line3Ref = useRef(null);

	const durationTime = 0.3;

	const navIconActive = () => {
		gsap.to(line1Ref, { duration: durationTime, transform: 'rotate(45deg' });
		gsap.to(line2Ref, {
			duration: durationTime,
			transform: 'translateX(-100%)',
			opacity: 0
		});
		gsap.to(line3Ref, { duration: durationTime, transform: 'rotate(-45deg)' });
	};

	const navIconInactive = () => {
		gsap.to(line1Ref, { duration: durationTime, transform: 'rotate(0deg' });
		gsap.to(line2Ref, {
			duration: durationTime,
			transform: 'translateX(0)',
			opacity: 1
		});
		gsap.to(line3Ref, { duration: durationTime, transform: 'rotate(0deg)' });
	};

	useEffect(() => {
		if (showLinks) {
			navIconActive();
		} else {
			navIconInactive();
		}
	}, [showLinks]);

	return (
		<>
			<div className='burger-icon' onClick={() => handleNavClick()}>
				<div className='burger-line' ref={(el) => (line1Ref = el)}></div>
				<div className='burger-line' ref={(el) => (line2Ref = el)}></div>
				<div className='burger-line' ref={(el) => (line3Ref = el)}></div>
			</div>
			<RightNav />
		</>
	);
};

export default Burger;
