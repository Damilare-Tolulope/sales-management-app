/** @format */

import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ReportInfo({ CloseItemModal, addItem }) {
  return (
    <div className="bg-white rounded">
      <div className="flex items-center justify-between h-[60px] px-4">
        <h1 className="text-xl">Report on Product defects</h1>
        <button className="" type="button" onClick={CloseItemModal}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <div className="w-[800px] overflow-y-auto h-[460px] px-4">
        <form>
          <h2 className="mb-4 text-xl">Product Information</h2>
          <hr />
          <div className="px-2 py-2">
            <div className="mb-6">
              <label htmlFor="Product name">Product name</label>
              <input
                type="text"
                placeholder="Product name"
                className="w-full h-10 border border-[#0052CC] rounded"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="Product number(s)">Product number(s)</label>
              <input
                type="text"
                placeholder="Product number(s)"
                className="w-full h-10 border border-[#0052CC] rounded"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="Defect description">Defect description</label>
              <input
                type="text"
                placeholder="Defect description"
                className="w-full h-10 border border-[#0052CC] rounded"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="Date defect was noted">
                Date defect was noted
              </label>
              <input
                type="text"
                placeholder="Date defect was noted"
                className="w-full h-10 border border-[#0052CC] rounded"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="Number of products affected">
                Number of products affected
              </label>
              <input
                type="text"
                placeholder="Number of products affected"
                className="w-full h-10 border border-[#0052CC] rounded"
              />
            </div>
          </div>
          <h2 className="mb-4 text-xl">Cost of Repair/Replacement</h2>
          <hr />
          <div className="px-2 py-2">
            <div className="mb-6">
              <label htmlFor="Cost of Repair">Cost of Repair</label>
              <input
                type="text"
                placeholder="Cost of Repair"
                className="w-full h-10 border border-[#0052CC] rounded"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="Cost of Replacement">Cost of Replacement</label>
              <input
                type="text"
                placeholder="Cost of Replacement"
                className="w-full h-10 border border-[#0052CC] rounded"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="Contacted the Supplier?">
                Contacted the Supplier?
              </label>
              <select className="w-full h-10 border border-[#0052CC] rounded">
                <option value="" selected>
                  Select Option
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="Ordered for a replacement?">
                Ordered for a replacement?
              </label>
              <select className="w-full h-10 border border-[#0052CC] rounded">
                <option value="" selected>
                  Select Option
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end h-[60px] px-4">
        <button
          className="bg-[#0052CC] text-white rounded px-6 py-2"
          type="button"
          onClick={CloseItemModal}
        >
          Save Report
        </button>
      </div>
    </div>
  );
}

export default ReportInfo;
