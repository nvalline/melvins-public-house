// dependencies
import React from 'react';

const SubscribeBtn = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Subscribe Btn Clicked');
	};

	return (
		<>
			<button type='submit' className='subscribe-btn' onClick={handleClick}>
				Subscribe
			</button>
		</>
	);
};

export default SubscribeBtn;
