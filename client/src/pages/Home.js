// dependencies
import React from 'react';
// components
import Hero from '../components/hero/Hero';
import Subhero from '../components/subhero/Subhero';
import Events from '../components/events/Events';
import Specials from '../components/specials/Specials';

const Home = () => {
	return (
		<>
			<Hero />
			<Subhero />
			<Events />
			<Specials />
		</>
	);
};

export default Home;
