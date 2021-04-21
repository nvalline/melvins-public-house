// dependencies
import React from 'react';

const LoginBtn = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('Login Btn Clicked');
	};

	return (
		<>
			<button type='submit' className='login-btn' onClick={handleClick}>
				Login
			</button>
		</>
	);
};

export default LoginBtn;
