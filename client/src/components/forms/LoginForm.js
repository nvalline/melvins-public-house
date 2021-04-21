// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// components
import LoginBtn from '../buttons/LoginBtn';

const LoginForm = () => {
	return (
		<div className='form-container'>
			<h2 className='form-header'>Welcome Back!</h2>
			<p className='form-content'>Please enter your credentials.</p>
			<form className='form-block'>
				<input
					type='email'
					name='email'
					className='input'
					placeholder='Email Address'
				/>
				<input
					type='password'
					name='password'
					className='input password'
					placeholder='Password'
				/>
				<LoginBtn />
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
