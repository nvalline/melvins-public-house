// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Navbar from './components/navbar/Navbar';
// pages
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<main>
				<Navbar />
				<Home />
			</main>
		</Router>
	);
}

export default App;
