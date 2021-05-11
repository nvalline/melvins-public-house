// dependencies
import React, { useState } from 'react';
// components
import { TextInput, SelectInput, Label } from './formItems/formInputs';
import Button from './formItems/Button';
import Alert from '../alert/Alert';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const AddUserForm = () => {
	const { alert, showAlert } = useGlobalContext();
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		console.log('Add User Btn Clicked');

		if (!fullName && !email) {
			showAlert(true, 'Enter name & email', 'danger');
		} else if (!fullName) {
			showAlert(true, 'Enter a name', 'danger');
		} else if (!email) {
			showAlert(true, 'Enter a valid email', 'danger');
		}

		setFullName('');
		setEmail('');
	};

	return (
		<div className='form-container'>
			<h2 className='form-header'>Add User</h2>
			{alert.show && <Alert {...alert} removeAlert={showAlert} />}
			<form className='form-block'>
				<Label htmlFor='fullName' className='label' text='Full Name' />
				<TextInput
					type='text'
					name='fullName'
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					className='input'
					placeholder=''
				/>
				<Label htmlFor='email' className='label' text='Email Address' />
				<TextInput
					type='email'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='input'
					placeholder=''
				/>
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
