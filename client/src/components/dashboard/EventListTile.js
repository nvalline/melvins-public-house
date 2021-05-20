// dependencies
import React from 'react';

const EventListTile = ({
	id,
	title,
	startDate,
	endDate,
	location,
	eventType,
	otherType,
	homeTeam,
	awayTeam,
	handleDelete,
	handleEdit
}) => {
	return (
		<div className='tile'>
			<div className='info'>
				<h3 className='tile-title'>{title}</h3>
				<p className='tile-role'>{startDate}</p>
				<p>endDate: {endDate}</p>
				<p>eventType: {eventType}</p>
				<p>{location}</p>
				{homeTeam && <p>{`Home: ${homeTeam}`}</p>}
				{awayTeam && <p>{`Away: ${awayTeam}`}</p>}
			</div>
			<div className='tile-icons'>
				<i className='far fa-edit icon' onClick={() => handleEdit(id)}></i>
				<i
					className='far fa-trash-alt icon'
					onClick={() => handleDelete(id)}
				></i>
			</div>
		</div>
	);
};

export default EventListTile;
