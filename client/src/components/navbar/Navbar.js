// dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
// components
import { NavLinks } from '../../Links';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	return (
		<nav>
			<div className='nav-center'>
				<div className='mobile-nav'>
					<Link to='/' className='logo'>
						<p>
							melvins <span className='sub-logo'>public house</span>
						</p>
					</Link>

					{/* mobile bars */}
					<button
						className='nav-toggle'
						onClick={() => setShowLinks(!showLinks)}
					>
						<FaBars />
					</button>
				</div>
				<div
					className={showLinks ? 'links-container active' : 'links-container'}
				>
					<ul className='links'>
						{NavLinks.map((link, index) => {
							return (
								<li key={index}>
									<Link to={link.url} className={link.className}>
										{link.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
