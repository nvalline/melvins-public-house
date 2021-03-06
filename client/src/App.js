// dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
	return (
		<Router>
			<main>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/dashboard'>
						<Dashboard />
					</Route>
				</Switch>
				<Footer />
			</main>
		</Router>
	);
}

export default App;
