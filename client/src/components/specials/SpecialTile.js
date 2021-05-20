// dependencies
import React from 'react';

const SpecialTile = ({
	id,
	title,
	startDate,
	endDate,
	specialType,
	otherType
}) => {
	let type = '';

	if (specialType === 'other') {
		type = otherType;
	} else {
		type = specialType;
	}

	const renderSwitch = (type) => {
		switch (type) {
			case 'food':
				return <i className='special-icon fas fa-utensils'></i>;
			case 'drink':
				return <i className='special-icon fas fa-glass-whiskey'></i>;
			case 'holiday':
				return <i className='special-icon fas fa-crown'></i>;
			default:
				return <i className='special-icon fas fa-crown'></i>;
		}
	};

	return (
		<div className='special-block'>
			<p className='date ft-white'>starts: {startDate}</p>
			<p className='date ft-white'>ends: {endDate}</p>
			<div className='special-name-block'>
				{/* dynamic icons */}
				{renderSwitch(type)}
				<h3 className='special-name'>{title}</h3>
			</div>
		</div>
	);
};

export default SpecialTile;
