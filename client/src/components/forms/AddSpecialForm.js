// dependencies
import React, { useState } from 'react';
// components
import { TextInput, SelectInput, Label } from './formItems/formInputs';
import Button from './formItems/Button';
import Alert from '../alert/Alert';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const AddSpecialForm = () => {
	const { alert, showAlert } = useGlobalContext();
	const [title, setTitle] = useState('');
	const [startDate, setStartDate] = useState('');
	const [specialType, setSpecialType] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		console.log('Add Special Btn Clicked');

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
			<h2 className='form-header'>Add Special</h2>
			<form className='form-block'>
				<Label htmlFor='title' className='label' text='Special Title' />
				{alert.show && <Alert {...alert} removeAlert={showAlert} />}
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
					onChange={(e) => e.target.value}
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
				<Label htmlFor='type' className='label' text='Type' />
				<SelectInput
					name='type'
					id='type'
					className='input'
					options={[
						{ value: 'food', label: 'Food' },
						{ value: 'drink', label: 'Drink' },
						{ value: 'holiday', label: 'Holiday' },
						{ value: 'other', label: 'Other' }
					]}
					value={specialType}
					onChange={(e) => setSpecialType(e.target.value)}
				/>
				{/* display 'other' input field */}
				{specialType === 'other' && (
					<TextInput
						type='text'
						name='other'
						className='input input-other'
						placeholder='Enter Type'
					/>
				)}
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

export default AddSpecialForm;
