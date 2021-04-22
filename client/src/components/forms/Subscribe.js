// dependencies
import React from 'react';
// components
import { TextInput } from './formItems/formInputs';
import Button from '../buttons/Button';

const Subscribe = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Subscribe Btn Clicked');
	};

	return (
		<div className='form-container'>
			<h2 className='form-header'>Be a part of the Melvins family!</h2>
			<p className='form-content'>
				Subscribe to our weekly email to stay current on Melvins events and
				receive special offers.
			</p>
			<form className='form-block'>
				<TextInput
					type='email'
					name='email'
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
