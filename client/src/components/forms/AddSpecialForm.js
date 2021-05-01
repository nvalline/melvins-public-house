// dependencies
import React from 'react';
// components
import { TextInput, SelectInput, Label } from './formItems/formInputs';
import Button from './formItems/Button';

const AddSpecialForm = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Add Special Btn Clicked');
	};

	return (
		<div className='form-container'>
			<h2 className='form-header'>Add Special</h2>
			<form className='form-block'>
				<Label htmlFor='title' className='label' text='Special Title' />
				<TextInput type='text' name='title' className='input' placeholder='' />
				<Label htmlFor='date' className='label' text='Date' />
				<TextInput type='text' name='date' className='input' placeholder='' />
				<Label htmlFor='time' className='label' text='Time' />
				<TextInput type='text' name='time' className='input' placeholder='' />
				<Label htmlFor='type' className='label' text='Sport' />
				<SelectInput
					name='type'
					id='type'
					className='input'
					options={[
						{ value: 'food', label: 'Food' },
						{ value: 'drink', label: 'Drink' },
						{ value: 'holiday', label: 'Holiday' }
					]}
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

export default AddSpecialForm;
