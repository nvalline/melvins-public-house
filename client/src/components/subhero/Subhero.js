// dependencies
import React from 'react';
// components
import OrderButton from '../buttons/OrderButton';

const Subhero = () => {
	return (
		<section className='subhero-container'>
			<h1 className='subhero-title'>Melvins Public House</h1>
			<p className='subhero-content'>
				Serving up some of the best wings, burgers, and appetizers in the Heber
				Valley.
			</p>
			<OrderButton />
		</section>
	);
};

export default Subhero;
