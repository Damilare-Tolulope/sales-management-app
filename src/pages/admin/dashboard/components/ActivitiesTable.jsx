/** @format */

import React from "react";

const ActivitiesTable = () => {
  return (
    <div className="w-full mt-4">
      <div className="flex justify-between items-center">
        <div
          className="font-[500] text-[#3C4652] leading-[24px]
		tracking-[0.0015em] "
        >
          Today
        </div>

        <div
          className="flex justify-center items-center
	 
		"
        >
          <p
            className="flex items-center  
				text-[14px]"
          >
            <span
              className="text-[14px] text-[#8B8383]
				mr-[4px] "
            >
              Sort:
            </span>
          </p>
          <select
            className="text-center focus:ring-none 
				focus:border-none border-transparent focus:ring-transparent 
				focus:outline-none border-none outline-none 
				bg-white cursor-pointer  "
            name=""
            id=""
          >
            <option value="">
              <strong
                className="text-[#000000] font-[400]
					leading-[16px] text-[14px]  pt-[8px] h-[30px]  w-[12%]
					focus:ring-none focus:outline-none border-none outline-none
					"
              >
                Alphabetically
              </strong>
            </option>
            <option
              className="text-[14px] text-center font-[400]  w-[12%] text-[#000000]
					focus:ring-none focus:border-0 focus:ring-transparent 
					focus:outline-none border-none outline-none"
              value=""
            >
              Sort by
            </option>
            <option
              className="text-[14px] font-[400] text-[#000000] pt-[8px]
					focus:border-0 focus:ring-transparent 
					focus:outline-none border-none outline-none"
              value=""
            >
              Last viewed
            </option>
            <option
              className="text-[14px] font-[400] text-[#000000] pt-[8px]
					focus:border-0 focus:ring-transparent 
					focus:outline-none border-none outline-none"
              value=""
            >
              Order
            </option>
            <option
              className="text-[14px] font-[400] text-[#000000] pt-[8px]
					focus:border-0 focus:ring-transparent 
					focus:outline-none border-none outline-none
					"
              value=""
            >
              Oldest
            </option>
            <option
              className="text-[14px] font-[400] text-[#000000] pt-[8px]
					focus:border-0 focus:ring-transparent 
					focus:outline-none border-none outline-none
					"
              value=""
            >
              Newest
            </option>
          </select>
        </div>
      </div>

      <table className="w-full">
        <thead className="font-black">
          <tr>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              S/N
            </th>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              Administrator
            </th>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              Quantity
            </th>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              Product Category
            </th>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              Date
            </th>
            <th className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px]">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[35px]">
              1
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[80px]">
              Nnamdi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[80px]">
              Beauty Products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px]  w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[35px]">
              2
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[80px]">
              Yemisi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[80px]">
              Health products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center  h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              3
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Yemisi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Toys
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              4
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Nnamdi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Beauty Products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              5
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Bola
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Clothes
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              6
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Yemisi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Clothes
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              7
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Bola
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Toys
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              8
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Nnamdi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Health products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              9
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Bola
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Beauty Products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              10
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Yemisi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Toys
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              11
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Bola
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Clothes
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              12
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Nnamdi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Beauty Products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              13
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Nnamdi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Beauty Products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
          <tr>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[35px]">
              14
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Nnamdi
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              1200
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              Beauty Products
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              2022-07-21
            </td>
            <td className="border-[1px] border-[#0052CC] text-[14px] sm:text-[16px] text-center h-[56.13px] w-[80px]">
              11:59
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ActivitiesTable;
