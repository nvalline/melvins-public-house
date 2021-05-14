// dependencies
import React from 'react';
// components
import EventTile from './EventTile';
import Loading from '../loading/Loading';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const Events = () => {
	const { isLoading, events } = useGlobalContext();

	if (isLoading) {
		return (
			<section className='events-container'>
				<div className='black-down-tab'>
					<h2 className='section-title ft-white'>Events</h2>
				</div>
				<Loading color='loading-black' />
			</section>
		);
	}

	if (!events) {
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
				<EventTile />
				{/* {events ? <EventTile /> : noEvents()}
				{events ? <EventTile /> : noEvents()}
				{events ? <EventTile /> : noEvents()} */}
			</div>
		</section>
	);
};

export default Events;
