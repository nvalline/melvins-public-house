// dependencies
import React, { useState } from 'react';
// components
import { TextInput } from './formItems/formInputs';
import Button from './formItems/Button';
import Alert from '../alert/Alert';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const Subscribe = () => {
	const { alert, showAlert } = useGlobalContext();
	const [email, setEmail] = useState('');

	const handleClick = (e) => {
		e.preventDefault();

		if (!email) {
			showAlert(true, 'Please enter a valid email.', 'danger');
		} else {
			showAlert(
				true,
				'Thank you for subscribing & joining our family!',
				'success'
			);
		}

		setEmail('');
	};

	return (
		<div className='form-container'>
			<h2 className='form-header'>Be a part of the Melvins family!</h2>
			<p className='form-content'>
				Subscribe to our weekly email to stay current on Melvins events and
				receive special offers.
			</p>
			{alert.show && <Alert {...alert} removeAlert={showAlert} />}
			<form className='form-block'>
				<TextInput
					type='email'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='email'
					placeholder='Email Address'
				/>
				<Button
					type='submit'
					className='subscribe-btn'
					onClick={handleClick}
					text='Subscribe'
				/>
			</form>
			<p className='form-disclaimer'>
				We will not share, sell or spam your email.
			</p>
		</div>
	);
};

export default Subscribe;
