/** @format */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChartLine,
	faGear,
	faBullseye,
} from '@fortawesome/free-solid-svg-icons';
import { DashboardReference } from '@carbon/icons-react';
import { faFile } from '@fortawesome/free-regular-svg-icons';

const RouteLinks = [
	{
		name: 'Dashboard',
		path: 'dashboard',
		icon: <DashboardReference />,
	},
	{
		name: 'Sales',
		path: 'sales',
		icon: <FontAwesomeIcon icon={faBullseye} />,
	},
	{
		name: 'Inventory',
		path: 'inventory',
		icon: <FontAwesomeIcon icon={faFile} />,
	},
	{
		name: 'Stock',
		path: 'stock',
		icon: <FontAwesomeIcon icon={faChartLine} />,
	},
	{
		name: 'Reports',
		path: 'reports',
		icon: <FontAwesomeIcon icon={faFile} />,
	},
	{
		name: 'Settings',
		path: 'settings',
		icon: <FontAwesomeIcon icon={faGear} />,
	},
];
export default RouteLinks;
