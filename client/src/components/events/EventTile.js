// dependencies
import React from 'react';

const EventTile = () => {
	return (
		<div className='event-block'>
			<p className='date ft-blk'>Thursday, 2nd December at 4:15pm</p>
			<div className='event-name-block'>
				{/* set up dynamic icons. file with icon class names */}
				<i className='event-icon fas fa-football-ball'></i>
				<h3 className='event-name'>Sunday Night Football</h3>
			</div>
			<div className='event-teams'>
				<h4 className='team home-team'>Cleveland Browns</h4>
				<h4 className='team'>Tampa Bay Bucaneers</h4>
			</div>
			<p className='event-loc'>Cleveland, OH</p>
		</div>
	);
};

export default EventTile;
