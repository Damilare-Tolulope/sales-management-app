/** @format */

import React, { useState } from "react";
import { getStockinfo } from "../Stockdata";
import Plus from "../../../../assets/images/svg/plus.svg";
import Del from "../../../../assets/images/svg/del.svg";
import PlusIcon from "../../../../assets/images/svg/plusicon.svg";
import EditIcon from "../../../../assets/images/svg/editicon.svg";
import CopyIcon from "../../../../assets/images/svg/copyicon.svg";
import MarkIcon from "../../../../assets/images/svg/markicon.svg";
import CrossIcon from "../../../../assets/images/svg/crossicon.svg";
import Stocksearch from "./Stocksearch";
import CustomModal from "../../../../components/CustomModal";
import Stocktemplate from "./Stocktemplate";

const Stockinventory = () => {
  let Stockinfo = getStockinfo();
  const [showModal, setShowModal] = useState(false);
  const CloseItemModal = () => {
    setShowModal(false);
  };
  const addItem = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div className="flex flex-row mb-3">
        <div className="flex flex-row">
          <button className="border-2 border-[#0052CC] p-1 mt-2 mb-2 mr-2 w-28 rounded-[3px] flex flex-row">
            <img src={PlusIcon} alt="" className="mt-[6px]" />
            <p className="ml-2 text-[#333333]">New</p>
          </button>
          <button className="border-2 border-[#0052CC] p-1 m-2 w-28 rounded-[3px] flex flex-row">
            <img src={EditIcon} alt="" className="mt-[4px]" />
            <p className="ml-2 text-[#333333]">Edit</p>
          </button>
          <button className="border-2 border-[#0052CC] p-1 m-2 w-28 rounded-[3px] flex flex-row">
            <img src={CopyIcon} alt="" className="mt-[3px]" />
            <p className="ml-2 text-[#251a1a]">Copy</p>
          </button>
        </div>
        <Stocksearch />
      </div>
      <div className="overflow-x-auto relative sm:rounded-[3px]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700  dark:text-gray-400">
            <tr className="border border-[#0052CC]">
              <th className="py-4 px-6 text-[#333333]">
                <span className="border-2 border-[#0052CC] p-2 rounded-[3px]">
                  Date
                </span>
              </th>
              <th className="py-4 px-6 text-[#333333]">
                <span className="border-2 border-[#0052CC]  p-2 rounded-[3px]">
                  Product number
                </span>
              </th>
              <th className="py-4 px-6 text-[#333333]">
                <span className="border-2 border-[#0052CC] p-2 rounded-[3px]">
                  No of items
                </span>
              </th>
              <th className="py-4 px-6 text-[#333333]">
                <span className="border-2 border-[#0052CC] p-2 rounded-[3px]">
                  Supplier
                </span>
              </th>

              <th className="py-4 px-6 text-[#333333]">
                <span className="border-2 border-[#0052CC] p-2 rounded-[3px]">
                  Ordered on
                </span>
              </th>
              <th className="py-4 px-6 text-[#333333] ">
                <span className="border-2 border-[#0052CC] p-2 rounded-[3px]">
                  Ordered by
                </span>
              </th>
              <th className="py-4 px-6 text-[#333333]">
                <span className="border-2 border-[#0052CC] p-2 rounded-[3px]">
                  Sent
                </span>
              </th>
              <th className="py-4 px-6 text-[#333333] ">
                <span className="border-2 border-[#0052CC] p-2 rounded-[3px]">
                  Status
                </span>
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
                  <td className="py-4 px-6 text-[#333333]">{date}</td>
                  <td className="py-4 px-6 text-[#333333]">{productnumber}</td>
                  <td className="py-4 px-6 text-[#333333]">{no_of_items}</td>
                  <td className="py-4 px-6 text-[#333333]">{supplier}</td>
                  <td className="py-4 px-6 text-[#333333]">{ordered_on}</td>
                  <td className="py-4 px-6 text-[#333333]">{ordered_by}</td>
                  <td className="py-4 px-6 text-[#333333]">
                    {sent === "Yes" ? (
                      <img
                        src={MarkIcon}
                        alt=""
                        className="border border-[#0052CC] p-1 flex flex-row mx-auto"
                      />
                    ) : (
                      <img
                        src={CrossIcon}
                        alt=""
                        className="border border-[#0052CC] py-1 px-2 flex flex-row mx-auto"
                      />
                    )}
                  </td>
                  <td className="py-4 px-6 text-[#333333]">{status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-end m-6">
        <button className="relative bg-[#0052CC] w-[146px] text-[#ffffff] text-center rounded-lg h-[48px]">
          <img src={Del} alt="bin" className="absolute left-8" />{" "}
          <p className="ml-6">Delete</p>
        </button>
      </div>

      <div>
        <h2 className="text-[#333333] text-[24px] font-[600]">
          Create stock inventory
        </h2>
        <div className="flex flew-row m-3">
          <button className="inline-flex">
            <img
              src={Plus}
              alt="plus"
              className="mr-2 border-2 p-1 border-[#0052CC]"
            />
            <p className="text-[#0052CC] ">
              Manage Stock inventory from whats in Stock
            </p>
          </button>
        </div>
        <div className="flex flew-row m-3">
          <button className="inline-flex" onClick={() => setShowModal(true)}>
            <img
              src={Plus}
              alt="plus"
              className="mr-2 border-2 p-1 border-[#0052CC]"
            />
            <p className="text-[#0052CC] ">
              Manage Stock inventory from template
            </p>
          </button>
        </div>
      </div>

      <CustomModal onClose={() => setShowModal(false)} visible={showModal}>
        <Stocktemplate
          addItem={addItem}
          CloseItemModal={CloseItemModal}
        ></Stocktemplate>
      </CustomModal>
    </div>
  );
};

export default Stockinventory;
