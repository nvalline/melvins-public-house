// dependencies
import React from 'react';
// components
import Button from '../forms/formItems/Button';

const Subhero = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Order Online Btn Clicked');
	};

	return (
		<section className='subhero-container'>
			<h1 className='subhero-title'>Melvins Public House</h1>
			<p className='subhero-content'>
				Serving up some of the best wings, burgers, and appetizers in the Heber
				Valley.
			</p>
			<Button
				type='button'
				className='order-btn'
				onClick={handleClick}
				text='Order Online'
			/>
		</section>
	);
};

export default Subhero;
