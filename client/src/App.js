// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Subhero from './components/subhero/Subhero';

function App() {
	return (
		<Router>
			<main>
				<Navbar />
				<Hero />
				<Subhero />
			</main>
		</Router>
	);
}

export default App;
