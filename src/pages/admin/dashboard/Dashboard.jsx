/** @format */

import React from 'react';
import Activities from './components/Activities';
import Overview from './components/Overview';
import Sales from './components/Sales';

function Dashboard() {
	return (
		<div className='px-6 py-4'>
			<Overview />
			<Activities />
			<Sales />
		</div>
	);
}

export default Dashboard;
