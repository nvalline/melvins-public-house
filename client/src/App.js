// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// pages
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<main>
				<Navbar />
				<Home />
				<Footer />
			</main>
		</Router>
	);
}

export default App;
