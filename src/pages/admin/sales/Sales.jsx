/** @format */

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SalesOrder from './SalesOrder';
import TrackSales from './TrackSales';
import Purchase from './Purchase';

function Sales() {
	return (
		<div className='px-4 py-4'>
			<Tabs>
				<TabList className='w-full h-12 flex items-center bg-pink-100 gap-5 rounded-lg border border-gray-400 px-2'>
					<Tab className='cursor-pointer px-10 py-2'>Purchase Order</Tab>
					<Tab className='cursor-pointer px-10 py-2'>Sales Order</Tab>
					<Tab className='cursor-pointer px-10 py-2'>Track Sales</Tab>
				</TabList>
				<div className='mt-6'>
					<TabPanel>
						<Purchase />
					</TabPanel>
					<TabPanel>
						<SalesOrder />
					</TabPanel>
					<TabPanel>
						<TrackSales />
					</TabPanel>
				</div>
			</Tabs>
		</div>
	);
}

export default Sales;
