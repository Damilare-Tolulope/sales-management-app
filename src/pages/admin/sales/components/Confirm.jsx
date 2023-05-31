/** @format */

import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Confirm({ confirmSummary }) {
  return (
    <div className="bg-white h-[400px] w-[600px] flex rounded items-start px-4 py-4">
      <div className="w-full">
        <div className="flex items-center justify-between h-[60px] items-center">
          <h1 className="text-xl">Confirm Purchase order</h1>
          <button type="button" onClick={confirmSummary}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="h-[300px] overflow-y-auto">
          <table className="w-full border border-[#333333]">
            <thead className="bg-[#0052CC] text-white">
              <tr className="text-[16px] font-normal">
                <td className="p-4">Purchase order details</td>
                <td className="p-4"></td>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[14px] text-[#7F7F7F] border border-[#333333]">
                <td className="p-4">Item description</td>
                <td className="p-4">Gucci shirt</td>
              </tr>
              <tr className="text-[12px] text-[#7F7F7F] border border-[#333333]">
                <td className="p-4">Item description</td>
                <td className="p-4">Gucci shirt</td>
              </tr>
              <tr className="text-[12px] text-[#7F7F7F] border border-[#333333]">
                <td className="p-4">Item description</td>
                <td className="p-4">Gucci shirt</td>
              </tr>
            </tbody>
          </table>
          <h1 className="text-xl my-4">Sales details</h1>
          <div>
            <form>
              <div className="flex w-[100%]">
                <div className="mb-4 w-[50%]">
                  <div className="px-1">
                    <label htmlFor="Product Code">Product Code</label>
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="w-full border border-[#E5E5E5] h-10 rounded"
                    />
                  </div>
                </div>
                <div className="mb-4 w-[50%]">
                  <div className="px-1">
                    <label htmlFor="Quantity">Quantity</label>
                    <input
                      type="text"
                      placeholder="Enter quantity"
                      className="w-full border border-[#E5E5E5] h-10 rounded"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-[100%]">
                <div className="mb-4 w-[50%]">
                  <div className="px-1">
                    <label htmlFor="Unit Price">Unit Price</label>
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="w-full border border-[#E5E5E5] h-10 rounded"
                    />
                  </div>
                </div>
                <div className="mb-4 w-[50%]">
                  <div className="px-1">
                    <label htmlFor="Total Price">Total Price</label>
                    <input
                      type="text"
                      placeholder="5,000"
                      className="w-full border border-[#E5E5E5] h-10 rounded"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
