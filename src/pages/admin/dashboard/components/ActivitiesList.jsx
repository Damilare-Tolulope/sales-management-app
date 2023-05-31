/** @format */

import React from 'react';
import DashboardActivities from './DashboardActivities';
import FilterOption from './FilterOption';
import DownarrowIcon from '../../../../assets/images/dashboard/downarrow.png';

const ActivitiesList = ({ handleFilterToggle, toggle }) => {
	return (
		<div className='w-full'>
			<DashboardActivities>
				<div className='flex justify-between items-center'>
					<div
						className='font-[500] text-[#3C4652] leading-[24px]
		tracking-[0.0015em] '>
						Today
					</div>
					<div className='flex relative'>
						<p
							className='flex items-center mb-[11px]  
				text-[14px]'>
							<span
								className='text-[14px] text-[#8B8383]
				mr-[4px] '>
								Sort:
							</span>
							<strong
								className='text-[#000000] font-[400]
				leading-[16px] text-[14px]  mr-[7.2px] '>
								Alphabetically
							</strong>
							<img
								src={DownarrowIcon}
								onClick={handleFilterToggle}
								className='w-[14px]  '
								alt='down arrow'
							/>
						</p>
						<FilterOption
							handleFilterToggle={handleFilterToggle}
							toggle={toggle}
						/>
					</div>
				</div>
				<li
					className='bg-[#ebcfda4d] min-h-[56px] flex justify-between
					items-center mb-[8px] xs:text-[14px] sm:text-[16px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<>12:00pm</>
					</span>
				</li>
			</DashboardActivities>
			<DashboardActivities>
				<li
					className='bg-[#ebcfda4d] w-full min-h-[56px] flex justify-between
			items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span className='xs:text-[14px] sm:text-[16px]'>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<time className='xs:text-[14px] sm:text-[16px]'>11:23pm</time>
					</span>
				</li>
			</DashboardActivities>
			<DashboardActivities>
				<li
					className='bg-[#ebcfda4d] w-full  min-h-[56px] flex justify-between
			items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<>10:40am</>
					</span>
				</li>
			</DashboardActivities>

			<DashboardActivities>
				<div className='flex justify-between items-center'>
					<div>28 June, 2022</div>
				</div>
				<li
					className='bg-[#ebcfda4d] w-full min-h-[56px] flex justify-between 
			items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<time>12:00pm</time>
					</span>
				</li>
			</DashboardActivities>
			<DashboardActivities>
				<li
					className='bg-[#ebcfda4d] w-full min-h-[56px] flex justify-between
			 items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<time>12:00pm</time>
					</span>
				</li>
			</DashboardActivities>
			<DashboardActivities>
				<li
					className='bg-[#ebcfda4d] w-full min-h-[56px] flex justify-between 
			items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<time>12:00pm</time>
					</span>
				</li>
			</DashboardActivities>
			<DashboardActivities>
				<li
					className='bg-[#ebcfda4d] w-full min-h-[56px] flex justify-between 
			items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<time>10:40am</time>
					</span>
				</li>
			</DashboardActivities>

			<DashboardActivities>
				<div className='flex justify-between items-center'>
					<div>28 June, 2022</div>
				</div>
				<li
					className='bg-[#ebcfda4d] w-full min-h-[56px] flex justify-between
			items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<time>12:00pm</time>
					</span>
				</li>
			</DashboardActivities>
			<DashboardActivities>
				<li
					className='bg-[#ebcfda4d] w-full min-h-[56px] flex justify-between 
			items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<time>12:00pm</time>
					</span>
				</li>
			</DashboardActivities>
			<DashboardActivities>
				<li
					className='bg-[#ebcfda4d] w-full min-h-[56px] flex justify-between 
			items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<time>12:00pm</time>
					</span>
				</li>
			</DashboardActivities>
			<DashboardActivities>
				<li
					className='bg-[#ebcfda4d] w-full min-h-[56px] flex justify-between 
			items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<time>10:40am</time>
					</span>
				</li>
			</DashboardActivities>

			<DashboardActivities>
				<div className='flex justify-between items-center'>
					<h2 className='text-[#3C4652] text-[16px] font-[500]'>
						28 June, 2022
					</h2>
				</div>
				<li
					className='bg-[#ebcfda4d] w-full min-h-[56px] flex justify-between 
			items-center xs:text-[14px] sm:text-[16px] mb-[8px] p-[18px]'>
					<span>
						PearlyTouch Wears added satin dresses (12 pieces) to the inventory
						list
					</span>
					<span>
						<time>12:00pm</time>
					</span>
				</li>
			</DashboardActivities>
		</div>
	);
};

export default ActivitiesList;
