/** @format */

import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Plus from "../../../../assets/images/svg/plus.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddSales({ confirmSummary }) {
  return (
    <div className="bg-white rounded">
      <div className="flex items-center justify-between h-[60px] px-4">
        <h1 className="text-xl">Add Sales</h1>
        <button className="" type="button" onClick={confirmSummary}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>

      <div className="w-full overflow-y-auto h-[460px] px-4">
        <form className="text-[#7F7F7F]">
          <div className="flex justify-around mb-4">
            <div className="w-2/4 px-2">
              <label htmlFor="productCode">Product Code</label>
              <input
                type="text"
                placeholder="Enter code"
                className="w-full p-1 h-10 border border-[#333333] rounded"
              />
            </div>
            <div className="w-2/4 px-2">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                className="w-full p-1 h-10 border border-[#333333] rounded"
              />
            </div>
          </div>

          <div className="flex justify-around mb-4">
            <div className="w-2/4 px-2">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                placeholder="Enter quantity"
                className="w-full p-1 h-10 border border-[#333333] rounded"
              />
            </div>
            <div className="w-2/4 px-2">
              <label htmlFor="Category">Select category</label>
              <select className="w-full h-10 border border-[#333333] rounded">
                <option value="">Select Option</option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>

          <div className="flex justify-around mb-4">
            <div className="w-2/4 px-2">
              <label htmlFor="unitPrice">Unit Price</label>
              <input
                type="text"
                placeholder="Enter product price"
                className="w-full p-1 h-10 border border-[#333333] rounded"
              />
            </div>
            <div className="w-2/4 px-2">
              <label htmlFor="productCode">Total Price</label>
              <input
                type="text"
                placeholder="Enter product price"
                className="w-full p-1 h-10 border border-[#333333] rounded"
              />
            </div>
          </div>

          <div className="flex justify-around mb-4">
            <div className="w-2/4 px-2">
              <label htmlFor="productDescription">Product Description</label>
              <textarea
                className="w-full rounded"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Product Description"
              ></textarea>
            </div>
            <div className="w-2/4 px-2">
              <label htmlFor="productImage">Product Image</label>
              <div className="w-full p-1 h-64 border border-[#333333] rounded flex items-center relative text-center justify-center">
                <input
                  type="file"
                  className="w-3/4 opacity-0 p-1 h-10 border border-[#0052CC] rounded absolute cursor-pointer"
                />
                <button
                  type="button"
                  className="w-3/4 border-2 border-[#0052CC] h-10 px-10 rounded my-2 flex items-center"
                >
                  <img src={Plus} alt="plus" className="mr-2" />
                  <span>Upload Image</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-end h-[60px]">
        <div className="w-2/4 px-2 text-right">
          <button
            className="bg-[#0052CC] text-white rounded px-6 py-2"
            type="button"
            onClick={confirmSummary}
          >
            Update sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSales;
