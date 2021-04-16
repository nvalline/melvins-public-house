// dependencies
import React, { useRef } from 'react';

const AboutContent = () => {
	return (
		<>
			<div className='trim'></div>
			<div className='yellow-down-tab'>
				<h3 className='section-title ft-blk'>about</h3>
			</div>
			<article className='bio-block'>
				<p className='bio ft-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
					similique reiciendis! Exercitationem inventore sunt minima voluptates
					qui officiis doloribus odit voluptas, voluptatibus animi distinctio
					numquam nostrum rerum id molestiae eius hic!
				</p>
				<p className='bio ft-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
					similique reiciendis! Exercitationem inventore sunt minima voluptates
					qui officiis doloribus odit voluptas, voluptatibus animi distinctio
					numquam nostrum rerum id molestiae eius hic!
				</p>
				{/* <p className='bio ft-white'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
					similique reiciendis! Exercitationem inventore sunt minima voluptates
					qui officiis doloribus odit voluptas, voluptatibus animi distinctio
					numquam nostrum rerum id molestiae eius hic!
				</p> */}
			</article>
		</>
	);
};

export default AboutContent;
