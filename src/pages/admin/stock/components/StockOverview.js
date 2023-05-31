/** @format */

import React, { useState } from "react";
import plus from "../../../../assets/images/svg/plus.svg";
import { stockData } from "../data/data";
import search from "../../../../assets/images/svg/search.svg";
import calender from "../../../../assets/images/svg/calender.svg";

const StockOverview = () => {
  const [stocks] = useState(stockData);

  return (
    <div>
      <h2 className="text-center text-[#0052CC] font-700">In Stock</h2>

      <div className="flex justify-between items-center my-8">
        <h3 className="border border-[#0052CC] p-3 py-2 rounded-md w-[250px] text-center text-[20px]">
          Overview
        </h3>
        <button className="px-5 py-3 rounded-md flex items-center border border-[#0052CC] cursor-pointer">
          <img src={plus} alt="plus" className="mr-2 h-5" />
          Manage stock inventory
        </button>
      </div>

      <div className="grid grid-cols-4 gap-x-5 my-10">
        {stocks.map((stock, index) => {
          const { type, value } = stock;
          return (
            <div key={index} className="text-center">
              <h3 className="text-[20px] font-bolder text-[#0C1A2C]">{type}</h3>
              <h1 className="text-center font-extrabold text-[38px] text-[#0C1A2C]">
                {value}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center my-10">
        <div className="flex items-center">
          <div className="flex items-center border border-[#0052CC] px-3 rounded-md mr-5">
            <img src={search} alt="search" />
            <input
              className="border-none ml-3 outline-none"
              type="search"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center">
            <p className="mr-2">Status</p>
            <select className="border border-[#0052CC] w-[200px] mr-2 rounded-md">
              <option>All</option>
            </select>
            <img
              className="px-2 py-1 border border-[#0052CC] rounded-md"
              src={calender}
              alt="cal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockOverview;
