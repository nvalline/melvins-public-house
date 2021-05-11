// dependencies
import React from 'react';
// components
import AddSpecialForm from '../forms/AddSpecialForm';
import SpecialListTile from './SpecialListTile';
import Button from '../forms/formItems/Button';
// seedData
import { specialsData } from '../../seedData';

const AddSpecials = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Load More Specials Btn Clicked');
	};

	const handleEdit = (id) => {
		console.log(`Edit Btn Clicked, id: ${id}`);
	};

	const handleDelete = (id) => {
		console.log(`Delete Btn Clicked, id: ${id}`);
	};

	return (
		<div className='add-block'>
			<AddSpecialForm />
			<div className='special-list-block'>
				{specialsData.length < 1 ? (
					<h3 className='dashboard-default'>No Specials Scheduled</h3>
				) : (
					specialsData.map((item) => {
						return (
							<SpecialListTile
								key={item.id}
								{...item}
								handleEdit={handleEdit}
								handleDelete={handleDelete}
							/>
						);
					})
				)}
				<Button
					type='button'
					className='load-more-btn'
					onClick={handleClick}
					text='Load More'
				/>
			</div>
		</div>
	);
};

export default AddSpecials;
