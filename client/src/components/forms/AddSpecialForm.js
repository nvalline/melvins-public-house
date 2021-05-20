// dependencies
import React from 'react';
// components
import { TextInput, SelectInput, Label } from './formItems/formInputs';
import Button from './formItems/Button';
import Alert from '../alert/Alert';
// utils
import { useGlobalContext } from '../../utils/AppContext';
import { Api } from '../../utils/Api';

const AddSpecialForm = () => {
	const {
		alert,
		showAlert,
		specialState,
		handleSpecialState,
		clearSpecialForm,
		fetchSpecialData
	} = useGlobalContext();

	const handleClick = (e) => {
		e.preventDefault();

		if (
			!specialState.title &&
			!specialState.startDate &&
			!specialState.endDate
		) {
			showAlert(true, 'Title & Dates required', 'danger');
		} else if (!specialState.title) {
			showAlert(true, 'Title required', 'danger');
		} else if (!specialState.startDate) {
			showAlert(true, 'Start Date required', 'danger');
		} else if (!specialState.endDate) {
			showAlert(true, 'End Date required', 'danger');
		}

		// POST specialState to DB
		if (specialState.title && specialState.startDate && specialState.endDate) {
			let formData = {
				title: specialState.title,
				startDate: specialState.startDate,
				endDate: specialState.endDate,
				specialType: specialState.specialType,
				otherType: specialState.otherType
			};

			Api.saveSpecial(formData)
				.then((res) => {
					showAlert(true, 'Special has been saved', 'success');
					clearSpecialForm();
					fetchSpecialData();
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div className='form-container'>
			<h2 className='form-header'>Add Special</h2>
			{alert.show && <Alert {...alert} removeAlert={showAlert} />}
			<form className='form-block'>
				<Label htmlFor='title' className='label' text='Special Title' />
				<TextInput
					type='text'
					name='title'
					value={specialState.title}
					onChange={(e) => handleSpecialState(e)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='startDate' className='label' text='Start Date' />
				<TextInput
					type='datetime-local'
					name='startDate'
					value={specialState.startDate}
					onChange={(e) => handleSpecialState(e)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='endDate' className='label' text='End Date' />
				<TextInput
					type='datetime-local'
					name='endDate'
					value={specialState.endDate}
					onChange={(e) => handleSpecialState(e)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='speicalType' className='label' text='Type' />
				<SelectInput
					name='specialType'
					id='type'
					className='input'
					options={[
						{ value: 'food', label: 'Food' },
						{ value: 'drink', label: 'Drink' },
						{ value: 'holiday', label: 'Holiday' },
						{ value: 'other', label: 'Other' }
					]}
					value={specialState.specialType}
					onChange={(e) => handleSpecialState(e)}
				/>
				{/* display 'other' input field */}
				{specialState.specialType === 'other' && (
					<TextInput
						type='text'
						name='otherType'
						value={specialState.otherType}
						onChange={(e) => handleSpecialState(e)}
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
