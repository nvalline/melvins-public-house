// dependencies
import React from 'react';
// components
import SpecialTile from './SpecialTile';
import Subscribe from '../forms/Subscribe';
import YellowDnTab from '../tabs/YellowDnTab';
import Loading from '../loading/Loading';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const Specials = () => {
	const { isLoadingSpecials, specialData } = useGlobalContext();

	if (isLoadingSpecials) {
		return (
			<section className='specials-container'>
				<YellowDnTab title='specials' />
				<Loading color='loading-white' />
				<Subscribe />
			</section>
		);
	}

	if (!specialData) {
		return (
			<section className='specials-container'>
				<YellowDnTab title='specials' />
				<h2 className='specials-default'>No Specials Are Currently Offered.</h2>
				<Subscribe />
			</section>
		);
	}

	return (
		<section className='specials-container'>
			<YellowDnTab title='specials' />
			<div className='special-list'>
				{specialData.map((item) => {
					return <SpecialTile key={item._id} {...item} />;
				})}
			</div>
			<Subscribe />
		</section>
	);
};

export default Specials;
