// dependencies
import React from 'react';
// components
import EventTile from './EventTile';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const Events = () => {
	const { isLoading, events } = useGlobalContext();

	if (isLoading) {
		console.log('LOADING');
	}

	const noEvents = () => {
		return (
			<h2 className='events-default'>No Events Are Currently Scheduled.</h2>
		);
	};

	return (
		<section className='events-container'>
			<div className='black-down-tab'>
				<h2 className='section-title ft-white'>Events</h2>
			</div>
			<div className='events-list'>
				{events ? <EventTile /> : noEvents()}
				{events ? <EventTile /> : noEvents()}
				{events ? <EventTile /> : noEvents()}
				{events ? <EventTile /> : noEvents()}
			</div>
		</section>
	);
};

export default Events;
