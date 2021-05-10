// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// components
import Button from '../forms/formItems/Button';
// link
import { OrderOnlineLink } from '../../Links';

const Subhero = () => {
	return (
		<section className='subhero-container'>
			<h1 className='subhero-title'>Melvins Public House</h1>
			<p className='subhero-content'>
				Serving up some of the best wings, burgers, and appetizers in the Heber
				Valley.
			</p>
			<Link to={{ pathname: OrderOnlineLink }} target='_blank'>
				<Button type='button' className='order-btn' text='Order Online' />
			</Link>
		</section>
	);
};

export default Subhero;
