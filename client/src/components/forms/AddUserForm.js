// dependencies
import React from 'react';
// components
import { TextInput, SelectInput, Label } from './formItems/formInputs';
import Button from './formItems/Button';

const AddUserForm = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Add User Btn Clicked');
	};

	return (
		<div className='form-container'>
			<h2 className='form-header'>Add User</h2>
			<form className='form-block'>
				<Label htmlFor='fullName' className='label' text='Full Name' />
				<TextInput
					type='text'
					name='fullName'
					className='input'
					placeholder=''
				/>
				<Label htmlFor='email' className='label' text='Email Address' />
				<TextInput type='email' name='email' className='input' placeholder='' />
				<Label htmlFor='role' className='label' text='Role' />
				<SelectInput
					name='role'
					id='role'
					className='input'
					options={[
						{ value: 'admin', label: 'Admin' },
						{ value: 'user', label: 'User' }
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

export default AddUserForm;
