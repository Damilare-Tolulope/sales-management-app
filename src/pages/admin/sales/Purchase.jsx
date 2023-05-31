/** @format */

import React, { useState } from 'react';
import CustomModal from '../../../components/CustomModal';
import Delete from './components/Delete';

function Purchase() {
	const [showModal, setShowModal] = useState(false);
	const CloseItemModal = () => {
		setShowModal(false);
	};
	const addItem = () => {
		setShowModal(false);
	};
	return (
		<div className='h-screen w-full'>
			<table className='w-full border border-[#333333]'>
				<thead className=''>
					<tr className='text-[18px] font-normal'>
						<td className='p-4'>Product description</td>
						<td className='p-4'>Quantity</td>
						<td className='p-4'>Variant</td>
						<td className='p-4'>Order from</td>
						<td className='p-4'>Address</td>
						<td className='p-4'>Date</td>
						<td className='p-4'></td>
					</tr>
				</thead>
				<tbody>
					<tr className='text-[14px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4 ml-10'>Gucci shirt</td>
						<td className='p-4 ml-10'>2pcs</td>
						<td className='p-4 ml-10'>Medium (Black)</td>
						<td className='p-4 ml-10'>Charles Kenny</td>
						<td className='p-4 ml-10'>Uyo</td>
						<td className='p-4 ml-10'>2 July, 2022</td>
						<td className='p-4 ml-10'>
							<button
								type='button'
								className='px-6 py-2 rounded text-white bg-[#058411] mr-1'>
								Accept
							</button>
							<button
								onClick={() => setShowModal(true)}
								type='button'
								className='px-6 py-2 rounded text-white bg-[#F44335]'>
								Reject
							</button>
						</td>
					</tr>
					<tr className='text-[14px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4 ml-10'>Gucci shirt</td>
						<td className='p-4 ml-10'>2pcs</td>
						<td className='p-4 ml-10'>Medium (Black)</td>
						<td className='p-4 ml-10'>Charles Kenny</td>
						<td className='p-4 ml-10'>Uyo</td>
						<td className='p-4 ml-10'>2 July, 2022</td>
						<td className='p-4 ml-10'>
							<button
								type='button'
								className='px-6 py-2 rounded text-white bg-[#058411] mr-1'>
								Accept
							</button>
							<button
								onClick={() => setShowModal(true)}
								type='button'
								className='px-6 py-2 rounded text-white bg-[#F44335]'>
								Reject
							</button>
						</td>
					</tr>
					<tr className='text-[14px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4 ml-10'>Gucci shirt</td>
						<td className='p-4 ml-10'>2pcs</td>
						<td className='p-4 ml-10'>Medium (Black)</td>
						<td className='p-4 ml-10'>Charles Kenny</td>
						<td className='p-4 ml-10'>Uyo</td>
						<td className='p-4 ml-10'>2 July, 2022</td>
						<td className='p-4 ml-10'>
							<button
								type='button'
								className='px-6 py-2 rounded text-white bg-[#058411] mr-1'>
								Accept
							</button>
							<button
								onClick={() => setShowModal(true)}
								type='button'
								className='px-6 py-2 rounded text-white bg-[#F44335]'>
								Reject
							</button>
						</td>
					</tr>
					<tr className='text-[14px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4 ml-10'>Gucci shirt</td>
						<td className='p-4 ml-10'>2pcs</td>
						<td className='p-4 ml-10'>Medium (Black)</td>
						<td className='p-4 ml-10'>Charles Kenny</td>
						<td className='p-4 ml-10'>Uyo</td>
						<td className='p-4 ml-10'>2 July, 2022</td>
						<td className='p-4 ml-10'>
							<button
								type='button'
								className='px-6 py-2 rounded text-white bg-[#058411] mr-1'>
								Accept
							</button>
							<button
								onClick={() => setShowModal(true)}
								type='button'
								className='px-6 py-2 rounded text-white bg-[#F44335]'>
								Reject
							</button>
						</td>
					</tr>
					<tr className='text-[14px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4 ml-10'>Gucci shirt</td>
						<td className='p-4 ml-10'>2pcs</td>
						<td className='p-4 ml-10'>Medium (Black)</td>
						<td className='p-4 ml-10'>Charles Kenny</td>
						<td className='p-4 ml-10'>Uyo</td>
						<td className='p-4 ml-10'>2 July, 2022</td>
						<td className='p-4 ml-10'>
							<button
								type='button'
								className='px-6 py-2 rounded text-white bg-[#058411] mr-1'>
								Accept
							</button>
							<button
								onClick={() => setShowModal(true)}
								type='button'
								className='px-6 py-2 rounded text-white bg-[#F44335]'>
								Reject
							</button>
						</td>
					</tr>
				</tbody>
			</table>

			<CustomModal onClose={() => setShowModal(false)} visible={showModal}>
				<Delete addItem={addItem} CloseItemModal={CloseItemModal} />
			</CustomModal>
		</div>
	);
}

export default Purchase;
