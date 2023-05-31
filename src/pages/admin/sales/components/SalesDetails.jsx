/** @format */

import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SalesDetails({ confirmSummary }) {
  return (
    <div className="bg-white h-[560px] w-[800px] flex rounded items-start px-4 py-4">
      <div className="w-full">
        <div className="flex items-center justify-between h-[60px] items-center">
          <h1 className="text-xl">Sales order summary</h1>
          <button type="button" onClick={confirmSummary}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div class="py-2 flex justify-center h-[200px]">
          <div className="w-full py-2 flex justify-center ">
            <img
              src={require("../../../../assets/images/greenGown.png")}
              alt="cloth"
            />
          </div>
        </div>
        <div className="h-[200px] overflow-y-auto">
          <table className="w-full border border-[#333333]">
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
                  Medium size (Black)
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
                <td className="p-4 font font-600">Date</td>
                <td className="p-4 font-500 text-[#7F7F7F]">2 July, 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex h-20 items-center justify-center">
          <button className="py-2 px-4 mx-2 bg-white border border-[#333333] rounded">
            Cancel
          </button>
          <button className="py-2 px-4 bg-[#0052CC] border border-[#0052CC] text-white rounded">
            Track sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default SalesDetails;
