/** @format */

import React from "react";
import FilterIcon from "../../../../assets/images/svg/filtericon.svg";
import SearchIcon from "../../../../assets/images/svg/searchicon.svg";

const Stocksearch = () => {
  return (
    <div className="flex flex-row">
      <div className="border-2 border-[#0052CC] p-1 m-2 rounded-[3px] w-28 flex flex-row">
        <img src={FilterIcon} alt="" />
        <p className="ml-2 text-[#333333]">Filter</p>
      </div>
      <div className="relative">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search"
          className="text-[#333333] border-2 border-[#0052CC] p-1 pl-10 my-2 ml-2  w-[500px] flex flex-row rounded-[3px]"
        />
        <img src={SearchIcon} alt="" className="absolute bottom-4 left-5" />
      </div>
    </div>
  );
};

export default Stocksearch;
