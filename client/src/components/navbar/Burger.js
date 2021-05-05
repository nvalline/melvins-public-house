// dependencies
import React, { useState, useEffect, useRef } from 'react';
// components
import RightNav from './RightNav';
// utils
import { useGlobalContext } from '../../utils/AppContext';
import {
	navIconActive,
	navIconInactive,
	navMenuActive,
	navMenuInactive
} from '../../utils/Animations';

const Burger = () => {
	const { showLinks, handleNavClick } = useGlobalContext();
	const [isDisabled, setIsDisabled] = useState('unset');

	let line1Ref = useRef(null);
	let line2Ref = useRef(null);
	let line3Ref = useRef(null);
	let menuRef = useRef(null);
	let yellowBoxRef = useRef(null);

	const disableMenu = () => {
		setIsDisabled('none');
		setTimeout(() => {
			setIsDisabled('unset');
		}, 1200);
	};

	const handleClick = () => {
		disableMenu();
		handleNavClick();
	};

	useEffect(() => {
		if (showLinks) {
			navMenuActive(yellowBoxRef, menuRef);
			navIconActive(line1Ref, line2Ref, line3Ref);
		} else {
			navMenuInactive(menuRef, yellowBoxRef);
			navIconInactive(line1Ref, line2Ref, line3Ref);
		}
	}, [showLinks]);

	return (
		<>
			<div
				className='burger-icon'
				style={{ pointerEvents: isDisabled }}
				onClick={() => handleClick()}
			>
				<div className='burger-line' ref={(el) => (line1Ref = el)}></div>
				<div className='burger-line' ref={(el) => (line2Ref = el)}></div>
				<div className='burger-line' ref={(el) => (line3Ref = el)}></div>
			</div>
			<div className='yellow-wrapper' ref={(el) => (yellowBoxRef = el)}>
				<div className='menu-wrapper' ref={(el) => (menuRef = el)}>
					<RightNav showLinks={showLinks} />
				</div>
			</div>
		</>
	);
};

export default Burger;
