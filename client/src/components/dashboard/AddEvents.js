// dependencies
import React from 'react';
// components
import AddEventForm from '../forms/AddEventForm';
import EventListTile from '../dashboard/EventListTile';
import Button from '../forms/formItems/Button';
import Loading from '../loading/Loading';
// utils
import { useGlobalContext } from '../../utils/AppContext';
// seedData
// import { eventData } from '../../seedData';

const AddEvents = () => {
	const { isLoadingEvents, eventData } = useGlobalContext();

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

	if (isLoadingEvents) {
		return (
			<div className='add-block'>
				<AddEventForm />
				<div className='list-block'>
					<Loading color='loading-white' />
					<Button
						type='button'
						className='load-more-btn'
						onClick={handleClick}
						text='Load More'
					/>
				</div>
			</div>
		);
	}

	if (!eventData) {
		return (
			<div className='add-block'>
				<AddEventForm />
				<div className='list-block'>
					<h3 className='dashboard-default'>No Events Scheduled</h3>
					<Button
						type='button'
						className='load-more-btn'
						onClick={handleClick}
						text='Load More'
					/>
				</div>
			</div>
		);
	}

	return (
		<div className='add-block'>
			<AddEventForm />
			<div className='list-block'>
				{eventData.map((item) => {
					return (
						<EventListTile
							key={item._id}
							{...item}
							handleEdit={handleEdit}
							handleDelete={handleDelete}
						/>
					);
				})}
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
