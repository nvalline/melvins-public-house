// dependencies
import React from 'react';
// components
import SubscribeBtn from '../buttons/SubscribeBtn';

const Subscribe = () => {
	return (
		<div className='form-container'>
			<h2 className='form-header'>Be a part of the Melvins family!</h2>
			<p className='form-content'>
				Subscribe to our weekly email to stay current on Melvins events and
				receive special offers.
			</p>
			<form className='form-block'>
				<input
					type='email'
					name='email'
					className='email'
					placeholder='Email Address'
				/>
				<SubscribeBtn />
			</form>
			<p className='form-disclaimer'>
				We will not share, sell or spam your email.
			</p>
		</div>
	);
};

export default Subscribe;
