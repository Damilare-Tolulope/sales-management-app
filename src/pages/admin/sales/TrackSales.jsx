/** @format */

import React from "react";

import SearchIcon from "../../../assets/images/svg/searchicon.svg";
import Plus from "../../../assets/images/svg/plus.svg";
import Del from "../../../assets/images/svg/del-color.svg";

const TrackSales = () => {
  return (
    <div className="h-screen w-full">
      <div className="mb-4 flex flex-row items-end h-[80px]">
        <div className="relative">
          <label htmlFor="Category">Category</label>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="text-[#333333] border-2 border-[#0052CC] h-12 pl-10 my-2 mr-2 flex flex-row rounded-[3px]"
          />
          <img src={SearchIcon} alt="" className="absolute bottom-6 left-5" />
        </div>
        <div className="relative">
          <label htmlFor="Supplier">Supplier</label>
          <select className="text-[#333333] border-2 border-[#0052CC] h-12 pl-10 my-2 mr-2 flex flex-row rounded-[3px]">
            <option value=""></option>
          </select>
        </div>
        <div className="relative">
          <label htmlFor="Category">Category</label>
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="text-[#333333] border-2 border-[#0052CC] h-12 pl-10 my-2 mr-2 flex flex-row rounded-[3px]"
          />
          <img src={SearchIcon} alt="" className="absolute bottom-6 left-5" />
        </div>
        <div className="relative">
          <label htmlFor="Price per unit">Price per unit</label>
          <select className="text-[#333333] border-2 border-[#0052CC] h-12 pl-10 my-2 mr-2 flex flex-row rounded-[3px] w-[140px]">
            <option value=""></option>
          </select>
        </div>
        <div className="h-12 my-2 mr-2 flex items-center">
          <img
            src={Del}
            alt="delete"
            className="border-2 border-[#0052CC] p-2 rounded"
          />
        </div>
        <div className="relative">
          <button
            type="button"
            className="bg-[#0052CC]  h-12 px-10 text-white rounded my-2"
          >
            Apply Filter
          </button>
        </div>
      </div>

      <table className="w-full border border-[#0052CC]">
        <thead className="bg-[#0052CC] text-white">
          <tr className="text-[14px] font-normal">
            <td className="p-4">Category</td>
            <th className="p-4">Product Name</th>
            <th className="p-4">Supplier</th>
            <th className="p-4">Product Number</th>
            <th className="p-4">Price per unit</th>
            <th className="p-4">Stock Recieved</th>
            <th className="p-4">Stock Remaining</th>
            <th className="p-4">Sales Recorded</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#0052CC] text-[12px] text-[#333333]">
            <td className="p-4">Branded shirts</td>
            <td className="p-4">Gucci Shirt</td>
            <td className="p-4">Versace</td>
            <td className="p-4">PR00002344</td>
            <td className="p-4">#25000</td>
            <td className="p-4">1200</td>
            <td className="p-4">500</td>
            <td className="p-4">700</td>
          </tr>
          <tr className="border-b border-[#0052CC] text-[12px] text-[#333333]">
            <td className="p-4">Branded shirts</td>
            <td className="p-4">Gucci Shirt</td>
            <td className="p-4">Versace</td>
            <td className="p-4">PR00002344</td>
            <td className="p-4">#25000</td>
            <td className="p-4">1200</td>
            <td className="p-4">500</td>
            <td className="p-4">700</td>
          </tr>
          <tr className="border-b border-[#0052CC] text-[12px] text-[#333333]">
            <td className="p-4">Branded shirts</td>
            <td className="p-4">Gucci Shirt</td>
            <td className="p-4">Versace</td>
            <td className="p-4">PR00002344</td>
            <td className="p-4">#25000</td>
            <td className="p-4">1200</td>
            <td className="p-4">500</td>
            <td className="p-4">700</td>
          </tr>
          <tr className="border-b border-[#0052CC] text-[12px] text-[#333333]">
            <td className="p-4">Branded shirts</td>
            <td className="p-4">Gucci Shirt</td>
            <td className="p-4">Versace</td>
            <td className="p-4">PR00002344</td>
            <td className="p-4">#25000</td>
            <td className="p-4">1200</td>
            <td className="p-4">500</td>
            <td className="p-4">700</td>
          </tr>
          <tr className="border-b border-[#0052CC] text-[12px] text-[#333333]">
            <td className="p-4">Branded shirts</td>
            <td className="p-4">Gucci Shirt</td>
            <td className="p-4">Versace</td>
            <td className="p-4">PR00002344</td>
            <td className="p-4">#25000</td>
            <td className="p-4">1200</td>
            <td className="p-4">500</td>
            <td className="p-4">700</td>
          </tr>
          <tr className="border-b border-[#0052CC] text-[12px] text-[#333333]">
            <td className="p-4">Branded shirts</td>
            <td className="p-4">Gucci Shirt</td>
            <td className="p-4">Versace</td>
            <td className="p-4">PR00002344</td>
            <td className="p-4">#25000</td>
            <td className="p-4">1200</td>
            <td className="p-4">500</td>
            <td className="p-4">700</td>
          </tr>
          <tr className="border-b border-[#0052CC] text-[12px] text-[#333333]">
            <td className="py-9 px-6"></td>
          </tr>
        </tbody>
      </table>

      <div className="w-full text-right flex justify-end">
        <button
          type="button"
          className="border border-[#0052CC] h-10 px-10 rounded my-2 flex items-center"
        >
          <img src={Plus} alt="plus" className="mr-2" />
          <span>Add inventory</span>
        </button>
      </div>
    </div>
  );
};

export default TrackSales;
