/** @format */

import React, { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Confirm from "./Confirm";
import CustomModal from "../../../../components/CustomModal";

function Summary({ showEdit }) {
  const [active, setActive] = useState(false);
  const confirmSummary = () => {
    setActive(false);
  };
  return (
    <div className="bg-white h-[460px] w-[600px] flex rounded items-start px-4 py-4">
      <div className="w-full">
        <div className="flex items-center justify-between h-[60px] items-center">
          <h1 className="text-xl">Sales order summary</h1>
          <button type="button" onClick={showEdit}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="h-[300px] overflow-y-auto">
          <table className="w-full border border-[#333333]">
            <thead className="bg-[#0052CC] text-white">
              <tr className="text-[24px] font-bold">
                <td className="p-4">Sales order details</td>
                <td className="p-4"></td>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[14px]  border border-[#333333]">
                <td className="p-4 font font-600">Product code</td>
                <td className="p-4 font-500 text-[#7F7F7F]">PR000002344</td>
              </tr>
              <tr className="text-[14px]  border border-[#333333]">
                <td className="p-4 font font-600">Item description</td>
                <td className="p-4 font-500 text-[#7F7F7F]">Gucci shirt</td>
              </tr>
              <tr className="text-[14px]  border border-[#333333]">
                <td className="p-4 font font-600">Quantity</td>
                <td className="p-4 font-500 text-[#7F7F7F]">2 pcs</td>
              </tr>
              <tr className="text-[14px]  border border-[#333333]">
                <td className="p-4 font font-600">Variant</td>
                <td className="p-4 font-500 text-[#7F7F7F]">
                  Medium size (Black){" "}
                </td>
              </tr>
              <tr className="text-[14px]  border border-[#333333]">
                <td className="p-4 font font-600">Unit price</td>
                <td className="p-4 font-500 text-[#7F7F7F]">#2,500.00</td>
              </tr>
              <tr className="text-[14px]  border border-[#333333]">
                <td className="p-4 font font-600">Total price</td>
                <td className="p-4 font-500 text-[#7F7F7F]">#5,000.00</td>
              </tr>
              <tr className="text-[14px]  border border-[#333333]">
                <td className="p-4 font font-600">Order from</td>
                <td className="p-4 font-500 text-[#7F7F7F]">Charles Kenny</td>
              </tr>
              <tr className="text-[14px]  border border-[#333333]">
                <td className="p-4 font font-600">Address</td>
                <td className="p-4 font-500 text-[#7F7F7F]">Uyo</td>
              </tr>
              <tr className="text-[14px]  border border-[#333333]">
                <td className="p-4 font font-600">Date</td>
                <td className="p-4 font-500 text-[#7F7F7F]">2 July, 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex h-20 items-center justify-center">
          <button
            className="py-2 px-4 mx-2 bg-white border border-[#333333] rounded"
            onClick={() => setActive(true)}
          >
            Edit order
          </button>
          <button className="py-2 px-4 bg-[#0052CC] border border-[#0052CC] text-white rounded">
            Add sales order
          </button>
        </div>
      </div>

      <CustomModal onClose={() => setActive(false)} visible={active}>
        <Confirm confirmSummary={confirmSummary} />
      </CustomModal>
    </div>
  );
}

export default Summary;
