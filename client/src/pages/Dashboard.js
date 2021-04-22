// dependencies
import React from 'react';
// components
import YellowDnTab from '../components/tabs/YellowDnTab';
import AddUsers from '../components/dashboard/AddUsers';
import AddEvents from '../components/dashboard/AddEvents';
import AddSpecials from '../components/dashboard/AddSpecials';

const Dashboard = () => {
	return (
		<section className='dashboard-container'>
			<div className='trim'></div>
			<YellowDnTab title='dashboard' />
			<AddUsers />
			<AddEvents />
			<AddSpecials />
		</section>
	);
};

export default Dashboard;
