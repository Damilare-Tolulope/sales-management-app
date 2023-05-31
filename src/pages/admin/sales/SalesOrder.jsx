/** @format */

import React, { useState } from 'react';
import Del from '../../../assets/images/svg/del-color.svg';
import Edit from '../../../assets/images/svg/Group.svg';
import CustomModal from '../../../components/CustomModal';
import Delete from './components/Delete';
import Summary from './components/Summary';

function SalesOrder() {
	const [showModal, setShowModal] = useState(false);
	const [active, setActive] = useState(false);

	const CloseItemModal = () => {
		setShowModal(false);
	};
	const showEdit = () => {
		setActive(false);
	};
	const addItem = () => {
		setShowModal(false);
	};

	return (
		<div className='h-screen w-full'>
			<table className='w-full border border-[#333333]'>
				<thead className=''>
					<tr className='text-[14px] font-normal'>
						<td className='p-4'>Product Code</td>
						<td className='p-4'>Description</td>
						<td className='p-4'>Quantity</td>
						<td className='p-4'>Total Price</td>
						<td className='p-4'>Date</td>
						<td className='p-4'>Buyer name</td>
						<td className='p-4'>Shipment info</td>
						<td className='p-4'>Status</td>
						<td className='p-4'></td>
					</tr>
				</thead>
				<tbody>
					<tr className='text-[12px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4'>PR00002344</td>
						<td className='p-4'>Gucci shirt</td>
						<td className='p-4'>#2500</td>
						<td className='p-4'>2pcs</td>
						<td className='p-4'>#5000</td>
						<td className='p-4'>2 July, 2022</td>
						<td className='p-4'>Charles Kenny</td>
						<td className='p-4'>Uyo</td>
						<td className='p-4 text-[#058411]'>Active</td>
						<td className='p-4 flex'>
							<img
								src={Edit}
								alt='Edit'
								className='mr-2 cursor-pointer'
								onClick={() => setActive(true)}
							/>
							<img
								src={Del}
								alt='delete'
								onClick={() => setShowModal(true)}
								className='cursor-pointer'
							/>
						</td>
					</tr>
					<tr className='text-[14px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4'>PR00002344</td>
						<td className='p-4'>Gucci shirt</td>
						<td className='p-4'>#2500</td>
						<td className='p-4'>2pcs</td>
						<td className='p-4'>#5000</td>
						<td className='p-4'>2 July, 2022</td>
						<td className='p-4'>Charles Kenny</td>
						<td className='p-4'>Uyo</td>
						<td className='p-4 text-[#FF8E2B]'>In progress</td>
						<td className='p-4 flex'>
							<img
								src={Edit}
								alt='Edit'
								className='mr-2 cursor-pointer'
								onClick={() => setActive(true)}
							/>
							<img
								src={Del}
								alt='delete'
								onClick={() => setShowModal(true)}
								className='cursor-pointer'
							/>
						</td>
					</tr>
					<tr className='text-[12px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4'>PR00002344</td>
						<td className='p-4'>Gucci shirt</td>
						<td className='p-4'>#2500</td>
						<td className='p-4'>2pcs</td>
						<td className='p-4'>#5000</td>
						<td className='p-4'>2 July, 2022</td>
						<td className='p-4'>Charles Kenny</td>
						<td className='p-4'>Uyo</td>
						<td className='p-4 text-[#058411]'>Active</td>
						<td className='p-4 flex'>
							<img
								src={Edit}
								alt='Edit'
								className='mr-2 cursor-pointer'
								onClick={() => setActive(true)}
							/>
							<img
								src={Del}
								alt='delete'
								onClick={() => setShowModal(true)}
								className='cursor-pointer'
							/>
						</td>
					</tr>
					<tr className='text-[14px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4'>PR00002344</td>
						<td className='p-4'>Gucci shirt</td>
						<td className='p-4'>#2500</td>
						<td className='p-4'>2pcs</td>
						<td className='p-4'>#5000</td>
						<td className='p-4'>2 July, 2022</td>
						<td className='p-4'>Charles Kenny</td>
						<td className='p-4'>Uyo</td>
						<td className='p-4 text-[#FF8E2B]'>In progress</td>
						<td className='p-4 flex'>
							<img
								src={Edit}
								alt='Edit'
								className='mr-2 cursor-pointer'
								onClick={() => setActive(true)}
							/>
							<img
								src={Del}
								alt='delete'
								onClick={() => setShowModal(true)}
								className='cursor-pointer'
							/>
						</td>
					</tr>
					<tr className='text-[12px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4'>PR00002344</td>
						<td className='p-4'>Gucci shirt</td>
						<td className='p-4'>#2500</td>
						<td className='p-4'>2pcs</td>
						<td className='p-4'>#5000</td>
						<td className='p-4'>2 July, 2022</td>
						<td className='p-4'>Charles Kenny</td>
						<td className='p-4'>Uyo</td>
						<td className='p-4 text-[#058411]'>Active</td>
						<td className='p-4 flex'>
							<img
								src={Edit}
								alt='Edit'
								className='mr-2 cursor-pointer'
								onClick={() => setActive(true)}
							/>
							<img
								src={Del}
								alt='delete'
								onClick={() => setShowModal(true)}
								className='cursor-pointer'
							/>
						</td>
					</tr>
					<tr className='text-[14px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4'>PR00002344</td>
						<td className='p-4'>Gucci shirt</td>
						<td className='p-4'>#2500</td>
						<td className='p-4'>2pcs</td>
						<td className='p-4'>#5000</td>
						<td className='p-4'>2 July, 2022</td>
						<td className='p-4'>Charles Kenny</td>
						<td className='p-4'>Uyo</td>
						<td className='p-4 text-[#FF8E2B]'>In progress</td>
						<td className='p-4 flex'>
							<img
								src={Edit}
								alt='Edit'
								className='mr-2 cursor-pointer'
								onClick={() => setActive(true)}
							/>
							<img
								src={Del}
								alt='delete'
								onClick={() => setShowModal(true)}
								className='cursor-pointer'
							/>
						</td>
					</tr>
					<tr className='text-[12px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4'>PR00002344</td>
						<td className='p-4'>Gucci shirt</td>
						<td className='p-4'>#2500</td>
						<td className='p-4'>2pcs</td>
						<td className='p-4'>#5000</td>
						<td className='p-4'>2 July, 2022</td>
						<td className='p-4'>Charles Kenny</td>
						<td className='p-4'>Uyo</td>
						<td className='p-4 text-[#058411]'>Active</td>
						<td className='p-4 flex'>
							<img
								src={Edit}
								alt='Edit'
								className='mr-2 cursor-pointer'
								onClick={() => setActive(true)}
							/>
							<img
								src={Del}
								alt='delete'
								onClick={() => setShowModal(true)}
								className='cursor-pointer'
							/>
						</td>
					</tr>
					<tr className='text-[14px] text-[#7F7F7F] border border-[#333333]'>
						<td className='p-4'>PR00002344</td>
						<td className='p-4'>Gucci shirt</td>
						<td className='p-4'>#2500</td>
						<td className='p-4'>2pcs</td>
						<td className='p-4'>#5000</td>
						<td className='p-4'>2 July, 2022</td>
						<td className='p-4'>Charles Kenny</td>
						<td className='p-4'>Uyo</td>
						<td className='p-4 text-[#FF8E2B]'>In progress</td>
						<td className='p-4 flex'>
							<img
								src={Edit}
								alt='Edit'
								className='mr-2 cursor-pointer'
								onClick={() => setActive(true)}
							/>
							<img
								src={Del}
								alt='delete'
								onClick={() => setShowModal(true)}
								className='cursor-pointer'
							/>
						</td>
					</tr>
				</tbody>
			</table>

			<CustomModal onClose={() => setShowModal(false)} visible={showModal}>
				<Delete addItem={addItem} CloseItemModal={CloseItemModal} />
			</CustomModal>

			<CustomModal onClose={() => setActive(false)} visible={active}>
				<Summary showEdit={showEdit} />
			</CustomModal>
		</div>
	);
}

export default SalesOrder;
