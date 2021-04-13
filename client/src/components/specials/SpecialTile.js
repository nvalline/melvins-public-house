// dependencies
import React from 'react';

const SpecialTile = () => {
	return (
		<div className='special-block'>
			<p className='date ft-white'>Monday, 1st January at 11:00am</p>
			<div className='special-name-block'>
				{/* set up dynamic icons. file with icon class names */}
				<i className='special-icon fas fa-glass-whiskey'></i>
				<h3 className='special-name'>Bloody Mary Bar</h3>
			</div>
		</div>
	);
};

export default SpecialTile;
