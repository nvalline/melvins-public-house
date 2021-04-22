// dependencies
import React from 'react';
// components
import { TextInput, SelectInput, Label } from './formItems/formInputs';
import Button from './formItems/Button';

const AddEventForm = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Add Event Btn Clicked');
	};

	return (
		<div className='form-container'>
			<h2 className='form-header'>Add Event</h2>
			<form className='form-block'>
				<Label htmlFor='title' className='label' text='Event Title' />
				<TextInput type='text' name='title' className='input' placeholder='' />
				<Label htmlFor='date' className='label' text='Date' />
				<TextInput type='text' name='date' className='input' placeholder='' />
				<Label htmlFor='time' className='label' text='Time' />
				<TextInput type='text' name='time' className='input' placeholder='' />
				<Label htmlFor='location' className='label' text='Location' />
				<TextInput
					type='text'
					name='location'
					className='input'
					placeholder=''
				/>
				<Label htmlFor='sport' className='label' text='Sport' />
				<SelectInput
					name='sport'
					id='sport'
					className='input'
					options={[
						{ value: 'football', label: 'Football' },
						{ value: 'basketball', label: 'Basketball' },
						{ value: 'hockey', label: 'Hockey' },
						{ value: 'baseball', label: 'Baseball' },
						{ value: 'olympic', label: 'Olympic' },
						{ value: 'soccer', label: 'Soccer' },
						{ value: 'golf', label: 'Golf' },
						{ value: 'fights', label: 'Fights' }
					]}
				/>
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
