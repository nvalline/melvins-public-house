// dependencies
import React from 'react';

const SpecialListTile = ({
	id,
	title,
	date,
	time,
	type,
	handleEdit,
	handleDelete
}) => {
	return (
		<div className='tile'>
			<div className='info'>
				<h3 className='tile-title'>{title}</h3>
				<p className='tile-role'>{date}</p>
				<p>{time}</p>
				<p>{type}</p>
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

export default SpecialListTile;
