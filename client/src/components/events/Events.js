// dependencies
import React from 'react';
// components
import EventTile from './EventTile';
import Loading from '../loading/Loading';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const Events = () => {
	const { isLoadingEvents, eventData } = useGlobalContext();

	if (isLoadingEvents) {
		return (
			<section className='events-container'>
				<div className='black-down-tab'>
					<h2 className='section-title ft-white'>Events</h2>
				</div>
				<Loading color='loading-black' />
			</section>
		);
	}

	if (!eventData) {
		return (
			<section className='events-container'>
				<div className='black-down-tab'>
					<h2 className='section-title ft-white'>Events</h2>
				</div>
				<h2 className='events-default'>No Events Are Currently Scheduled.</h2>
			</section>
		);
	}

	return (
		<section className='events-container'>
			<div className='black-down-tab'>
				<h2 className='section-title ft-white'>Events</h2>
			</div>
			<div className='events-list'>
				{eventData.map((item) => {
					return <EventTile key={item._id} {...item} />;
				})}
			</div>
		</section>
	);
};

export default Events;
