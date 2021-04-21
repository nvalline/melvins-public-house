// dependencies
import React from 'react';
// components
import LoginForm from '../components/forms/LoginForm';
import YellowDnTab from '../components/tabs/YellowDnTab';

const Login = () => {
	return (
		<section className='login-container'>
			<div className='trim'></div>
			<YellowDnTab title='login' />
			<LoginForm />
		</section>
	);
};

export default Login;
