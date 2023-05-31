/** @format */

import React from "react";
import RecordSales from "../assets/images/svg/arcticonsnoteIcon.svg";
import TrackSales from "../assets/images/svg/currentLocationIcon.svg";
import SalesInventory from "../assets/images/salesInventory.png";
import ManageStocks from "../assets/images/manageStocks.png";

const ServicesCards = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-full flex px-[60px] mb-[136px] mt-[45px] lg:flex-row flex-col">
          <div className=" lg:my-0 my-4   flex justify-center items-center flex-col px-[20px] py-10 rounded-[8px]  border-[#ADB4BD] md:ml-0 ml-[24px] border-solid border-2">
            <img src={RecordSales} className="w-[52px]" alt="" />
            <h3 className="align-center text-[#3C4652] font-[500] my-[15px] text-[24px]">
              Record Sales
            </h3>
            <p className="text-[#768291] text-center font-[400] text-[14px] ">
              Get up to date sales record for your business without the fear of
              losing them
            </p>
          </div>

          <div className=" lg:my-0 my-4   flex justify-center items-center flex-col px-[20px] py-10 rounded-[8px] ml-[24px] border-[#ADB4BD] border-solid border-2">
            <img src={TrackSales} className="w-[52px]" alt="" />
            <h3 className="align-center text-[#3C4652] font-[500] my-[15px] text-[24px]">
              Track Sales
            </h3>
            <p className="text-[#768291] text-center font-[400] text-[14px]">
              Never miss any update on your sales. From the point of order till
              it is delivered
            </p>
          </div>

          <div className=" lg:my-0 my-4   flex justify-center items-center flex-col px-[20px] py-10 rounded-[8px] ml-[24px] border-[#ADB4BD] border-solid border-2">
            <img src={SalesInventory} className="w-[52px]" alt="" />
            <h3 className="align-center text-[#3C4652] font-[500] my-[15px] text-[24px]">
              Sales Inventory
            </h3>
            <p className="text-[#768291] text-center font-[400] text-[14px]">
              Keep record of all sales past, present and future and also see
              what is left in your store
            </p>
          </div>

          <div className=" lg:my-0 my-4   flex justify-center items-center flex-col px-[20px] py-10 px-[20px] ml-[24px] rounded-[8px]  border-[#ADB4BD] border-solid border-2">
            <img
              src={ManageStocks}
              className="w-[52px] align-center"
              alt="manage"
            />
            <h3 className="align-center text-[#3C4652] font-[500] my-[15px] text-[24px]">
              Manage Stocks
            </h3>
            <p className="text-[#768291] text-center font-[400] text-[14px]">
              Real time stock updates so you do not ever run out of stocks or
              buy too much
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
