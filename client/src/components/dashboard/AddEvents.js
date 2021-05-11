// dependencies
import React from 'react';
// components
import AddEventForm from '../forms/AddEventForm';
import EventListTile from '../dashboard/EventListTile';
import Button from '../forms/formItems/Button';
// seedData
import { eventData } from '../../seedData';

const AddEvents = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Load More Events Btn Clicked');
	};

	const handleEdit = (id) => {
		console.log(`Edit Btn Clicked, id: ${id}`);
	};

	const handleDelete = (id) => {
		console.log(`Delete Btn Clicked, id: ${id}`);
	};

	return (
		<div className='add-block'>
			<AddEventForm />
			<div className='event-list-block'>
				{eventData < 1 ? (
					<h3 className='dashboard-default'>No Events Scheduled</h3>
				) : (
					eventData.map((item) => {
						return (
							<EventListTile
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

export default AddEvents;
