/** @format */

import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CreateItemForm({
  CloseItemModal,
  variantRef,
  toggleClass,
  addItem,
  trackProductToggle,
  changeTrackProductToggle,
  productName,
  productCode,
  date,
  active,
  quantity,
  changeProductName,
  changeProductCode,
  changeDate,
  changeStatus,
  changeQuantity,
  OpenVaiantModal,
  variantDetails,
  toggleVariantBox,
}) {
  return (
    <form className="rounded-lg bg-white w-full lg:w-[600px] z-50 shadow-md">
      <div className="flex items-center justify-between h-[60px] px-6">
        <h2 className="text-xl">New Item</h2>
        <button className="" type="button" onClick={CloseItemModal}>
          <FontAwesomeIcon icon={faClose} className="" />
        </button>
      </div>
      <div className="overflow-y-auto h-[460px] px-6">
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center ">
            <input
              ref={variantRef}
              type="checkbox"
              name="Create variant"
              id=""
              className="bg-[#D3D3D3]/30 ring-[#0052CC] ring-[1px] rounded-[4px] checked:bg-[#0052CC] custom-checkbox focus:ring-0"
              onClick={OpenVaiantModal}
              onChange={toggleVariantBox}
            />
            <p className="mx-3">Create Variant</p>
          </div>
          <div className="flex items-center text-right">
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#D3D3D3] rounded-full p-1 cursor-pointer"
              onClick={changeTrackProductToggle}
            >
              {/* Switch */}
              <div
                className={` md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md 
   transform ${trackProductToggle ? "bg-[#A9A9A9]" : toggleClass}`}
              ></div>
            </div>
            <p className="mx-3 ">Track Product</p>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Product Name" className="lg:my-3">
            Product Name
          </label>
          <input
            type="text"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC] border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
            value={productName}
            onChange={(e) => changeProductName(e)}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Product Code" className="lg:my-3">
            Product code
          </label>
          <input
            type="text"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC]  border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
            value={productCode}
            onChange={(e) => changeProductCode(e)}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Status" className="lg:my-3">
            Status
          </label>
          <div className="lg:flex items-center justify-between">
            <button
              className={`${
                active
                  ? "bg-[#0052CC] text-white"
                  : " border-2 border-[#0052CC]"
              } px-20 py-2 rounded-[8px] my-4`}
              type="button"
              onClick={() => changeStatus(true)}
            >
              Active
            </button>
            <button
              type="button"
              className={`${
                !active
                  ? "bg-[#0052CC] text-white"
                  : " border-2 border-[#0052CC]"
              } px-20 py-2 rounded-[8px] lg:my-0 my-4`}
              onClick={() => changeStatus(false)}
            >
              InActive
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="In Stock" className="lg:my-3">
            In Stock
          </label>
          <input
            type="text"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC]  border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
            value={quantity}
            onChange={(e) => changeQuantity(e)}
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Date" className="lg:my-3">
            Date
          </label>
          <input
            type="date"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC]  border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
            value={date}
            onChange={(e) => changeDate(e)}
          />
        </div>
      </div>
      <div className="flex items-center justify-end h-[60px] px-6">
        <button
          type="button"
          className={`bg-[#0052CC] text-white px-10 py-2 rounded-[8px] `}
          onClick={addItem}
        >
          Done
        </button>
      </div>
    </form>
  );
}

export default CreateItemForm;
