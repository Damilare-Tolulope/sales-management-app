/** @format */

import React from 'react';
import { sales } from '../data/data';
import { Link } from 'react-router-dom';

const Sales = () => {
	return (
		<div className='mt-10'>
			<h3 className='text-[22px] font-extrabold my-3'>Recent Track Sales</h3>

			<div className='flex justify-around items-center'>
				{sales.map((sale, index) => {
					const { name, piece, price, image } = sale;
					return (
						<div className='bg-[#FEFEFE] px-2' key={sale.id}>
							<img className='h-75 w-100 rounded' src={image} alt='dress' />
							<div className='p-2'>
								<Link className='my-1' to={`/admin/sales-record/${sale.id}`}>
									{name}
								</Link>
								<p>
									<span className='font-bold text-[14px]'>{piece}</span> |
									{price}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sales;
