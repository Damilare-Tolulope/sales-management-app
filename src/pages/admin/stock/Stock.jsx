/** @format */
import React from "react";
import PlusCircle from "../../../assets/images/plusCircle.png";
import OrderNumbers from "./components/OrderNumbers";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./stock.css";
import ProductTable from "./components/ProductTable";
import { Link } from "react-router-dom";

function Stock() {
  return (
    <div className="px-6">
      <h2 className="w-full flex items-center justify-center text-[#0052CC] font-bold text-xl my-4">
        In Stock
      </h2>
      <div className="flex items-center justify-between md:flex-row flex-col">
        <div className="px-12 py-3 border-2 rounded-md md:my-0 my-3 ">
          <p>Overview</p>
        </div>
        <div className="px-6 py-3 border-2 rounded-md items-center border-[#0052CC]">
          <Link to={"/admin/inventory"} className="flex">
            <img src={PlusCircle} alt="" className="mx-2" />
            <span>Manage stock inventory</span>
          </Link>
        </div>
      </div>
      <OrderNumbers today={0} pending={0} delivered={0} cancelled={0} />

      <form className="md:flex items-center">
        <div className="border-2 px-2 border-[#A6A7A8] rounded-[8px] md:my-0 my-3">
          <FontAwesomeIcon className="text-gray-400" icon={faSearch} />
          <input
            type="text"
            className="border-none focus:ring-0"
            placeholder="Search"
          />
        </div>
        <p className="mx-2 text-black font-medium md:my-0 my-3">Status</p>
        <div className="border-2 px-2 border-[#A6A7A8] rounded-[8px] w-fit md:my-0 my-3">
          <select className="border-none focus:ring-0 w-44 ">
            <option value="all">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="border-2 px-2 py-1 mx-2 border-[#A6A7A8] rounded-[8px] cus-date-input w-fit md:my-0 my-3">
          <input
            type="date"
            className="cus-date-input border-none focus:ring-0 cursor-pointer"
          />
        </div>
      </form>
      <ProductTable />
    </div>
  );
}

export default Stock;
