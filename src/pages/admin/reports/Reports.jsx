/** @format */

import React, { useState } from "react";
import Del from "../../../assets/images/svg/del.svg";
import Plus from "../../../assets/images/svg/plusicon.svg";
import CustomModal from "../../../components/CustomModal";
import ReportInfo from "./components/ReportInfo";

function Reports() {
  const [showModal, setShowModal] = useState(false);
  const CloseItemModal = () => {
    setShowModal(false);
  };
  const addItem = () => {
    setShowModal(false);
  };
  return (
    <div className="px-4 py-4">
      <h2>Report on Product defects</h2>
      <div className="flex flex-row justify-end m-6">
        <button
          className="relative border border-[#0052CC] w-[206px] text-[#7F7F7F] text-center rounded-lg h-[48px] flex items-center"
          onClick={() => setShowModal(true)}
        >
          <img src={Plus} alt="bin" className="absolute left-8 w-[5%]" />
          <span className="ml-6 w-[90%]">Add new report</span>
        </button>
      </div>
      <div className="overflow-x-auto relative sm:rounded-[3px]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700  dark:text-gray-400">
            <tr className="border-[#0052CC] border-2 text-center">
              <th className="py-4 px-6 text-[#333333]">
                <span className="border-2 border-[#0052CC]  p-2 rounded-[3px]">
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
                  Description
                </span>
              </th>
              <th className="py-4 px-6 text-[#333333]">
                <span className="border-2 border-[#0052CC] p-2 rounded-[3px]">
                  Number of products affected
                </span>
              </th>

              <th className="py-4 px-6 text-[#333333]">
                <span className="border-2 border-[#0052CC] p-2 rounded-[3px]">
                  Status
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-[#d192ac] dark:hover:bg-[#d192ac] text-center hover:rounded">
              <td className="py-4 px-6 text-[#333333]">2022-07-21</td>
              <td className="py-4 px-6 text-[#333333]">PR00002344</td>
              <td className="py-4 px-6 text-[#333333]">Versace</td>
              <td className="py-4 px-6 text-[#333333]">100</td>
              <td className="py-4 px-6 text-[#333333]">Logged</td>
            </tr>
            <tr className="bg-white border-b hover:bg-[#d192ac] dark:hover:bg-[#d192ac] text-center hover:rounded">
              <td className="py-4 px-6 text-[#333333]">2022-07-21</td>
              <td className="py-4 px-6 text-[#333333]">PR00002344</td>
              <td className="py-4 px-6 text-[#333333]">Versace</td>
              <td className="py-4 px-6 text-[#333333]">100</td>
              <td className="py-4 px-6 text-[#333333]">Not Logged</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-row justify-end m-6">
        <button className="relative bg-[#0052CC] w-[146px] text-[#ffffff] text-center rounded-lg h-[48px]">
          <img src={Del} alt="bin" className="absolute left-8" />
          <p className="ml-6">Delete</p>
        </button>
      </div>

      <CustomModal onClose={() => setShowModal(false)} visible={showModal}>
        <ReportInfo
          addItem={addItem}
          CloseItemModal={CloseItemModal}
        ></ReportInfo>
      </CustomModal>
    </div>
  );
}

export default Reports;
