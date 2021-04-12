// dependencies
import React, { useState } from 'react';
// components
import EventTile from './EventTile';

const Events = () => {
	const [loading, setLoading] = useState(false);
	const [events, setEvents] = useState(false);

	if (loading) {
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
				<h2 className='events-title'>Events</h2>
			</div>
			{events ? <EventTile /> : noEvents()}
		</section>
	);
};

export default Events;
