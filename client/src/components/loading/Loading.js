// dependencies
import React, { useEffect, useRef } from 'react';
// utils
import { loadingSpin } from '../../utils/Animations';

const Loading = ({ color }) => {
	let h3Ref = useRef(null);

	useEffect(() => {
		loadingSpin(h3Ref);
	});

	return (
		<div className='loading-wrapper'>
			<h3 className={`loading-el ${color}`} ref={(el) => (h3Ref = el)}>
				M
			</h3>
		</div>
	);
};

export default Loading;
