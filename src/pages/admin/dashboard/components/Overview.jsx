/** @format */

import React from 'react';
import { topData } from '../data/data';

const Overview = () => {
	return (
		<div className='flex justify-around items-center'>
			{topData.map((card, index) => {
				const { title, revenue, image, rate, time } = card;
				return (
					<div
						className='p-5 shadow-lg w-[325px] rounded-lg text-center text-[#0C1A2C]'
						key={index}>
						<p className='font-normal'>{title}</p>
						<h1 className='my-2 font-extrabold font-lg text-2xl'>{revenue}</h1>
						<img className='mx-auto mb-2' src={image} alt='stock' />
						<p className='font-normal text-[14px]'>
							{rate} ({time})
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Overview;
