// dependencies
import React from 'react';
// components
import { TextInput, SelectInput, Label } from './formItems/formInputs';
import Button from './formItems/Button';
import Alert from '../alert/Alert';
// utils
import { useGlobalContext } from '../../utils/AppContext';
import { Api } from '../../utils/Api';

const EditEvent = () => {
	const {
		alert,
		showAlert,
		editEventState,
		handleEventState,
		handleEditEventModal
	} = useGlobalContext();

	const handleClick = (e) => {
		e.preventDefault();

		// ! UPDATE DB WITH EDITS

		// if (!eventState.title && !eventState.startDate && !eventState.endDate) {
		// 	showAlert(true, 'Title & Dates required', 'danger');
		// } else if (!eventState.title) {
		// 	showAlert(true, 'Title required', 'danger');
		// } else if (!eventState.startDate) {
		// 	showAlert(true, 'Start Date required', 'danger');
		// } else if (!eventState.endDate) {
		// 	showAlert(true, 'End Date required', 'danger');
		// }

		// // POST eventState to DB
		// if (eventState.title && eventState.startDate && eventState.endDate) {
		// 	let formData = {
		// 		title: eventState.title,
		// 		startDate: eventState.startDate,
		// 		endDate: eventState.endDate,
		// 		location: eventState.location,
		// 		eventType: eventState.eventType,
		// 		otherType: eventState.otherType,
		// 		homeTeam: eventState.homeTeam,
		// 		awayTeam: eventState.awayTeam
		// 	};

		// 	Api.saveEvent(formData)
		// 		.then((res) => {
		// 			showAlert(true, 'Event has been saved', 'success');
		// 			clearEventForm();
		// 			fetchEventData();
		// 		})
		// 		.catch((err) => console.log(err));

		// }

		handleEditEventModal();
	};

	const handleCancel = () => {
		handleEditEventModal();
	};

	return (
		<div className='form-container edit-form'>
			<h2 className='form-header'>Edit Event</h2>
			{alert.show && <Alert {...alert} removeAlert={showAlert} />}
			<form className='form-block'>
				<Label htmlFor='title' className='label' text='Event Title' />
				<TextInput
					type='text'
					name='title'
					value={editEventState.title}
					onChange={(e) => handleEventState(e)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='startDate' className='label' text='Start Date' />
				<TextInput
					type='datetime-local'
					name='startDate'
					value={editEventState.startDate}
					onChange={(e) => handleEventState(e)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='endDate' className='label' text='End Date' />
				<TextInput
					type='datetime-local'
					name='endDate'
					value={editEventState.endDate}
					onChange={(e) => handleEventState(e)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='location' className='label' text='Location' />
				<TextInput
					type='text'
					name='location'
					value={editEventState.location}
					onChange={(e) => handleEventState(e)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='eventType' className='label' text='Type' />
				<SelectInput
					name='eventType'
					id='eventType'
					className='input'
					options={[
						{ value: 'football', label: 'Football' },
						{ value: 'basketball', label: 'Basketball' },
						{ value: 'hockey', label: 'Hockey' },
						{ value: 'baseball', label: 'Baseball' },
						{ value: 'olympic', label: 'Olympic' },
						{ value: 'soccer', label: 'Soccer' },
						{ value: 'golf', label: 'Golf' },
						{ value: 'fights', label: 'Fights' },
						{ value: 'music', label: 'Music' },
						{ value: 'other', label: 'Other' }
					]}
					value={editEventState.eventType}
					onChange={(e) => handleEventState(e)}
				/>
				{/* display 'other' input field */}
				{editEventState.eventType === 'other' && (
					<TextInput
						type='text'
						name='otherType'
						value={editEventState.otherType}
						onChange={(e) => handleEventState(e)}
						className='input input-other'
						placeholder='Enter Type'
					/>
				)}
				<Label htmlFor='homeTeam' className='label' text='Home Team' />
				<TextInput
					type='text'
					name='homeTeam'
					value={editEventState.homeTeam}
					onChange={(e) => handleEventState(e)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='awayTeam' className='label' text='Away Team' />
				<TextInput
					type='text'
					name='awayTeam'
					value={editEventState.awayTeam}
					onChange={(e) => handleEventState(e)}
					className='input'
					placeholder=''
				/>
				<Button
					type='submit'
					className='submit-btn'
					onClick={handleClick}
					text='Submit'
				/>
				<Button
					type='button'
					className='cancel-btn'
					onClick={handleCancel}
					text='Cancel'
				/>
			</form>
		</div>
	);
};

export default EditEvent;
