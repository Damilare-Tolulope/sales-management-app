/** @format */

import React from "react";
import { getStockinfo } from "../Stockdata";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stocktemplate({ CloseItemModal, addItem }) {
  let Stockinfo = getStockinfo();
  return (
    <div className="bg-white px-4 py-4 rounded">
      <div className="flex items-center justify-between h-[60px] px-6">
        <h1 className="mb-4 text-xl">Stock Inventory Template</h1>
        <button className="" type="button" onClick={CloseItemModal}>
          <FontAwesomeIcon icon={faClose} className="" />
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-[#0052CC] border-2">
        <thead className="text-xs text-gray-700  dark:text-gray-400">
          <tr>
            <th className="py-4 px-6 text-[#0052CC] font-[900] border-[#0052CC] border-2">
              Date
            </th>
            <th className="py-4 px-6 text-[#0052CC] font-[900] border-[#0052CC] border-2">
              Product number
            </th>
            <th className="py-4 px-6 text-[#0052CC] font-[900] border-[#0052CC] border-2">
              No of items
            </th>
            <th className="py-4 px-6 text-[#0052CC] font-[900] border-[#0052CC] border-2">
              Supplier
            </th>
            <th className="py-4 px-6 text-[#0052CC] font-[900] border-[#0052CC] border-2">
              Ordered on
            </th>
            <th className="py-4 px-6 text-[#0052CC] font-[900] border-[#0052CC] border-2 ">
              Ordered by
            </th>
            <th className="py-4 px-6 text-[#0052CC] font-[900] border-[#0052CC] border-2">
              Sent
            </th>
            <th className="py-4 px-6 text-[#0052CC] font-[900] border-[#0052CC] border-2 ">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {Stockinfo.slice(0, 5).map((stock, index) => {
            const {
              date,
              productnumber,
              no_of_items,
              supplier,
              ordered_on,
              ordered_by,
              sent,
              status,
            } = stock;
            return (
              <tr
                key={index}
                className="bg-white border-b hover:bg-[#d192ac] dark:hover:bg-[#d192ac] text-center hover:rounded"
              >
                <td className="py-4 px-6 text-[#333333] border-[#0052CC] border-2">
                  {date}
                </td>
                <td className="py-4 px-6 text-[#333333] border-[#0052CC] border-2">
                  {productnumber}
                </td>
                <td className="py-4 px-6 text-[#333333] border-[#0052CC] border-2">
                  {no_of_items}
                </td>
                <td className="py-4 px-6 text-[#333333] border-[#0052CC] border-2">
                  {supplier}
                </td>
                <td className="py-4 px-6 text-[#333333] border-[#0052CC] border-2">
                  {ordered_on}
                </td>
                <td className="py-4 px-6 text-[#333333] border-[#0052CC] border-2">
                  {ordered_by}
                </td>
                <td className="py-4 px-6 text-[#333333] border-[#0052CC] border-2">
                  {sent === "Yes" ? "YES" : "NO"}
                </td>
                <td className="py-4 px-6 text-[#333333] border-[#0052CC] border-2">
                  {status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-end h-[60px] px-6">
        <button
          type="button"
          className={`bg-[#0052CC] text-white px-10 py-2 rounded-[8px] `}
          onClick={addItem}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Stocktemplate;
