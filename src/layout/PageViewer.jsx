/** @format */

import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import Settings from '../pages/admin/settings/Settings';
import Profile from '../pages/admin/settings/Profile';
import Stock from '../pages/admin/stock/Stock';
import Inventory from '../pages/admin/inventory/Inventory';
import Reports from '../pages/admin/reports/Reports';
import Sales from '../pages/admin/sales/Sales';
import ActivitiesView from '../pages/admin/dashboard/ActivitiesView';
import SalesDashboard from '../pages/admin/sales/SalesDashboard';
const PageViewer = () => {
	return (
		<div>
			<Routes>
				<Route path='dashboard' element={<Dashboard />}></Route>
				<Route path='settings/*' element={<Settings />}></Route>

				<Route path='profile' element={<Profile />}></Route>

				<Route path='inventory' element={<Inventory />}></Route>
				<Route path='reports' element={<Reports />}></Route>

				<Route path='sales' element={<Sales />}></Route>
				<Route path='sales-record/:id' element={<SalesDashboard />}></Route>
				<Route path='stock' element={<Stock />}></Route>
				<Route path='activities-view' element={<ActivitiesView />}></Route>
			</Routes>
		</div>
	);
};

export default PageViewer;
