// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Navbar from './components/navbar/Navbar';

function App() {
	return (
		<Router>
			<main>
				<Navbar />
				<p className='main-app'>App</p>
			</main>
		</Router>
	);
}

export default App;
