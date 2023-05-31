/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Activities = () => {
  return (
    <div>
      <h3 className="text-[22px] font-extrabold my-3">Recent Activity</h3>
      <div className="flex justify-between items-center">
        <p className="font-normal">Today</p>
        <div className="text-[14px]">
          <span className="text-[#8B8383] "> Sort: </span>
          <select className="border-none">
            <option>Alphabetical</option>
            <option>Last viewed</option>
            <option>Order</option>
            <option>Oldest</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* // <div
					// 	className='text-[#0C1A2C] px-5 py-3 my-3 flex justify-between items-center bg-[#EBCFDA4D] rounded'
					// 	key={index}>
					// 	<p>{activity}</p>
					// 	<p>{time}</p>
					// </div> */}
      <table className="w-full">
        <thead className="font-black">
          <tr>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              S/N
            </th>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              Administrator
            </th>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              Quantity
            </th>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              Product Category
            </th>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              Date
            </th>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[35px]">
              1
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[80px]">
              Nnamdi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[80px]">
              Beauty Products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[35px]">
              2
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[80px]">
              Yemisi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[80px]">
              Health products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              3
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Yemisi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Toys
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              4
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Nnamdi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Beauty Products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-center mt-4 cursor-pointer">
        <Link to="/admin/activities-view">View All</Link>
      </p>
    </div>
  );
};

export default Activities;
