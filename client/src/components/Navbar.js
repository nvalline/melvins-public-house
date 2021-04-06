// dependencies
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;

		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = '0px';
		}
	}, [showLinks]);

	return (
		<nav>
			<div className='nav-center'>
				<div className='mobile-nav'>
					<Link to='/' className='logo'>
						<p>
							melvins <span>public house</span>
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
				<div className='links-container' ref={linksContainerRef}>
					<ul className='links' ref={linksRef}>
						<li>
							<Link to='#' className='link'>
								order online
							</Link>
						</li>
						<li>
							<Link to='#' className='link'>
								about
							</Link>
						</li>
						<li>
							<Link to='#' className='link'>
								contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
