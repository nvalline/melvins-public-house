// dependencies
import React, { useState } from 'react';
// components
import { TextInput, SelectInput, Label } from './formItems/formInputs';
import Button from './formItems/Button';
import Alert from '../alert/Alert';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const AddEventForm = () => {
	const { alert, showAlert } = useGlobalContext();
	const [title, setTitle] = useState('');
	const [startDate, setStartDate] = useState('');
	const [eventType, setEventType] = useState('football');

	const handleClick = (e) => {
		e.preventDefault();
		console.log('Add Event Btn Clicked');

		if (!title && !startDate) {
			showAlert(true, 'Title & Start Date required', 'danger');
		} else if (!title) {
			showAlert(true, 'Title required', 'danger');
		} else if (!startDate) {
			showAlert(true, 'Start Date required', 'danger');
		}

		setTitle('');
		setStartDate('');
	};

	return (
		<div className='form-container'>
			<h2 className='form-header'>Add Event</h2>
			{alert.show && <Alert {...alert} removeAlert={showAlert} />}
			<form className='form-block'>
				<Label htmlFor='title' className='label' text='Event Title' />
				<TextInput
					type='text'
					name='title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='date' className='label' text='Start Date' />
				<TextInput
					type='datetime-local'
					name='date'
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='time' className='label' text='End Date' />
				<TextInput
					type='datetime-local'
					name='time'
					className='input'
					placeholder=''
				/>
				<Label htmlFor='location' className='label' text='Location' />
				<TextInput
					type='text'
					name='location'
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
					value={eventType}
					onChange={(e) => setEventType(e.target.value)}
				/>
				{/* display 'other' input field */}
				{eventType === 'other' && (
					<TextInput
						type='text'
						name='other'
						className='input input-other'
						placeholder='Enter Type'
					/>
				)}
				<Label htmlFor='home_team' className='label' text='Home Team' />
				<TextInput
					type='text'
					name='home_team'
					className='input'
					placeholder=''
				/>
				<Label htmlFor='away_team' className='label' text='Away Team' />
				<TextInput
					type='text'
					name='away_team'
					className='input'
					placeholder=''
				/>
				<Button
					type='submit'
					className='submit-btn'
					onClick={handleClick}
					text='Submit'
				/>
			</form>
		</div>
	);
};

export default AddEventForm;
