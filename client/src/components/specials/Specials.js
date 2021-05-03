// dependencies
import React from 'react';
// components
import SpecialTile from './SpecialTile';
import Subscribe from '../forms/Subscribe';
import YellowDnTab from '../tabs/YellowDnTab';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const Specials = () => {
	const { isLoading, specials } = useGlobalContext();

	if (isLoading) {
		console.log('LOADING');
	}

	const noSpecials = () => {
		return (
			<h2 className='specials-default'>No Specials Are Currently Offered.</h2>
		);
	};

	return (
		<section className='specials-container'>
			{/* <div className='yellow-down-tab'>
				<h2 className='section-title ft-blk'>Specials</h2>
			</div> */}
			<YellowDnTab title='specials' />
			<div className='special-list'>
				{specials ? <SpecialTile /> : noSpecials()}
				{specials ? <SpecialTile /> : noSpecials()}
				{specials ? <SpecialTile /> : noSpecials()}
				{specials ? <SpecialTile /> : noSpecials()}
			</div>
			<Subscribe />
		</section>
	);
};

export default Specials;
