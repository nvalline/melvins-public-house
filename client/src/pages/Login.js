// dependencies
import React from 'react';
// components
import LoginForm from '../components/forms/LoginForm';

const Login = () => {
	return (
		<section className='login-container'>
			<div className='trim'></div>
			<div className='yellow-down-tab'>
				<h3 className='section-title ft-blk'>login</h3>
			</div>
			<LoginForm />
		</section>
	);
};

export default Login;
