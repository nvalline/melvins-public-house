// dependencies
import React from 'react';

const EventListTile = ({
	id,
	title,
	date,
	time,
	sport,
	location,
	home_team,
	away_team,
	handleDelete,
	handleEdit
}) => {
	return (
		<div className='tile'>
			<div className='info'>
				<h3 className='tile-title'>{title}</h3>
				<p className='tile-role'>{date}</p>
				<p>{time}</p>
				<p>{sport}</p>
				<p>{location}</p>
				{home_team && <p>{`Home: ${home_team}`}</p>}
				{away_team && <p>{`Away: ${away_team}`}</p>}
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
