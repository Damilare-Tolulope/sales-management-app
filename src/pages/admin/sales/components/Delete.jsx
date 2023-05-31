/** @format */

import React from 'react';
import Info from '../../../../assets/images/svg/info-Icon.svg';

function Delete({ CloseItemModal }) {
	return (
		<div className='bg-white h-[400px] w-[400px] flex rounded items-center'>
			<div className='text-center w-full'>
				<div className='flex w-full justify-center'>
					<img src={Info} alt='info' className='w-[120px]' />
				</div>
				<h1>Are you sure?</h1>
				<p>Click OK to proceed</p>
				<div className='flex w-full justify-center mt-4'>
					<button
						onClick={CloseItemModal}
						type='button'
						className='border border-[rgba(0, 0, 0, 0.7)] text-[#404040] mr-2 px-6 py-2 rounded'>
						Cancel
					</button>
					<button
						onClick={CloseItemModal}
						type='button'
						className='bg-[#F44335] text-white px-6 py-2 rounded'>
						OK
					</button>
				</div>
			</div>
		</div>
	);
}

export default Delete;
