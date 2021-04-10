// dependencies
import React from 'react';

const OrderButton = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Order Btn Clicked');
	};

	return (
		<>
			<button type='button' className='order-btn' onClick={handleClick}>
				Order Online
			</button>
		</>
	);
};

export default OrderButton;
