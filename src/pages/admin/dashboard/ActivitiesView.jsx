/** @format */

import React, { useState } from 'react';
import DashboardTop from './components/DashboardTop';
import DashboardBottom from '../../../components/DashboardBottom';
import ActivitiesTable from './components/ActivitiesTable';
import Chatbox from '../../../components/Chatbox';
import ChatButton from '../../../components/ChatButton';

function ActivitiesView() {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(!open);
	};
	return (
		<div className='w-full px-6 py-4'>
			<div onClick={open && handleDrawerOpen}>
				<DashboardTop />
				<ActivitiesTable />
				<DashboardBottom handleDrawerOpen={handleDrawerOpen} />
				<ChatButton handleDrawerOpen={handleDrawerOpen} />
			</div>
			<Chatbox handleDrawerOpen={handleDrawerOpen} open={open} />
		</div>
	);
}

export default ActivitiesView;
