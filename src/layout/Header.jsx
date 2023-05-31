/** @format */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
	const location = useLocation();
	return (
		<nav className='bg-white'>
			<div className='flex flex-wrap items-center justify-between'>
				<div className='w-6/12'>
					<h2 className='text-[#2D353E]'>
						{location?.pathname?.split('/')[2]?.toLocaleUpperCase()}
					</h2>
				</div>
				<div className='w-6/12'>
					<div className='flex justify-end items-center ml-auto'>
						<Link
							to={'profile'}
							className='block py-2 pl-3 pr-4 text-[#2D353E]'>
							<FontAwesomeIcon icon={faUserCircle} className='mr-2' />
							Welcome Favour
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
