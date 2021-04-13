// dependencies
import React, { useState } from 'react';
// components
import SpecialTile from './SpecialTile';
import Subscribe from '../form/Subscribe';

const Specials = () => {
	const [loading, setLoading] = useState(false);
	const [specials, setSpecials] = useState(true);

	if (loading) {
		console.log('LOADING');
	}

	const noSpecials = () => {
		return (
			<h2 className='specials-default'>No Specials Are Currently Offered.</h2>
		);
	};

	return (
		<section className='specials-container'>
			<div className='yellow-down-tab'>
				<h2 className='section-title ft-blk'>Specials</h2>
			</div>
			{specials ? <SpecialTile /> : noSpecials()}
			<Subscribe />
		</section>
	);
};

export default Specials;
