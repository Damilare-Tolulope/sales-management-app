/** @format */

import React from 'react';

export default function CustomModal({ children, visible, onClose }) {
	const handleOnBackDropClick = (e) => {
		if (e.target.id === 'backdrop') onClose && onClose();
	};

	return (
		<>
			{visible ? (
				<>
					<div
						className='flex justify-center items-center h-screen fixed inset-0 z-[9999999] outline-none focus:outline-none py-10 bg-black bg-opacity-50 backdrop-blur-sm'
						id='backdrop'
						onClick={handleOnBackDropClick}>
						<div className='relative w-auto my-16 mx-auto bg-transparent py-10'>
							{children}
						</div>
					</div>
				</>
			) : null}
		</>
	);
}
