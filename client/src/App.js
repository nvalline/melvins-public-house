// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

function App() {
	return (
		<Router>
			<main>
				<Navbar />
				<Hero />
			</main>
		</Router>
	);
}

export default App;
