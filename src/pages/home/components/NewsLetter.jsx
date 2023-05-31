/** @format */

import React from "react";
import newsLetter from "../../../assets/images/newsLetter.svg";

function NewsLetter() {
  return (
    <div className=" w-full flex justify-center items-center flex-col py-8">
      <h6 className="text-[#0052CC] font-bold text-[16px] mt-10">Newsletter</h6>
      <h6 className="py-4 font-bold md:text-[30px] text-2xl text-[#3C4652]">
        Be the First to Know
      </h6>
      <hr className="bg-[#0052CC] w-[48px] mb-[10px]  font-bold h-[4px] flex justify-center items-center flex-col"></hr>
      <div className="flex md:flex-row flex-col ">
        <div className="flex flex-col items-center md:w-[50%] m-12">
          <img
            src={newsLetter}
            className="max-w-[100%] max-h-[100%] "
            alt="newsLetter"
          />
        </div>
        <div className="py-8 flex  items-center md:mx-0 mx-5 ">
          <div className=" max-w-[100%]">
            <h6 className="text-[#3C4652] font-[500] text-[24px]">
              Subscribe to our Newsletter
            </h6>
            <p className="py-3 text-[#7F7F7F] text-[18px] font-[400] w-[90%]">
              Stay updated with our articles on how to set up your inventories
              and manage your stock properly
            </p>
            <div className="md:w-2/3 my-6">
              <input
                className="rounded-md appearance-none border-2 border-[#7F7F7F]  w-[300px] py-2 px-4 text-[#7F7F7F] leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <button className="w-[130px] h-[45px] px-[16px]  bg-[#0052CC] rounded-[8px] text-[#FFFFFF]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
