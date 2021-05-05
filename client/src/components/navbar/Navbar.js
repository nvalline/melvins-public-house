// dependencies
import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
// components
import Burger from './Burger';
// utils
import { useGlobalContext } from '../../utils/AppContext';

const Navbar = ({ history }) => {
	const { handlePageChange } = useGlobalContext();

	// useEffect for page changes
	useEffect(() => {
		// listen for page changes
		history.listen(() => {
			handlePageChange();
		});
	});

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

export default withRouter(Navbar);
