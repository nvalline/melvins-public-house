// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// components
import Burger from './Burger';

const Navbar = () => {
	return (
		<nav className='nav-container'>
			<div className='mobile-nav'>
				<Link to='/' className='logo'>
					<p>
						melvins <span className='sub-logo'>public house</span>
					</p>
				</Link>
			</div>
			<Burger />
		</nav>
	);
};

export default Navbar;
