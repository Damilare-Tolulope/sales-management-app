/** @format */

import React from 'react';
// import ProfileIcon from '../../../../assets/images/dashboard/profile.png'
import SearchIcon from '../../../../assets/images/dashboard/searchIcon.png';

const DashboardTop = () => {
	return (
		<div className='w-full'>
			<div className=' flex sm:flex flex-col sm:justify-between sm:flex-row sm:items-center  '>
				<h2
					className='text-[14px] sm:text-[22px] leading-[26px] 
				 text-[#3C4652] font-[700] mb-[19px] pl-[20px] sm:pl-[0]'>
					Recent Activity
				</h2>

				<div
					className=' flex items-center 
				pl-[12px] rounded-[8px] py-[18px]
				w-[65%] sm:w-[310px] ml-[20px]  sm:ml-[0]
				pr-[20px] sm:pr-[0]
				 h-[48px] border-[1.5px] 
				border-[grey] focus:outline-none'>
					<img
						src={SearchIcon}
						className='w-[18px] h-[18px]  
						'
						alt='search'
					/>
					<input
						type='search'
						className='border-0 w-[60%] sm:w-[288px] 
						focus:ring-none focus:outline-none
						focus:border-0 focus:ring-transparent 
						outline-none leading-[24px]  
						text-[#7F7F7F] text-[14px] sm:text-[16px] font-[400]'
						placeholder='Search Activity'
					/>
				</div>
			</div>
		</div>
	);
};

export default DashboardTop;
