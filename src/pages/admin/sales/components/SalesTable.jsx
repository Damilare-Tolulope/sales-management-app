/** @format */
import React, { useState } from "react";
import { SalesTableData } from "../data/data";
import CustomModal from "../../../../components/CustomModal";
import SalesDetails from "./SalesDetails";

export default function SalesTable() {
  const [active, setActive] = useState(false);
  const confirmSummary = () => {
    setActive(false);
  };
  return (
    <div className="mt-[28px]">
      <table class="table-auto w-full m-w-[100%]">
        <thead className="bg-[#F8F0F3] mb-3">
          <tr className="text-left  whitespace-nowrap min-h-[48px] rounded-tl rounded-tr border-0">
            <th className="py-3 px-3 font-bold">Product Code</th>
            <th className="py-3 px-3 font-bold">Product Name</th>
            <th className="py-3 px-3 font-bold">Unit Price</th>
            <th className="py-3 px-3 font-bold">Quantity</th>
            <th className="py-3 px-3 font-bold">Total Price</th>
            <th className="py-3 px-3 font-bold">Date</th>

            <th className="py-3 px-3 font-bold"></th>
          </tr>
        </thead>
        <tbody>
          {SalesTableData.map((tableRow, index) => {
            const {
              productCode,
              productName,
              unitPrice,
              quantity,
              totalPrice,
              date,
            } = tableRow;
            return (
              <>
                <tr className="py-3 divide-y">
                  <td className="py-3">{productCode}</td>
                  <td className="py-3">{productName}</td>
                  <td className="py-3">{unitPrice}</td>
                  <td className="py-3">{quantity}</td>
                  <td className="py-3">{totalPrice}</td>
                  <td className="py-3">{date}</td>

                  <td className="py-3 font-bold cursor-pointer text-[#0052CC]">
                    <button
                      type="button"
                      className="text-[#0052CC]"
                      onClick={() => setActive(true)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <CustomModal onClose={() => setActive(false)} visible={active}>
        <SalesDetails confirmSummary={confirmSummary} />
      </CustomModal>
    </div>
  );
}
