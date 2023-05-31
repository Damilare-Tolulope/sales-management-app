/** @format */
import React, { useState } from "react";
import SalesTable from "./SalesTable";
import plusIcon from "../../../../assets/images/svg/plus-circle.svg";
import plusIconWhite from "../../../../assets/images/svg/plus-circle-white.svg";
import CustomModal from "../../../../components/CustomModal";
import AddSales from "./AddSales";

function SalesDetailsTable() {
  const [active, setActive] = useState(false);
  const confirmSummary = () => {
    setActive(false);
  };
  return (
    <>
      <div className="m-[2rem]">
        <div className="btn-container flex flex-row end items-center mt-5">
          <div className="w-1/2"></div>

          <div className="w-1/2 flex flex-row content-end justify-end end items-center">
            <div className="w-1/2 text-center mx-auto">
              <button className="btn py-2 px-[12px] rounded text-white bg-[#0052CC] border-solid border-[#0052CC] border mx-1 flex flex-row">
                <img
                  src={plusIconWhite}
                  alt="plusIcon"
                  className="whitespace-nowrap mr-2"
                />
                Download record
              </button>
            </div>

            <div className="w-1/2 text-center mx-auto">
              <button
                type="button"
                onClick={() => setActive(true)}
                className="btn py-2 px-[12px] rounded text-[#0052CC] bg-[#fff] hover:bg[#0052CC] border-solid border-[#0052CC] border  mx-1 flex flex-row"
              >
                <img
                  src={plusIcon}
                  alt="plusIcon"
                  className="whitespace-nowrap mr-2"
                />
                Add sales
              </button>
            </div>
          </div>
        </div>

        <SalesTable />

        <CustomModal onClose={() => setActive(false)} visible={active}>
          <AddSales confirmSummary={confirmSummary} />
        </CustomModal>
      </div>
    </>
  );
}

export default SalesDetailsTable;
