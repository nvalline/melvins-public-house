// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// components
import { TextInput } from './formItems/formInputs';
import Button from './formItems/Button';

const LoginForm = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Login Btn Clicked');
	};

	return (
		<div className='form-container'>
			<h2 className='form-header'>Welcome!</h2>
			<p className='form-content'>Please enter your credentials.</p>
			<form className='form-block'>
				<TextInput
					type='email'
					name='email'
					className='input'
					placeholder='Email Address'
				/>
				<TextInput
					type='password'
					name='password'
					className='input password'
					placeholder='Password'
				/>
				<Button
					type='submit'
					className='login-btn'
					onClick={handleClick}
					text='Login'
				/>
			</form>
			<div className='form-disclaimer'>
				<p>Forgot password?</p>
				<Link to='#' className='reset-link'>
					Reset Password
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
