// dependencies
import React from 'react';

const EventTile = ({
	id,
	title,
	startDate,
	endDate,
	location,
	eventType,
	otherType,
	homeTeam,
	awayTeam
}) => {
	let type = '';

	if (eventType === 'other') {
		type = otherType;
	} else {
		type = eventType;
	}

	const renderSwitch = (type) => {
		switch (type) {
			case 'football':
				return <i className='event-icon fas fa-football-ball'></i>;
			case 'basketball':
				return <i className='event-icon fas fa-basketball-ball'></i>;
			case 'hockey':
				return <i className='event-icon fas fa-hockey-puck'></i>;
			case 'baseball':
				return <i className='event-icon fas fa-baseball-ball'></i>;
			case 'olympic':
				return <i className='event-icon fas fa-passport'></i>;
			case 'soccer':
				return <i className='event-icon fas fa-futbol'></i>;
			case 'golf':
				return <i className='event-icon fas fa-golf-ball'></i>;
			case 'fights':
				return <i className='event-icon fas fa-hand-rock'></i>;
			case 'music':
				return <i className='event-icon fas fa-music'></i>;
			default:
				return <i className='event-icon fas fa-crown'></i>;
		}
	};

	return (
		<div className='event-block'>
			<p className='date ft-blk'>starts: {startDate}</p>
			<p className='date ft-blk'>ends: {endDate}</p>
			<div className='event-name-block'>
				{/* set up dynamic icons. file with icon class names */}
				{renderSwitch(type)}
				<h3 className='event-name'>{title}</h3>
			</div>
			{homeTeam && (
				<div className='event-teams'>
					<h4 className='team home-team'>{homeTeam}</h4>
					<h4 className='team'>{awayTeam}</h4>
				</div>
			)}
			<p className='event-loc'>{location}</p>
		</div>
	);
};

export default EventTile;
